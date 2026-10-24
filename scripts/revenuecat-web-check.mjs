#!/usr/bin/env node
/**
 * Checks the RevenueCat Web Billing setup for the /pro page and says what is
 * still missing. Read-only: it never changes RevenueCat.
 *
 *   node scripts/revenuecat-web-check.mjs            # report
 *   node scripts/revenuecat-web-check.mjs --write    # also fill publicApiKey and
 *                                                    # offeringId in src/seo/site.ts
 *
 * Key: REVENUECAT_API_KEY, or the file ~/.revenuecat_key (v2 secret key, read
 * access to projects, apps, products, entitlements, offerings and packages).
 * Project: REVENUECAT_PROJECT, default proj63543bb0.
 *
 * Why it only reads: RevenueCat's v2 API cannot create Web Billing products or
 * prices, so those steps are in the dashboard (printed below when missing).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const PROJECT = process.env.REVENUECAT_PROJECT ?? "proj63543bb0";
const ENTITLEMENT = "pro";
const key =
  process.env.REVENUECAT_API_KEY ??
  readFileSync(join(homedir(), ".revenuecat_key"), "utf8").trim();
const write = process.argv.includes("--write");

const api = async (path) => {
  const res = await fetch(`https://api.revenuecat.com/v2/projects/${PROJECT}${path}`, {
    headers: { Authorization: `Bearer ${key}` },
  });
  if (!res.ok) throw new Error(`${res.status} ${path}: ${(await res.text()).slice(0, 200)}`);
  return res.json();
};
const list = async (path) => (await api(path)).items ?? [];

const ok = (m) => console.log(`  ✓ ${m}`);
const todo = (m) => {
  console.log(`  ✗ ${m}`);
  missing.push(m);
};
const missing = [];

console.log(`RevenueCat project ${PROJECT}\n`);

// 1. Web Billing app
const apps = await list("/apps");
const web = apps.find((a) => a.type === "rc_billing");
if (!web) {
  todo(
    "No Web Billing app. Dashboard → Apps & providers → + New → RevenueCat Billing, then connect Stripe.",
  );
} else {
  ok(`Web Billing app: ${web.name} (${web.id})`);
}

// 2. Web products
let webProducts = [];
if (web) {
  webProducts = (await list("/products?limit=100")).filter((p) => p.app_id === web.id);
  const monthly = webProducts.find((p) => p.subscription?.duration === "P1M");
  const annual = webProducts.find((p) => p.subscription?.duration === "P1Y");
  monthly ? ok(`Monthly product: ${monthly.store_identifier}`) : todo("No monthly web product (P1M). Dashboard → Product catalog → Products → Web Billing → + New. Set the discounted price per region.");
  annual ? ok(`Annual product: ${annual.store_identifier}`) : todo("No annual web product (P1Y). Same place; set the discounted annual price per region.");

  // 3. Entitlement
  const ent = (await list("/entitlements")).find((e) => e.lookup_key === ENTITLEMENT);
  if (!ent) todo(`No "${ENTITLEMENT}" entitlement found.`);
  else {
    const attached = new Set((await list(`/entitlements/${ent.id}/products`)).map((p) => p.id));
    for (const p of [monthly, annual].filter(Boolean)) {
      attached.has(p.id)
        ? ok(`${p.store_identifier} grants "${ENTITLEMENT}"`)
        : todo(`Attach ${p.store_identifier} to the "${ENTITLEMENT}" entitlement (Entitlements → ${ENTITLEMENT} → Attach).`);
    }
  }

  // 4. Offering with both packages
  const offerings = await list("/offerings?limit=50");
  let chosen = null;
  for (const o of offerings) {
    const pkgs = await list(`/offerings/${o.id}/packages`);
    const used = [];
    for (const pk of pkgs) {
      const prods = await list(`/packages/${pk.id}/products`);
      for (const pp of prods) {
        const product = webProducts.find((w) => w.id === (pp.product?.id ?? pp.id));
        if (product) used.push(`${pk.lookup_key}`);
      }
    }
    if (used.includes("$rc_monthly") && used.includes("$rc_annual")) {
      chosen = o;
      break;
    }
  }
  chosen
    ? ok(`Offering with web monthly + annual: "${chosen.lookup_key}"${chosen.is_current ? " (current)" : ""}`)
    : todo(
        "No offering with web products in both $rc_monthly and $rc_annual. Create an offering (e.g. \"web\"), add both packages and attach the web products. Do NOT make it current: the app uses the current offering.",
      );

  // 5. Public SDK key
  let publicKey = null;
  try {
    const keys = await list(`/apps/${web.id}/public_api_keys`);
    publicKey = keys.find((k) => k.environment === "production")?.key ?? null;
  } catch (e) {
    console.log(`  (could not read public keys: ${e.message})`);
  }
  publicKey
    ? ok(`Public SDK key found (${publicKey.slice(0, 6)}…)`)
    : todo("Public SDK key not readable. Dashboard → Apps & providers → your Web Billing app → API keys → Public API key (starts rcb_).");

  if (write && publicKey && chosen) {
    const file = join(dirname(fileURLToPath(import.meta.url)), "../src/seo/site.ts");
    let src = readFileSync(file, "utf8");
    src = src.replace(/publicApiKey: "[^"]*"/, `publicApiKey: "${publicKey}"`);
    src = src.replace(/offeringId: "[^"]*"/, `offeringId: "${chosen.lookup_key}"`);
    writeFileSync(file, src);
    console.log("\nWrote publicApiKey and offeringId to src/seo/site.ts");
  }
}

console.log(
  missing.length
    ? `\n${missing.length} step(s) left. Also needed, and not checkable here: the Web Purchase Link (Dashboard → Web purchase links) → WEB_CHECKOUT.url.`
    : "\nSetup complete. Last step: create the Web Purchase Link and set WEB_CHECKOUT.url.",
);
