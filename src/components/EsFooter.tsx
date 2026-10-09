import React from "react";
import { Link } from "react-router-dom";
import { INSTAGRAM_URL, YOUTUBE_URL } from "@/seo/site";
import { guidesEs } from "@/data/guidesEs";

/** Footer for the Spanish pages (/es and /es/download). */
const EsFooter: React.FC = () => (
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
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Instagram
          </a>
        </li>
        <li>
          <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            YouTube
          </a>
        </li>
        <li>
          <Link to="/es/guias" className="hover:text-white">
            Guías
          </Link>
        </li>
        <li>
          <Link to="/privacy-policy" hrefLang="en" className="hover:text-white">
            Política de privacidad (en inglés)
          </Link>
        </li>
      </ul>
    </div>
    {/* Every Spanish guide linked from every Spanish page, like the English
        footer does, so new guides get found and passed some weight. */}
    <nav aria-label="Guías" className="container mx-auto px-4 mt-6">
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
        {guidesEs.map((guide) => (
          <li key={guide.slug}>
            <Link to={`/es/guias/${guide.slug}`} className="hover:text-white">
              {guide.metaTitle.split(":")[0]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    <p className="container mx-auto px-4 mt-6 text-sm text-gray-500">
      Datos de películas de TMDB. Tráilers de YouTube. © Digital Space
      Agency UG
    </p>
  </footer>
);

export default EsFooter;
