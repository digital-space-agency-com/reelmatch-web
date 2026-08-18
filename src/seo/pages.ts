import { allFaqs, faqPageJsonLd, homepageFaqs } from "@/data/faq";
import { guides } from "@/data/guides";
import {
  APP_STORE_URL,
  ORGANIZATION,
  PLAY_STORE_URL,
  SITE_URL,
  SOCIAL_URLS,
  absoluteUrl,
} from "./site";

export type PageMeta = {
  /** Route path, also the output directory for the prerendered HTML. */
  path: string;
  title: string;
  description: string;
  /** Overrides og:image when the page has its own share image. */
  image?: string;
  /** Emitted into sitemap.xml. */
  sitemap?: { changefreq: string; priority: string; lastmod: string };
  jsonLd: unknown[];
};

const BUILD_DATE = "2026-08-18";

const breadcrumb = (trail: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: absoluteUrl(crumb.path),
  })),
});

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: "ReelMatch",
  description:
    "ReelMatch is a movie and TV matching app that helps couples, friends and families agree on what to watch by swiping trailers and matching on shared picks.",
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  ...ORGANIZATION,
  "@id": `${SITE_URL}/#organization`,
  sameAs: SOCIAL_URLS,
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "@id": `${SITE_URL}/#app`,
  name: "ReelMatch",
  alternateName: "ReelMatch: Movie & Trailer App for Friends",
  url: `${SITE_URL}/`,
  description:
    "Find movies you both want to watch with ReelMatch. Swipe through trailers and match with friends on films you'll both enjoy. Free on iOS and Android.",
  applicationCategory: "EntertainmentApplication",
  applicationSubCategory: "Movie & TV discovery",
  operatingSystem: "iOS, Android",
  inLanguage: "en",
  author: { "@id": `${SITE_URL}/#organization` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  image: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/social-preview.png`,
    width: 1200,
    height: 630,
    caption: "ReelMatch App Interface Preview",
  },
  screenshot: [
    {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/reelmatch_home_he-man.png`,
      caption: "ReelMatch app showing the movie trailer swiping interface",
    },
    {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/screen_home_1.png`,
      caption: "ReelMatch home screen with trailer recommendations",
    },
  ],
  featureList: [
    "Swipe trailers to build a watchlist",
    "Sync watchlists with friends and family",
    "Match on movies and shows everyone wants to watch",
    "Group matching for three or more people",
    "Instant TV launch (Pro)",
    "Streaming provider and genre filters (Pro)",
    "Filter recommendations by release year range",
  ],
  offers: [
    {
      "@type": "Offer",
      name: "ReelMatch Free",
      price: "0",
      priceCurrency: "USD",
      category: "free",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "ReelMatch Pro",
      priceCurrency: "USD",
      category: "subscription",
      description:
        "Unlocks streaming-provider filters, genre filters, and instant TV launch",
    },
  ],
  downloadUrl: [APP_STORE_URL, PLAY_STORE_URL],
  sameAs: SOCIAL_URLS,
  keywords:
    "movie matching app, what to watch, movie app for couples, film discovery, trailer swiping, watchlist, movie night",
};

const guidePages: PageMeta[] = guides.map((guide) => {
  const url = absoluteUrl(`/guides/${guide.slug}`);
  return {
    path: `/guides/${guide.slug}`,
    title: guide.metaTitle,
    description: guide.description,
    sitemap: {
      changefreq: "monthly",
      priority: "0.7",
      lastmod: guide.updated,
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${url}#article`,
        headline: guide.title,
        description: guide.description,
        url,
        mainEntityOfPage: url,
        datePublished: guide.published,
        dateModified: guide.updated,
        inLanguage: "en",
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: { "@id": `${SITE_URL}/#app` },
        image: `${SITE_URL}/images/social-preview.png`,
      },
      faqPageJsonLd(guide.faqs, url),
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Guides", path: "/guides" },
        { name: guide.title, path: `/guides/${guide.slug}` },
      ]),
    ],
  };
});

export const pages: PageMeta[] = [
  {
    path: "/",
    title:
      "ReelMatch — Movie Matching App | Find Films You Both Want To Watch",
    description:
      "Find movies you both want to watch with ReelMatch. Swipe through trailers and match with friends on films you'll both enjoy. Free on iOS and Android.",
    sitemap: { changefreq: "weekly", priority: "1.0", lastmod: BUILD_DATE },
    jsonLd: [
      organizationJsonLd,
      websiteJsonLd,
      appJsonLd,
      faqPageJsonLd(homepageFaqs, `${SITE_URL}/`),
    ],
  },
  {
    path: "/faq",
    title: "ReelMatch FAQ — Questions About the Movie Matching App",
    description:
      "Answers to common questions about ReelMatch: what it costs, which streaming services it covers, how matching with friends works, and how your data is handled.",
    sitemap: { changefreq: "monthly", priority: "0.8", lastmod: BUILD_DATE },
    jsonLd: [
      faqPageJsonLd(allFaqs, absoluteUrl("/faq")),
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "FAQ", path: "/faq" },
      ]),
    ],
  },
  {
    path: "/guides",
    title: "Guides — How to Decide What to Watch | ReelMatch",
    description:
      "Practical guides on choosing what to watch: deciding with a partner, picking a film for a group, and how movie matching apps work.",
    sitemap: { changefreq: "monthly", priority: "0.7", lastmod: BUILD_DATE },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${absoluteUrl("/guides")}#collection`,
        name: "ReelMatch Guides",
        description:
          "Practical guides on choosing what to watch with a partner, a friend group or a family.",
        url: absoluteUrl("/guides"),
        inLanguage: "en",
        publisher: { "@id": `${SITE_URL}/#organization` },
        hasPart: guides.map((guide) => ({
          "@type": "Article",
          headline: guide.title,
          description: guide.description,
          url: absoluteUrl(`/guides/${guide.slug}`),
        })),
      },
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Guides", path: "/guides" },
      ]),
    ],
  },
  ...guidePages,
  {
    path: "/download",
    title: "Download ReelMatch | Movie Matching App for iOS & Android",
    description:
      "Download ReelMatch free on iOS and Android. Swipe through trailers, match with friends, and discover films you'll both enjoy.",
    sitemap: { changefreq: "monthly", priority: "0.8", lastmod: BUILD_DATE },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Download ReelMatch",
        description:
          "Download the ReelMatch movie matching app free on iOS and Android.",
        url: absoluteUrl("/download"),
        inLanguage: "en",
        about: { "@id": `${SITE_URL}/#app` },
      },
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Download", path: "/download" },
      ]),
    ],
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | ReelMatch",
    description:
      "How ReelMatch collects, uses and protects your data, including watch history, account information and analytics.",
    sitemap: { changefreq: "yearly", priority: "0.4", lastmod: "2025-05-17" },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "ReelMatch Privacy Policy",
        description: "Privacy Policy for the ReelMatch mobile application",
        url: absoluteUrl("/privacy-policy"),
        inLanguage: "en",
        publisher: { "@id": `${SITE_URL}/#organization` },
        lastReviewed: "2025-05-17",
      },
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Privacy Policy", path: "/privacy-policy" },
      ]),
    ],
  },
];

export const pageByPath = (path: string) =>
  pages.find((page) => page.path === path);
