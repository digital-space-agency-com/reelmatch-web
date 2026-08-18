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
