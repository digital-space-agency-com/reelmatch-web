import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import StoreCTA from "@/components/StoreCTA";
import { guides } from "@/data/guides";
import { guidesEs } from "@/data/guidesEs";

const ui = {
  en: {
    path: "/guides",
    list: guides,
    trail: [{ name: "Home", path: "/" }, { name: "Guides" }],
    title: "Guides to deciding what to watch",
    intro:
      "Choosing a film with other people is a solvable problem. These guides cover what actually works — with a partner, with a group, and with an app doing the work for you.",
    read: "Read the guide",
    cta: undefined as { heading: string; body: string } | undefined,
  },
  es: {
    path: "/es/guias",
    list: guidesEs,
    trail: [{ name: "Inicio", path: "/es" }, { name: "Guías" }],
    title: "Guías para elegir qué ver",
    intro:
      "Ideas de películas para ver en pareja, en familia o con amigos, y métodos sencillos para decidir sin discutir.",
    read: "Leer la guía",
    cta: {
      heading: "Deja de buscar. Empieza a ver.",
      body: "ReelMatch es gratis en iPhone y Android. Cada quien desliza tráilers en su teléfono y eligen entre los títulos a los que todos ya dijeron que sí.",
    },
  },
};

const GuidesIndex = ({ lang = "en" }: { lang?: "en" | "es" }) => {
  const t = ui[lang];
  return (
  <PageLayout path={t.path} lang={lang}>
    <div className="container mx-auto px-4 max-w-3xl">
      <Breadcrumbs trail={t.trail} />

      <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
        {t.title}
      </h1>
      <p className="text-xl text-reelmatch-gray mb-10">
        {t.intro}
      </p>

      <div className="space-y-6">
        {t.list.map((guide) => (
          <article
            key={guide.slug}
            className="bg-white rounded-xl p-6 shadow-subtle border border-gray-100"
          >
            <h2 className="text-xl font-semibold mb-2">
              <Link
                to={`${t.path}/${guide.slug}`}
                className="hover:text-reelmatch-primary transition-colors"
              >
                {guide.title}
              </Link>
            </h2>
            <p className="text-reelmatch-gray mb-3">{guide.description}</p>
            <Link
              to={`${t.path}/${guide.slug}`}
              className="text-sm font-medium underline underline-offset-4"
            >
              {t.read}
            </Link>
          </article>
        ))}
      </div>

      <StoreCTA {...t.cta} />
    </div>
  </PageLayout>
  );
};

export default GuidesIndex;
