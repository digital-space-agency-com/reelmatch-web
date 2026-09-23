import React from "react";
import { Link, useParams } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqList from "@/components/FaqList";
import StoreCTA from "@/components/StoreCTA";
import VideoEmbed from "@/components/VideoEmbed";
import NotFound from "./NotFound";
import { guideBySlug, type GuideSection } from "@/data/guides";
import { guideEsBySlug } from "@/data/guidesEs";

const ui = {
  en: {
    base: "/guides",
    home: { name: "Home", path: "/" },
    guides: "Guides",
    updated: "Last updated",
    locale: "en-US",
    faqs: "Frequently asked questions",
    keepReading: "Keep reading",
    faqLink: { to: "/faq", text: "ReelMatch FAQ", body: "What ReelMatch costs, which streaming services it covers, and how matching with friends works." },
    cta: undefined as { heading: string; body: string } | undefined,
  },
  es: {
    base: "/es/guias",
    home: { name: "Inicio", path: "/es" },
    guides: "Guías",
    updated: "Actualizado el",
    locale: "es-MX",
    faqs: "Preguntas frecuentes",
    keepReading: "Sigue leyendo",
    faqLink: { to: "/es#preguntas", text: "Preguntas frecuentes sobre ReelMatch", body: "Cuánto cuesta ReelMatch, con qué plataformas funciona y cómo se encuentran coincidencias." },
    cta: {
      heading: "Deja de buscar. Empieza a ver.",
      body: "ReelMatch es gratis en iPhone y Android. Cada quien desliza tráilers en su teléfono y eligen entre los títulos a los que todos ya dijeron que sí.",
    },
  },
};

const SectionBody: React.FC<{ section: GuideSection }> = ({ section }) => {
  const ListTag = section.ordered ? "ol" : "ul";

  return (
    <>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="text-reelmatch-gray leading-relaxed mb-4">
          {paragraph}
        </p>
      ))}
      {section.list && (
        <ListTag
          className={`mb-6 space-y-2 pl-6 text-reelmatch-gray ${
            section.ordered ? "list-decimal" : "list-disc"
          }`}
        >
          {section.list.map((item) => (
            <li key={item} className="leading-relaxed pl-1">
              {item}
            </li>
          ))}
        </ListTag>
      )}
    </>
  );
};

const GuideDetail = ({ lang = "en" }: { lang?: "en" | "es" }) => {
  const t = ui[lang];
  const findGuide = lang === "es" ? guideEsBySlug : guideBySlug;
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? findGuide(slug) : undefined;

  if (!guide) return <NotFound />;

  return (
    <PageLayout path={`${t.base}/${guide.slug}`} lang={lang}>
      <article className="container mx-auto px-4 max-w-3xl">
        <Breadcrumbs
          trail={[
            t.home,
            { name: t.guides, path: t.base },
            { name: guide.title },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-display font-bold mb-5">
          {guide.title}
        </h1>

        {/* Direct answer up front — the span most likely to be quoted by an
            AI Overview, and the fastest read for a human who wants the gist. */}
        <p className="text-lg leading-relaxed border-l-4 border-reelmatch-primary pl-5 mb-8 text-reelmatch-dark">
          {guide.answer}
        </p>

        <p className="text-sm text-reelmatch-gray mb-10">
          {t.updated}{" "}
          <time dateTime={guide.updated}>
            {new Date(guide.updated).toLocaleDateString(t.locale, {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </p>

        {guide.intro.map((paragraph) => (
          <p
            key={paragraph}
            className="text-lg text-reelmatch-gray leading-relaxed mb-4"
          >
            {paragraph}
          </p>
        ))}

        <VideoEmbed lang={lang} className="mt-8" />

        <div className="mt-10">
          {guide.sections.map((section) => (
            <section key={section.heading} className="mb-8">
              <h2 className="text-2xl font-display font-bold mb-3">
                {section.heading}
              </h2>
              <SectionBody section={section} />
            </section>
          ))}
        </div>

        <StoreCTA {...t.cta} />

        <section>
          <h2 className="text-2xl font-display font-bold mb-6">
            {t.faqs}
          </h2>
          <FaqList faqs={guide.faqs} />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-display font-bold mb-4">{t.keepReading}</h2>
          <ul className="space-y-3">
            {guide.related.map((relatedSlug) => {
              const related = findGuide(relatedSlug);
              if (!related) return null;
              return (
                <li key={relatedSlug}>
                  <Link
                    to={`${t.base}/${related.slug}`}
                    className="font-medium underline underline-offset-4 hover:text-reelmatch-primary transition-colors"
                  >
                    {related.title}
                  </Link>
                  <p className="text-sm text-reelmatch-gray">
                    {related.description}
                  </p>
                </li>
              );
            })}
            <li>
              <Link
                to={t.faqLink.to}
                className="font-medium underline underline-offset-4 hover:text-reelmatch-primary transition-colors"
              >
                {t.faqLink.text}
              </Link>
              <p className="text-sm text-reelmatch-gray">{t.faqLink.body}</p>
            </li>
          </ul>
        </section>
      </article>
    </PageLayout>
  );
};

export default GuideDetail;
