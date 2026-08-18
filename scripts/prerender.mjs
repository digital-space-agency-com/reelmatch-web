/**
 * Renders every route to static HTML after the Vite build.
 *
 * Without this, the deployed site ships an empty <div id="root"> and only
 * crawlers that execute JavaScript ever see the content. Googlebot renders JS;
 * GPTBot, ClaudeBot, PerplexityBot and CCBot largely do not, which is what made
 * the robots.txt AI-crawler allowlist pointless. Each page below is written to
 * disk fully rendered, with its own title, description, canonical and JSON-LD.
 *
 * Also emits sitemap.xml and llms.txt from the same data, so neither can drift
 * out of date the way a hand-maintained sitemap does.
 */
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  rmSync,
  existsSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

// react-dom/server is resolved from node_modules at runtime, and it picks its
// development or production build from NODE_ENV. Left unset it renders in
// development mode while the client bundle hydrates in production mode, and the
// two disagree — React throws away the prerendered DOM and re-renders from
// scratch. Set before entry-server.js (and therefore react-dom) is imported.
process.env.NODE_ENV ??= "production";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(root, "dist");
const ssrDir = join(root, "dist-ssr");

const { render, pages, guides, allFaqs } = await import(
  pathToFileURL(join(ssrDir, "entry-server.js")).href
);

const SITE_URL = "https://reelmatch.app";
const template = readFileSync(join(distDir, "index.html"), "utf8");

/** Escapes a JSON-LD payload so it cannot terminate its own <script> tag. */
const jsonLdScript = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data, null, 2)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")}</script>`;

const escapeAttr = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const canonicalFor = (path) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);

function buildHead(html, page) {
  const canonical = canonicalFor(page.path);
  const title = escapeAttr(page.title);
  const description = escapeAttr(page.description);

  const replacements = [
    [/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`],
    [
      /<meta name="description" content="[^"]*"/,
      `<meta name="description" content="${description}"`,
    ],
    [
      /<meta property="og:title" content="[^"]*"/,
      `<meta property="og:title" content="${title}"`,
    ],
    [
      /<meta property="og:description" content="[^"]*"/,
      `<meta property="og:description" content="${description}"`,
    ],
    [
      /<meta property="og:url" content="[^"]*"/,
      `<meta property="og:url" content="${canonical}"`,
    ],
    [
      /<meta name="twitter:title" content="[^"]*"/,
      `<meta name="twitter:title" content="${title}"`,
    ],
    [
      /<meta name="twitter:description" content="[^"]*"/,
      `<meta name="twitter:description" content="${description}"`,
    ],
    [
      /<meta name="twitter:url" content="[^"]*"/,
      `<meta name="twitter:url" content="${canonical}"`,
    ],
    [
      /<link rel="canonical" href="[^"]*"/,
      `<link rel="canonical" href="${canonical}"`,
    ],
  ];

  let out = replacements.reduce(
    (acc, [pattern, value]) => acc.replace(pattern, value),
    html,
  );

  // hreflang is self-referencing on every route, so it has to follow the page.
  out = out.replace(
    /<link rel="alternate" hreflang="([^"]+)" href="[^"]*" \/>/g,
    (_match, lang) =>
      `<link rel="alternate" hreflang="${lang}" href="${canonical}" />`,
  );

  if (page.image) {
    out = out
      .replace(
        /<meta property="og:image" content="[^"]*"/,
        `<meta property="og:image" content="${escapeAttr(page.image)}"`,
      )
      .replace(
        /<meta name="twitter:image" content="[^"]*"/,
        `<meta name="twitter:image" content="${escapeAttr(page.image)}"`,
      );
  }

  // The hero image only exists on the homepage; preloading it elsewhere wastes
  // a request and trips the "preloaded but not used" browser warning.
  if (page.path !== "/") {
    out = out.replace(
      /\n\s*<link rel="preload" as="image"[^>]*>/,
      "",
    );
  }

  const jsonLd = page.jsonLd.map(jsonLdScript).join("\n    ");
  return out.replace("<!--seo:jsonld-->", jsonLd);
}

/**
 * Static hosts disagree about how they resolve an extensionless URL: some map
 * /faq to faq.html, others to faq/index.html and 301 anything without the
 * trailing slash. Writing both means /faq resolves directly on either, so the
 * canonical URL in the sitemap never costs a redirect hop.
 */
function outputPaths(path) {
  if (path === "/") return [join(distDir, "index.html")];
  const relative = path.replace(/^\//, "");
  return [
    join(distDir, relative, "index.html"),
    join(distDir, `${relative}.html`),
  ];
}

let rendered = 0;
for (const page of pages) {
  const appHtml = render(page.path);
  let html = buildHead(template, page);
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  );

  for (const [index, file] of outputPaths(page.path).entries()) {
    // The flat variant (index 1) must never clobber a hand-written page copied
    // from public/ — public/download.html is its own document.
    if (index === 1 && existsSync(file)) continue;
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, html);
  }
  rendered += 1;

  const textLength = appHtml.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
    .length;
  console.log(
    `  prerendered ${page.path.padEnd(48)} ${String(textLength).padStart(6)} chars of text`,
  );
}

/* ---------------------------------------------------------------- sitemap */

const sitemapEntries = pages
  .filter((page) => page.sitemap)
  .map(
    (page) => `  <url>
    <loc>${canonicalFor(page.path)}</loc>
    <lastmod>${page.sitemap.lastmod}</lastmod>
    <changefreq>${page.sitemap.changefreq}</changefreq>
    <priority>${page.sitemap.priority}</priority>
  </url>`,
  )
  .join("\n");

writeFileSync(
  join(distDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>
`,
);

/* --------------------------------------------------------------- llms.txt */

const llms = `# ReelMatch

> ReelMatch is a movie and TV matching app that helps couples, friends and families agree on what to watch. Everyone swipes through trailers on their own phone, and when two or more people swipe right on the same title it becomes a match — a film or series everyone has already said yes to, so there is nothing left to negotiate.

ReelMatch is built and maintained by Digital Space Agency UG. It is free to download and use on iOS and Android, with an optional ReelMatch Pro subscription that unlocks streaming-provider filters, genre filters, and instant TV launch.

## How matching works

A match is an intersection, not a prediction. ReelMatch stores each user's right swipes and compares them against the right swipes of the friends and family they are connected to. A title that everyone has swiped right on is reported as a match. Because every option on the match list has been explicitly approved by each person, no one has to reject anyone else's suggestion.

## Core features

- Swipe to watch: swipe right on a trailer to add it to your watchlist, swipe left to pass. Recommendations sharpen as you swipe.
- Sync with friends and family: connect with the people you actually watch with and see where your tastes overlap.
- Match for movie night: any title two or more connected people swiped right on becomes a match.
- Group matching: works for three or more people, which is the case where choosing manually breaks down entirely.
- Cross-platform matching: iOS and Android users match with each other with no extra setup.
- Instant TV launch (Pro): open a matched title on the TV without hunting through streaming apps.
- Provider and genre filters (Pro): restrict the deck to services you already pay for (Netflix, Prime Video, Disney+, and others) and to genres you want.
- Release-year filtering: limit recommendations to the last 5, 10 or 15 years, or view everything.

## Who it is for

Couples with different taste in films, friend groups organising a movie night, and families who spend longer choosing than watching. Useful to anyone subscribed to one or more streaming services who is tired of scrolling a catalogue.

## What ReelMatch does not do

ReelMatch does not stream anything. It tells you what to watch and where it is available; playback happens in your own streaming apps. Everyone you want to match with needs the app, because a match is the overlap between two people's swipes.

## Pages

- [Homepage](${SITE_URL}/): what ReelMatch is and how it works
- [FAQ](${SITE_URL}/faq): pricing, streaming coverage, privacy, group matching and Pro features
- [Guides](${SITE_URL}/guides): how to decide what to watch with a partner or a group
${guides
  .map(
    (guide) =>
      `- [${guide.title}](${SITE_URL}/guides/${guide.slug}): ${guide.description}`,
  )
  .join("\n")}
- [Download](${SITE_URL}/download): links to the iOS and Android apps
- [App Store listing](https://apps.apple.com/app/reelmatch/id6457263386): iOS app, screenshots and reviews
- [Google Play listing](https://play.google.com/store/apps/details?id=team.dsa.reelmatch): Android app, screenshots and reviews
- [Privacy Policy](${SITE_URL}/privacy-policy): data collection and privacy practices
- [YouTube channel](https://www.youtube.com/@reelmatchapp): trailer breakdowns and app walkthroughs

## Frequently asked questions

${allFaqs.map((faq) => `### ${faq.question}\n\n${faq.answer}`).join("\n\n")}

## Optional

- Platforms: iOS, Android
- Price: free, with an optional ReelMatch Pro subscription
- Category: movie and TV discovery / recommendation app
- Data sources: film and series metadata from The Movie Database (TMDB); trailers from YouTube
- Contact: hey@reelmatch.app
`;

writeFileSync(join(distDir, "llms.txt"), llms);

rmSync(ssrDir, { recursive: true, force: true });

console.log(
  `\n  ${rendered} routes prerendered, sitemap.xml and llms.txt regenerated.\n`,
);
