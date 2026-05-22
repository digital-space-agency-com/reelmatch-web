const IOS_URL = "https://apps.apple.com/ie/app/reelmatch/id6457263386";
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
  // Desktop: no preventDefault — follows the href to download.html
}
