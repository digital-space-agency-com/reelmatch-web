import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import StoreCTA from "@/components/StoreCTA";
import FaqList from "@/components/FaqList";
import { GridMovieCard } from "@/components/MovieCard";
import NotFound from "./NotFound";
import { collectionBySlug, collectionPath, collections } from "@/data/collections";
import { guideBySlug } from "@/data/guides";
import { guideEsBySlug } from "@/data/guidesEs";
import movieData from "@/data/collectionMovies.json";
import { parentHub } from "@/data/hubPages";

type CollectionMovie = {
  title: string;
  year: number;
  rating?: string;
  blurb?: string;
  details: {
    backdrop: string | null;
    genres: string[];
    vote: number;
    votes: number;
    runtime: number | null;
  };
  es?: { title: string; blurb: string; genres: string[] };
};

const data = movieData as Record<string, CollectionMovie>;

const ui = {
  en: {
    home: { name: "Home", path: "/" },
    hub: { name: "Guides", path: "/guides" },
    guideBase: "/guides",
    jump: "Jump to",
    howTo: "How to pick one together",
    faqs: "Frequently asked questions",
    related: "Keep reading",
    generator: "Still can't decide?",
    generatorLink: "Let the random movie generator pick one for you",
    rated: "Rated",
    attribution: "Images, ratings and runtimes from TMDB. This product uses the TMDB API but is not endorsed or certified by TMDB. Ratings are US ratings.",
    cta: undefined as { heading: string; body: string } | undefined,
  },
  es: {
    home: { name: "Inicio", path: "/es" },
    hub: { name: "Guías", path: "/es/guias" },
    guideBase: "/es/guias",
    jump: "Ir a",
    howTo: "Cómo elegir una juntos",
    faqs: "Preguntas frecuentes",
    related: "Sigue leyendo",
    generator: "¿Siguen sin decidir?",
    generatorLink: "Deja que el generador de películas elija por ustedes (en inglés)",
    rated: "Clasificación",
    attribution: "Imágenes, calificaciones y duración de TMDB. Este producto usa la API de TMDB pero no está respaldado ni certificado por TMDB. Clasificación de Estados Unidos.",
    cta: {
      heading: "Deja de buscar. Empieza a ver.",
      body: "ReelMatch es gratis en iPhone y Android. Cada quien desliza tráilers en su teléfono y eligen entre los títulos a los que todos ya dijeron que sí.",
    },
  },
};

const anchor = (heading: string) =>
  heading
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/**
 * A curated movie list ("funny movies for teens", ...): intro, themed sections
 * of app-style cards, how to pick, FAQs and links to related guides.
 */
const CollectionPage: React.FC<{ slug: string; lang?: "en" | "es" }> = ({ slug, lang = "en" }) => {
  const c = collectionBySlug(slug, lang);
  if (!c) return <NotFound />;
  const t = ui[lang];
  const path = collectionPath(c);
  const findGuide = lang === "es" ? guideEsBySlug : guideBySlug;
  const otherLists = collections.filter((o) => o.lang === lang && o.slug !== c.slug);
  let rank = 0;

  return (
    <PageLayout path={path} lang={lang}>
      <div className="container mx-auto px-4 max-w-6xl">
        <Breadcrumbs
          trail={[
            t.home,
            (() => {
              const hub = lang === "en" ? parentHub(collectionPath(c)) : undefined;
              return hub ? { name: hub.name, path: hub.path } : t.hub;
            })(),
            { name: c.h1 },
          ]}
        />

        <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 max-w-4xl">{c.h1}</h1>
        {c.intro.map((p) => (
          <p key={p} className="text-lg text-reelmatch-gray leading-relaxed mb-4 max-w-3xl">
            {p}
          </p>
        ))}

        <nav aria-label={t.jump} className="mb-10 mt-6 flex flex-wrap gap-2">
          {c.sections.map((s) => (
            <a
              key={s.heading}
              href={`#${anchor(s.heading)}`}
              className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium hover:border-reelmatch-primary"
            >
              {s.heading}
            </a>
          ))}
        </nav>

        {c.sections.map((s) => (
          <section key={s.heading} id={anchor(s.heading)} className="mb-12 scroll-mt-28">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">{s.heading}</h2>
            <p className="text-reelmatch-gray mb-6">{s.text}</p>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {s.picks.map(([title, year]) => {
                const m = data[`${title}|${year}`];
                rank += 1;
                if (!m) return null;
                const es = lang === "es" ? m.es : undefined;
                return (
                  <li key={`${title}-${year}`}>
                    <GridMovieCard
                      rank={rank}
                      title={es?.title || m.title}
                      originalTitle={es ? m.title : undefined}
                      year={m.year}
                      rating={m.rating}
                      blurb={es?.blurb || m.blurb}
                      genres={es?.genres?.length ? es.genres : m.details.genres}
                      backdrop={m.details.backdrop}
                      vote={m.details.vote}
                      votes={m.details.votes}
                      runtime={m.details.runtime}
                      ratedLabel={t.rated}
                    />
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      <div className="container mx-auto px-4 max-w-3xl">
        <p className="mb-2 text-lg">
          {t.generator}{" "}
          <Link to={c.generator} className="font-semibold underline underline-offset-4 hover:text-reelmatch-primary">
            {t.generatorLink}
          </Link>
          .
        </p>

        <StoreCTA {...t.cta} />

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">{t.howTo}</h2>
          <ol className="list-decimal space-y-2 pl-6 text-reelmatch-dark">
            {c.howTo.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-6">{t.faqs}</h2>
          <FaqList faqs={c.faqs} />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold mb-4">{t.related}</h2>
          <ul className="space-y-2">
            {c.related.map((guideSlug) => {
              const g = findGuide(guideSlug);
              return g ? (
                <li key={guideSlug}>
                  <Link to={`${t.guideBase}/${g.slug}`} className="font-medium underline underline-offset-4 hover:text-reelmatch-primary">
                    {g.title}
                  </Link>
                </li>
              ) : null;
            })}
            {otherLists.map((o) => (
              <li key={o.slug}>
                <Link to={collectionPath(o)} className="font-medium underline underline-offset-4 hover:text-reelmatch-primary">
                  {o.h1}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <p className="text-sm text-reelmatch-gray">{t.attribution}</p>
      </div>
    </PageLayout>
  );
};

export default CollectionPage;
