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
  "https://www.instagram.com/reelmatchapp/",
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

export const INSTAGRAM_URL = "https://www.instagram.com/reelmatchapp/";
export const YOUTUBE_URL = "https://www.youtube.com/@reelmatchapp";

/**
 * Google Analytics 4 web stream Measurement ID ("G-XXXXXXXXXX"), from
 * GA4 Admin → Data streams → Web. Leave empty to keep analytics off. It is not
 * a secret: it ships in every page that uses GA. Loaded only after a visitor
 * accepts analytics cookies (see src/lib/analytics.ts).
 */
export const GA_MEASUREMENT_ID = "G-BSYSW5XPP1";

/** The 26-second app demo, the channel's most-viewed video. */
export const DEMO_VIDEO = {
  id: "JTdq1PCcmhQ",
  name: "How to Find a Movie to Watch with Friends Instantly (ReelMatch)",
  description:
    "A 26-second demo of ReelMatch: everyone swipes through trailers on their own phone, and the app shows the movies you all said yes to.",
  uploadDate: "2024-01-11T03:56:10-08:00",
  duration: "PT26S",
};

export const demoVideoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "@id": `${SITE_URL}/#demo-video`,
  name: DEMO_VIDEO.name,
  description: DEMO_VIDEO.description,
  thumbnailUrl: `https://i.ytimg.com/vi/${DEMO_VIDEO.id}/hqdefault.jpg`,
  uploadDate: DEMO_VIDEO.uploadDate,
  duration: DEMO_VIDEO.duration,
  embedUrl: `https://www.youtube.com/embed/${DEMO_VIDEO.id}`,
  contentUrl: `https://www.youtube.com/watch?v=${DEMO_VIDEO.id}`,
  publisher: { "@id": `${SITE_URL}/#organization` },
};
