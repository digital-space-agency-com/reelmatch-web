/**
 * Submits every canonical URL to IndexNow after a deploy.
 *
 * IndexNow is a push protocol: rather than waiting for Bing to re-crawl on its
 * own schedule, one POST tells Bing, Yandex, Seznam and Naver that a set of
 * URLs changed. Google does not participate, so this complements Search
 * Console rather than replacing it.
 *
 * Bing's index matters here beyond Bing's own traffic — ChatGPT and Copilot
 * ground their answers on it, and the 18 Aug 2026 audit found ReelMatch absent
 * from every non-branded AI answer tested. Faster Bing indexing of /faq and
 * /guides/* is the cheapest lever on that.
 *
 * Reads dist/sitemap.xml so it always submits exactly what was published, and
 * runs standalone after a build:
 *
 *   npm run build && npm run indexnow
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(root, "dist");
const publicDir = join(root, "public");

const SITE_URL = "https://reelmatch.app";
const HOST = "reelmatch.app";
const ENDPOINT = "https://api.indexnow.org/IndexNow";

/**
 * The key lives in a file at the site root named for the key itself, which is
 * how the API verifies you control the host. Discovered rather than hardcoded
 * so rotating the key is just swapping the file.
 */
function findKey() {
  const candidates = readdirSync(publicDir).filter((name) =>
    /^[0-9a-f]{8,128}\.txt$/i.test(name),
  );

  if (candidates.length === 0) {
    throw new Error(
      "No IndexNow key file in public/. Create one named <key>.txt whose " +
        "contents are the key itself, e.g. " +
        "node -e \"const k=require('crypto').randomBytes(16).toString('hex');" +
        'require("fs").writeFileSync(`public/${k}.txt`,k)"',
    );
  }

  if (candidates.length > 1) {
    throw new Error(
      `Multiple IndexNow key files in public/ (${candidates.join(", ")}). ` +
        "Keep exactly one so the submitted key and the hosted key cannot diverge.",
    );
  }

  const file = candidates[0];
  const key = readFileSync(join(publicDir, file), "utf8").trim();

  if (key !== file.replace(/\.txt$/i, "")) {
    throw new Error(
      `Key file ${file} does not contain its own filename. IndexNow verifies ` +
        "the host by fetching /<key>.txt and matching the contents.",
    );
  }

  return key;
}

function urlsFromSitemap() {
  const sitemapPath = join(distDir, "sitemap.xml");

  if (!existsSync(sitemapPath)) {
    throw new Error(
      "dist/sitemap.xml not found — run `npm run build` before submitting.",
    );
  }

  const xml = readFileSync(sitemapPath, "utf8");
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

  if (urls.length === 0) {
    throw new Error("dist/sitemap.xml contains no <loc> entries.");
  }

  const foreign = urls.filter((url) => !url.startsWith(SITE_URL));
  if (foreign.length > 0) {
    throw new Error(
      `Sitemap contains URLs outside ${SITE_URL}: ${foreign.join(", ")}. ` +
        "IndexNow rejects a submission if any URL is off-host.",
    );
  }

  return urls;
}

const dryRun = process.argv.includes("--dry-run");

const key = findKey();
const urlList = urlsFromSitemap();

console.log(`\n  IndexNow — ${urlList.length} URLs, key ${key.slice(0, 8)}…`);
for (const url of urlList) console.log(`    ${url}`);

if (dryRun) {
  console.log("\n  --dry-run: nothing submitted.\n");
  process.exit(0);
}

const response = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key,
    keyLocation: `${SITE_URL}/${key}.txt`,
    urlList,
  }),
});

const body = await response.text();

// 200 accepted, 202 accepted but key still being validated. Both are fine.
if (response.status === 200 || response.status === 202) {
  console.log(`\n  Submitted — HTTP ${response.status}.\n`);
  process.exit(0);
}

console.error(
  `\n  IndexNow rejected the submission — HTTP ${response.status}.\n` +
    `  ${body || "(empty response body)"}\n` +
    "  403 means the key file is not reachable at the URL above; confirm the\n" +
    "  deploy published it before retrying.\n",
);
process.exit(1);
