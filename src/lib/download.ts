const IOS_URL = "https://apps.apple.com/app/reelmatch/id6457263386";
const ANDROID_URL = "https://play.google.com/store/apps/details?id=team.dsa.reelmatch";

export function getStoreUrl(): string {
  const ua = navigator.userAgent.toLowerCase();
  if (/(iphone|ipad|ipod)/.test(ua)) return IOS_URL;
  if (/android/.test(ua)) return ANDROID_URL;
  if (/macintosh/.test(ua) && navigator.maxTouchPoints > 1) return IOS_URL;
  return "";
}

export function handleDownloadClick(e: React.MouseEvent<HTMLAnchorElement>) {
  const url = getStoreUrl();
  if (url) {
    e.preventDefault();
    window.location.href = url;
  }
  // Desktop: no preventDefault — the link falls through to /download
}

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

/**
 * Play forwards the referrer parameter to the install, so installs that start
 * on the website show up by campaign in Play Console's acquisition reports.
 * App Store campaign links also need the provider token (pt) from App Store
 * Connect, so Apple links are left untagged until that is added.
 */
export function withStoreAttribution(url: string, page: string): string {
  if (!url.includes("play.google.com") || url.includes("referrer=")) return url;
  const referrer = new URLSearchParams({
    utm_source: "reelmatch.app",
    utm_medium: "website",
    utm_campaign: page === "/" ? "home" : page.replace(/^\//, ""),
  }).toString();
  return `${url}&referrer=${encodeURIComponent(referrer)}`;
}

type Gtag = (command: "event", name: string, params: Record<string, string>) => void;

/** No-op until a GA4 web stream is installed on the site. */
export function trackStoreClick(store: "apple" | "google", page: string) {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  gtag?.("event", "store_badge_click", { store, page_path: page });
}
