/**
 * Single source of truth for the URLs and identifiers that appear in metadata,
 * structured data, llms.txt and the prerendered HTML. Keeping them here stops
 * the store links and canonicals drifting apart between pages.
 */
export const SITE_URL = "https://reelmatch.app";

/** Storefront-neutral: no /ie/ segment, so Apple resolves the visitor's own region. */
export const APP_STORE_URL = "https://apps.apple.com/app/reelmatch/id6457263386";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=team.dsa.reelmatch";

export const SOCIAL_URLS = [
  APP_STORE_URL,
  PLAY_STORE_URL,
  "https://www.youtube.com/@reelmatchapp",
  "https://x.com/ReelMatch",
  "https://www.producthunt.com/products/reelmatch",
];

export const ORGANIZATION = {
  "@type": "Organization",
  name: "Digital Space Agency UG",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/reelmatch_favicon.png`,
    width: 512,
    height: 512,
  },
} as const;

export const absoluteUrl = (path: string) =>
  path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
