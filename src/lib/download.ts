/**
 * Googlebot's primary crawler is Googlebot Smartphone, whose user agent
 * contains "Android" — so a naive device sniff redirects it to the Play Store
 * and Google files the page under "Page with redirect" instead of indexing it.
 * Search Console confirmed this: /download and /download.html were both
 * unindexed for that reason and had never earned a single impression.
 *
 * Crawlers get the page. Humans still get the auto-redirect.
 */
export function isCrawler(userAgent: string = navigator.userAgent): boolean {
  return /bot|crawler|crawling|spider|slurp|lighthouse|inspectiontool|externalagent|facebookexternalhit|preview/i.test(
    userAgent,
  );
}

/** Apple's provider token for the ReelMatch developer account. It is public: it
 * appears in every App Store campaign link. */
const APPLE_PROVIDER_TOKEN = "126515817";

function campaignFor(page: string): string {
  return page === "/" ? "home" : page.replace(/^\//, "").replace(/\//g, "-");
}

/**
 * Tags store links with where the visit started, so installs show up by page.
 *
 * Play forwards the referrer parameter to the install, so they appear by
 * campaign in Play Console's acquisition reports.
 *
 * App Store campaign links use the provider token (pt) plus a campaign token
 * (ct), which App Store Connect shows under App Analytics > Campaigns. Apple
 * campaign tokens allow letters, numbers, "-" and "_", up to 40 characters.
 */
export function withStoreAttribution(url: string, page: string): string {
  if (url.includes("apps.apple.com")) {
    if (url.includes("pt=")) return url;
    const ct = `web-${campaignFor(page)}`.replace(/[^A-Za-z0-9_-]/g, "-").slice(0, 40);
    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}pt=${APPLE_PROVIDER_TOKEN}&ct=${ct}&mt=8`;
  }
  if (!url.includes("play.google.com") || url.includes("referrer=")) return url;
  const referrer = new URLSearchParams({
    utm_source: "reelmatch.app",
    utm_medium: "website",
    utm_campaign: campaignFor(page),
  }).toString();
  return `${url}&referrer=${encodeURIComponent(referrer)}`;
}

type Gtag = (command: "event", name: string, params: Record<string, string>) => void;

/** No-op until a GA4 web stream is installed on the site. */
export function trackStoreClick(store: "apple" | "google", page: string) {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  gtag?.("event", "store_badge_click", { store, page_path: page });
}
