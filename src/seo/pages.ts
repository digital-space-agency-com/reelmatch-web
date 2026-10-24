import { allFaqs, faqPageJsonLd, homepageFaqs } from "@/data/faq";
import { esFaqs } from "@/data/es";
import { guides, type Guide } from "@/data/guides";
import { guidesEs } from "@/data/guidesEs";
import { generatorPages } from "@/data/generatorPages";
import { collections, collectionPath } from "@/data/collections";
import { landingPages } from "@/data/landingPages";
import { hubPages, linkInfo, parentHub } from "@/data/hubPages";
import { proFaqs } from "@/data/proFaqs";
import collectionMovies from "@/data/collectionMovies.json";
import {
  APP_STORE_URL,
  ORGANIZATION,
  PLAY_STORE_URL,
  SITE_URL,
  SOCIAL_URLS,
  WEB_CHECKOUT_LIVE,
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
  /** Personal pages (invite links) that must stay out of search results. */
  noindex?: boolean;
  /** Emitted into sitemap.xml. */
  sitemap?: { changefreq: string; priority: string; lastmod: string };
  jsonLd: unknown[];
};

const BUILD_DATE = "2026-10-14";

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

/** English and Spanish guides that cover the same topic, for hreflang. */
const guideTranslations: [en: string, es: string][] = [
  ["movies-to-watch-as-a-couple", "peliculas-para-ver-en-pareja"],
  ["family-movies-to-watch", "peliculas-para-ver-en-familia"],
  ["movies-to-watch-with-friends", "noche-de-peliculas-con-amigos"],
  ["scary-movies-to-watch-with-friends", "peliculas-de-terror-para-ver-con-amigos"],
  ["movies-to-watch-with-teens", "peliculas-para-adolescentes"],
  ["family-christmas-movies", "peliculas-de-navidad-para-ver-en-familia"],
];

const guideAlternates = (slug: string, lang: "en" | "es") => {
  const pair = guideTranslations.find(([en, es]) => (lang === "en" ? en : es) === slug);
  if (!pair) return undefined;
  const [en, es] = pair;
  return [
    { hreflang: "en", path: `/guides/${en}` },
    { hreflang: "es", path: `/es/guias/${es}` },
    { hreflang: "x-default", path: `/guides/${en}` },
  ];
};

const guidePage = (guide: Guide, lang: "en" | "es"): PageMeta => {
  const { base, home, hub } = guideLocale[lang];
  const url = absoluteUrl(`${base}/${guide.slug}`);
  return {
    path: `${base}/${guide.slug}`,
    lang,
    alternates: guideAlternates(guide.slug, lang),
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
        (() => {
          const parent = lang === "en" ? parentHub(`${base}/${guide.slug}`) : undefined;
          return parent ? { name: parent.name, path: parent.path } : { name: hub, path: base };
        })(),
        { name: guide.title, path: `${base}/${guide.slug}` },
      ]),
    ],
  };
};

const generatorPageMetas: PageMeta[] = generatorPages.map((page) => {
  const url = absoluteUrl(page.path);
  return {
    path: page.path,
    title: page.metaTitle,
    description: page.description,
    sitemap: { changefreq: "monthly", priority: "0.8", lastmod: BUILD_DATE },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "@id": `${url}#app`,
        name: page.h1,
        url,
        description: page.description,
        applicationCategory: "EntertainmentApplication",
        operatingSystem: "Any (web browser)",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      faqPageJsonLd(page.faqs, url),
      breadcrumb([
        { name: "Home", path: "/" },
        { name: page.h1, path: page.path },
      ]),
    ],
  };
});

const landingPageMetas: PageMeta[] = landingPages.map((page) => {
  const url = absoluteUrl(page.path);
  return {
    path: page.path,
    title: page.metaTitle,
    description: page.description,
    sitemap: { changefreq: "monthly", priority: "0.9", lastmod: BUILD_DATE },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        name: page.h1,
        description: page.description,
        url,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#app` },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      demoVideoJsonLd,
      faqPageJsonLd(page.faqs, url),
      breadcrumb([
        { name: "Home", path: "/" },
        ...(parentHub(page.path) ? [{ name: parentHub(page.path)!.name, path: parentHub(page.path)!.path }] : []),
        { name: page.h1, path: page.path },
      ]),
    ],
  };
});

const hubPageMetas: PageMeta[] = hubPages.map((hub) => {
  const url = absoluteUrl(hub.path);
  const items = hub.groups.flatMap((g) => g.paths).map((p) => linkInfo(p)).filter(Boolean);
  return {
    path: hub.path,
    title: hub.metaTitle,
    description: hub.description,
    sitemap: { changefreq: "weekly", priority: "0.8", lastmod: BUILD_DATE },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${url}#collection`,
        name: hub.h1,
        description: hub.description,
        url,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#app` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        hasPart: items.map((i) => ({ "@type": "WebPage", name: i!.title, url: absoluteUrl(i!.to) })),
      },
      faqPageJsonLd(hub.faqs, url),
      breadcrumb([
        { name: "Home", path: "/" },
        { name: hub.name, path: hub.path },
      ]),
    ],
  };
});

/**
 * /pro stays noindex and out of the sitemap until WEB_CHECKOUT.url is set in
 * site.ts, so a checkout that doesn't work yet is never promoted.
 */
const proPageMeta: PageMeta = {
  path: "/pro",
  title: "ReelMatch Pro: Unlimited Swipes, Web-Only Discount | ReelMatch",
  description:
    "Get ReelMatch Pro for less on the web, monthly or annual. Unlimited swipes, streaming and genre filters, instant TV launch.",
  noindex: !WEB_CHECKOUT_LIVE,
  ...(WEB_CHECKOUT_LIVE
    ? { sitemap: { changefreq: "weekly", priority: "0.9", lastmod: BUILD_DATE } }
    : {}),
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": `${absoluteUrl("/pro")}#product`,
      name: "ReelMatch Pro",
      description:
        "Unlimited daily swipes, streaming-provider filters, genre filters and instant TV launch for the ReelMatch app.",
      brand: { "@type": "Brand", name: "ReelMatch" },
      image: `${SITE_URL}/images/social-preview.png`,
    },
    faqPageJsonLd(proFaqs, absoluteUrl("/pro")),
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "ReelMatch Pro", path: "/pro" },
    ]),
  ],
};

const collectionMovieData = collectionMovies as Record<
  string,
  { title: string; year: number; kind?: "movie" | "tv"; details: { tmdbId: number; backdrop: string | null } }
>;

const collectionPageMetas: PageMeta[] = collections.map((c) => {
  const path = collectionPath(c);
  const url = absoluteUrl(path);
  const pair = c.translation ? collections.find((o) => o.slug === c.translation) : undefined;
  const picks = c.sections.flatMap((s) => s.picks);
  return {
    path,
    lang: c.lang,
    alternates: pair
      ? [
          { hreflang: c.lang, path },
          { hreflang: pair.lang, path: collectionPath(pair) },
          { hreflang: "x-default", path: c.lang === "en" ? path : collectionPath(pair) },
        ]
      : undefined,
    title: c.metaTitle,
    description: c.description,
    sitemap: { changefreq: "monthly", priority: "0.7", lastmod: c.updated },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": `${url}#list`,
        name: c.h1,
        url,
        numberOfItems: picks.length,
        itemListElement: picks.map(([title, year], index) => {
          const m = collectionMovieData[`${title}|${year}`];
          return {
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": m?.kind === "tv" ? "TVSeries" : "Movie",
              name: title,
              datePublished: String(year),
              ...(m?.details.backdrop ? { image: `https://image.tmdb.org/t/p/w780${m.details.backdrop}` } : {}),
              ...(m ? { sameAs: `https://www.themoviedb.org/${m.kind === "tv" ? "tv" : "movie"}/${m.details.tmdbId}` } : {}),
            },
          };
        }),
      },
      faqPageJsonLd(c.faqs, url),
      breadcrumb(
        c.lang === "es"
          ? [
              { name: "Inicio", path: "/es" },
              { name: "Guías", path: "/es/guias" },
              { name: c.h1, path },
            ]
          : [
              { name: "Home", path: "/" },
              parentHub(path)
                ? { name: parentHub(path)!.name, path: parentHub(path)!.path }
                : { name: "Guides", path: "/guides" },
              { name: c.h1, path },
            ],
      ),
    ],
  };
});

const guidePages = guides.map((guide) => guidePage(guide, "en"));
const guideEsPages = guidesEs.map((guide) => guidePage(guide, "es"));

export const pages: PageMeta[] = [
  {
    path: "/",
    title: "ReelMatch | Free Film Matcher & Movie Swiper App",
    description:
      "ReelMatch is a free film matcher and movie swiper for iPhone and Android. Swipe movies with friends, family or your partner and see what you all said yes to.",
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
    title: "Movie Matcher en español: elijan qué ver juntos | ReelMatch",
    description:
      "ReelMatch es un movie matcher gratis para iPhone y Android. Cada quien desliza tráilers en su teléfono y ven las películas y series que a todos les gustan.",
    alternates: homeAlternates,
    sitemap: { changefreq: "monthly", priority: "0.9", lastmod: BUILD_DATE },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${absoluteUrl("/es")}#webpage`,
        name: "ReelMatch: la app para elegir qué película ver en pareja, con amigos o en familia",
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
      "Answers about ReelMatch: what it costs, which streaming services it covers, how agreeing on a movie with friends works, and how your data is handled.",
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
      "Movies to watch as a couple, with family or with friends, plus practical guides to deciding what to watch together and how movie matching apps work.",
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
  {
    // Static landing for personal invite links shared from the app
    // (reelmatch.app/i/?u=<handle>). GitHub Pages can't serve /i/<handle> with
    // a 200, so messengers fetching that URL only saw the 404 page and showed
    // no preview card. This page carries the card tags and reads the handle
    // from ?u= in the browser.
    path: "/i",
    title: "You're invited to ReelMatch",
    description:
      "A friend wants to pick what to watch with you. Get ReelMatch free on iPhone and Android, add them, and see the movies and shows you both say yes to.",
    image: `${SITE_URL}/images/social-preview.png`,
    noindex: true,
    jsonLd: [],
  },
  ...generatorPageMetas,
  ...landingPageMetas,
  ...hubPageMetas,
  proPageMeta,
  ...collectionPageMetas,
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
    path: "/press",
    title: "ReelMatch Press Kit: Logos, Screenshots and Facts",
    description:
      "Press kit for ReelMatch, the free app that helps couples, friends and families agree on what to watch: descriptions, fact sheet, logos and screenshots.",
    sitemap: { changefreq: "monthly", priority: "0.5", lastmod: "2026-09-28" },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "ReelMatch press kit",
        url: absoluteUrl("/press"),
        inLanguage: "en",
        about: { "@id": `${SITE_URL}/#app` },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Press kit", path: "/press" },
      ]),
    ],
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | ReelMatch",
    description:
      "How ReelMatch collects, uses and protects your data, including watch history, account information and analytics.",
    sitemap: { changefreq: "yearly", priority: "0.4", lastmod: "2026-09-28" },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "ReelMatch Privacy Policy",
        description: "Privacy Policy for the ReelMatch mobile application",
        url: absoluteUrl("/privacy-policy"),
        inLanguage: "en",
        publisher: { "@id": `${SITE_URL}/#organization` },
        lastReviewed: "2026-09-28",
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
