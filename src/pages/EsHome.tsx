import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/ui/Logo";
import AppStoreButton from "@/components/ui/AppStoreButton";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/seo/site";
import { useDocumentMeta } from "@/seo/useDocumentMeta";
import { esAudiences, esFaqs, esFeatures, esSteps } from "@/data/es";

const StoreButtons = () => (
  <div className="flex gap-4 justify-center lg:justify-start items-center flex-wrap">
    <AppStoreButton type="google" url={PLAY_STORE_URL} />
    <AppStoreButton type="apple" url={APP_STORE_URL} />
  </div>
);

/**
 * Spanish landing page. Self-contained rather than reusing the English
 * Header/Footer, whose navigation scrolls to English homepage sections.
 */
const EsHome = () => {
  useDocumentMeta("/es");

  return (
    <div className="min-h-screen bg-white" lang="es">
      <header className="py-4">
        <nav className="container mx-auto px-4 flex items-center justify-between gap-4 h-16">
          <Link to="/es">
            <Logo mode="light" />
          </Link>
          <div className="flex items-center gap-3 sm:gap-6 shrink-0">
            <Link
              to="/"
              hrefLang="en"
              lang="en"
              className="text-sm sm:text-base text-reelmatch-dark hover:text-reelmatch-primary transition-colors"
            >
              English
            </Link>
            <a href="#descargar" className="btn-primary">
              Descargar
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 pt-10 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-2 mb-6 bg-reelmatch-primary text-reelmatch-dark rounded-full text-sm font-medium">
                Movie matcher gratis para iPhone y Android
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                ReelMatch: la app para ver películas en pareja, con amigos o en
                familia
              </h1>
              <p className="text-xl text-reelmatch-gray mb-8">
                Deja de discutir qué ver. Cada quien desliza tráilers en su
                teléfono y ReelMatch les muestra las películas y series que a
                todos les gustan.
              </p>
              <StoreButtons />
            </div>
            <figure className="relative mx-auto max-w-xs">
              <div className="aspect-[9/19] rounded-[2.5rem] border-8 border-reelmatch-black overflow-hidden shadow-elevated bg-reelmatch-black">
                <picture>
                  <source
                    srcSet="/images/reelmatch_home_he-man.webp"
                    type="image/webp"
                  />
                  <img
                    src="/images/reelmatch_home_he-man.png"
                    alt="La app ReelMatch mostrando un tráiler para deslizar"
                    width="400"
                    height="890"
                    loading="eager"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </picture>
              </div>
            </figure>
          </div>
        </section>

        <section className="bg-reelmatch-secondary/30">
          <div className="container mx-auto px-4 py-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              Cómo funciona
            </h2>
            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {esSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="p-6 rounded-2xl bg-white shadow-subtle text-center"
                >
                  <div
                    className="w-12 h-12 mx-auto mb-4 bg-reelmatch-primary/10 rounded-full flex items-center justify-center font-bold text-reelmatch-dark"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-reelmatch-dark">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Para quién es ReelMatch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {esAudiences.map((audience) => (
              <div
                key={audience.title}
                className="p-6 rounded-2xl bg-white shadow-subtle"
              >
                <h3 className="text-xl font-bold mb-2">{audience.title}</h3>
                <p className="text-reelmatch-dark">{audience.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 pb-20 max-w-3xl">
          <h2 className="text-3xl font-display font-bold mb-6">
            ¿Por qué tráilers?
          </h2>
          <p className="text-lg text-reelmatch-dark mb-8">
            Casi siempre que no se ponen de acuerdo, en realidad es por el
            tono. Treinta segundos de tráiler lo aclaran más rápido que un
            póster o una sinopsis.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-reelmatch-dark">
            {esFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="bg-reelmatch-secondary/30">
          <div className="container mx-auto px-4 py-20 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-10">
              Preguntas frecuentes
            </h2>
            <div className="space-y-6">
              {esFaqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-reelmatch-dark">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="descargar" className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Deja de buscar. Empieza a ver.
          </h2>
          <p className="text-lg text-reelmatch-dark mb-8">
            ReelMatch es gratis en iPhone y Android.
          </p>
          <div className="flex justify-center">
            <StoreButtons />
          </div>
        </section>
      </main>

      <footer className="bg-reelmatch-dark text-white py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-6 justify-between text-gray-400">
          <p>Encuentra qué ver más rápido con ReelMatch.</p>
          <ul className="flex flex-wrap gap-6">
            <li>
              <Link to="/" hrefLang="en" className="hover:text-white">
                English
              </Link>
            </li>
            <li>
              <Link to="/guides" hrefLang="en" className="hover:text-white">
                Guías (en inglés)
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" hrefLang="en" className="hover:text-white">
                Política de privacidad (en inglés)
              </Link>
            </li>
          </ul>
        </div>
        <p className="container mx-auto px-4 mt-6 text-sm text-gray-500">
          Datos de películas de TMDB. Tráilers de YouTube. © Digital Space
          Agency UG
        </p>
      </footer>
    </div>
  );
};

export default EsHome;
