import { allFaqs, faqPageJsonLd, homepageFaqs } from "@/data/faq";
import { esFaqs } from "@/data/es";
import { guides, type Guide } from "@/data/guides";
import { guidesEs } from "@/data/guidesEs";
import {
  APP_STORE_URL,
  ORGANIZATION,
  PLAY_STORE_URL,
  SITE_URL,
  SOCIAL_URLS,
  absoluteUrl,
  demoVideoJsonLd,
} from "./site";

export type PageMeta = {
  /** Route path, also the output directory for the prerendered HTML. */
  path: string;
  title: string;
  description: string;
  /** Overrides og:image when the page has its own share image. */
  image?: string;
  /** Page language; drives <html lang>, og:locale and hreflang. Defaults to "en". */
  lang?: "en" | "es";
  /**
   * Translations of this page, including itself. Pages without translations
   * get a self-referencing "en" + "x-default" pair.
   */
  alternates?: { hreflang: string; path: string }[];
  /** Emitted into sitemap.xml. */
  sitemap?: { changefreq: string; priority: string; lastmod: string };
  jsonLd: unknown[];
};

const BUILD_DATE = "2026-09-23";

/** The homepage and /es are translations of each other. */
const homeAlternates = [
  { hreflang: "en", path: "/" },
  { hreflang: "es", path: "/es" },
  { hreflang: "x-default", path: "/" },
];

const downloadAlternates = [
  { hreflang: "en", path: "/download" },
  { hreflang: "es", path: "/es/download" },
  { hreflang: "x-default", path: "/download" },
];

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
    "Find movies you both want to watch with ReelMatch. Swipe through trailers together and find films you'll all enjoy. Free on iOS and Android.",
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

const guideLocale = {
  en: { base: "/guides", home: { name: "Home", path: "/" }, hub: "Guides" },
  es: { base: "/es/guias", home: { name: "Inicio", path: "/es" }, hub: "Guías" },
};

const guidePage = (guide: Guide, lang: "en" | "es"): PageMeta => {
  const { base, home, hub } = guideLocale[lang];
  const url = absoluteUrl(`${base}/${guide.slug}`);
  return {
    path: `${base}/${guide.slug}`,
    lang,
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
        inLanguage: lang,
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: { "@id": `${SITE_URL}/#app` },
        image: `${SITE_URL}/images/social-preview.png`,
      },
      demoVideoJsonLd,
      faqPageJsonLd(guide.faqs, url),
      breadcrumb([
        home,
        { name: hub, path: base },
        { name: guide.title, path: `${base}/${guide.slug}` },
      ]),
    ],
  };
};

const guidePages = guides.map((guide) => guidePage(guide, "en"));
const guideEsPages = guidesEs.map((guide) => guidePage(guide, "es"));

export const pages: PageMeta[] = [
  {
    path: "/",
    title: "ReelMatch: Movie Matcher App to Pick What to Watch",
    description:
      "Stop scrolling. You and your partner, friends or family swipe trailers, and ReelMatch shows the movies everyone said yes to. Free on iPhone and Android.",
    alternates: homeAlternates,
    sitemap: { changefreq: "weekly", priority: "1.0", lastmod: BUILD_DATE },
    jsonLd: [
      organizationJsonLd,
      websiteJsonLd,
      appJsonLd,
      demoVideoJsonLd,
      faqPageJsonLd(homepageFaqs, `${SITE_URL}/`),
    ],
  },
  {
    path: "/es",
    lang: "es",
    title: "App para ver películas en pareja | ReelMatch Movie Matcher",
    description:
      "Tú y tu pareja o amigos deslizan tráilers y ReelMatch les muestra las películas que a todos les gustan. Un movie matcher gratis para iPhone y Android.",
    alternates: homeAlternates,
    sitemap: { changefreq: "monthly", priority: "0.9", lastmod: BUILD_DATE },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${absoluteUrl("/es")}#webpage`,
        name: "ReelMatch: la app para ver películas en pareja, con amigos o en familia",
        description:
          "ReelMatch es un movie matcher: cada persona desliza tráilers en su teléfono y la app muestra las películas y series que a todos les gustan.",
        url: absoluteUrl("/es"),
        inLanguage: "es",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#app` },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      demoVideoJsonLd,
      faqPageJsonLd(esFaqs, absoluteUrl("/es")),
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
    path: "/es/guias",
    lang: "es",
    title: "Guías para elegir qué ver en pareja o en grupo | ReelMatch",
    description:
      "Ideas de películas para ver en pareja, en familia o con amigos, y métodos sencillos para decidir qué ver sin discutir.",
    sitemap: { changefreq: "monthly", priority: "0.7", lastmod: BUILD_DATE },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${absoluteUrl("/es/guias")}#collection`,
        name: "Guías de ReelMatch",
        description:
          "Ideas de películas y métodos para elegir qué ver en pareja, en familia o con amigos.",
        url: absoluteUrl("/es/guias"),
        inLanguage: "es",
        publisher: { "@id": `${SITE_URL}/#organization` },
        hasPart: guidesEs.map((guide) => ({
          "@type": "Article",
          headline: guide.title,
          description: guide.description,
          url: absoluteUrl(`/es/guias/${guide.slug}`),
        })),
      },
      breadcrumb([
        { name: "Inicio", path: "/es" },
        { name: "Guías", path: "/es/guias" },
      ]),
    ],
  },
  ...guideEsPages,
  {
    path: "/download",
    alternates: downloadAlternates,
    title: "Download ReelMatch | Movie Matching App for iOS & Android",
    description:
      "Download ReelMatch free on iOS and Android. Swipe through trailers together and find films you'll all enjoy.",
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
    path: "/es/download",
    lang: "es",
    alternates: downloadAlternates,
    title: "Descarga ReelMatch gratis | iPhone y Android",
    description:
      "Descarga ReelMatch gratis en iPhone y Android. Desliza tráilers con tu pareja o amigos y encuentren las películas que a todos les gustan.",
    sitemap: { changefreq: "monthly", priority: "0.7", lastmod: BUILD_DATE },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Descarga ReelMatch",
        description:
          "Descarga gratis la app ReelMatch para iPhone y Android.",
        url: absoluteUrl("/es/download"),
        inLanguage: "es",
        about: { "@id": `${SITE_URL}/#app` },
      },
      breadcrumb([
        { name: "Inicio", path: "/es" },
        { name: "Descargar", path: "/es/download" },
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
