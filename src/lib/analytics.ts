import { GA_MEASUREMENT_ID } from "@/seo/site";

type Gtag = (...args: unknown[]) => void;
type AnalyticsWindow = Window & { dataLayer?: unknown[]; gtag?: Gtag } & Record<string, unknown>;

let loaded = false;

/**
 * Loads Google Analytics 4 once, and only after the visitor has accepted
 * analytics cookies. Does nothing until GA_MEASUREMENT_ID is set.
 *
 * GA4's enhanced measurement records page views on client-side route changes
 * (browser history events), so no router hook is needed. Store-badge clicks
 * are sent as "store_badge_click" by trackStoreClick in src/lib/download.ts.
 */
export function enableAnalytics() {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined") return;
  const w = window as AnalyticsWindow;
  w[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
  if (loaded) return;
  loaded = true;

  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // gtag.js expects the arguments object itself, not an array.
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments);
  };
  w.gtag("js", new Date());
  w.gtag("config", GA_MEASUREMENT_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

/**
 * Stops sending data and removes GA's cookies when the visitor declines or
 * withdraws analytics consent. GA sets them on the top-level domain
 * (.reelmatch.app), so each is expired for the host and every parent domain.
 */
export function disableAnalytics() {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined") return;
  (window as AnalyticsWindow)[`ga-disable-${GA_MEASUREMENT_ID}`] = true;

  const parts = window.location.hostname.split(".");
  const domains = parts.map((_, i) => parts.slice(i).join(".")).filter((d) => d.includes(".") || d === "localhost");
  document.cookie
    .split("; ")
    .map((cookie) => cookie.split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_") || name === "_gid")
    .forEach((name) => {
      const expired = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
      document.cookie = expired;
      domains.forEach((domain) => {
        document.cookie = `${expired}; domain=.${domain}`;
      });
    });
}
