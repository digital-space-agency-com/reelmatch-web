import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import StoreCTA from "@/components/StoreCTA";
import MovieCard from "@/components/MovieCard";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { generatorPage, generatorPages } from "@/data/generatorPages";
import {
  AUDIENCES,
  MOODS,
  findMovie,
  matchingMovies,
  movies,
  type Audience,
  type Movie,
  type Mood,
} from "@/data/movies";

type Gtag = (command: "event", name: string, params: Record<string, string>) => void;

const trailerUrl = (movie: Movie) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(`${movie.title} ${movie.year} trailer`)}`;

const Chip: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({
  active,
  onClick,
  children,
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={active}
    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
      active
        ? "bg-reelmatch-primary border-reelmatch-primary text-reelmatch-dark"
        : "bg-white border-gray-200 text-reelmatch-dark hover:border-reelmatch-primary"
    }`}
  >
    {children}
  </button>
);

/**
 * Random movie generator. The prerendered HTML shows the controls and the
 * explanatory copy; picks only happen on click, so server and client render
 * the same markup and nothing random runs during prerender.
 */
const MovieGenerator: React.FC<{ path: string }> = ({ path }) => {
  const page = generatorPage(path)!;
  const [mood, setMood] = useState<Mood | undefined>(page.mood);
  const [audience, setAudience] = useState<Audience | undefined>();
  const [pick, setPick] = useState<Movie | null>(null);
  const resultRef = useRef<HTMLElement>(null);
  // Before the first click the page shows a fixed example, so the prerendered
  // HTML has a card and image and matches the first client render.
  const shown = pick ?? findMovie(page.example) ?? movies[0];

  const pickMovie = () => {
    const pool = matchingMovies({ mood, audience, season: page.season });
    const choices = pool.length > 1 && pick ? pool.filter((m) => m.title !== pick.title) : pool;
    const next = choices[Math.floor(Math.random() * choices.length)];
    setPick(next);
    // On phones the card sits below the controls; bring it into view.
    const card = resultRef.current;
    if (card && card.getBoundingClientRect().top > window.innerHeight * 0.4) {
      requestAnimationFrame(() => card.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
    (window as unknown as { gtag?: Gtag }).gtag?.("event", "generator_pick", {
      page_path: path,
      mood: mood ?? "any",
      audience: audience ?? "any",
    });
  };

  const track = (name: string, movie: Movie) =>
    (window as unknown as { gtag?: Gtag }).gtag?.("event", name, { page_path: path, movie: movie.title });

  const otherPages = generatorPages.filter((p) => p.path !== path);

  return (
    <PageLayout path={path}>
      <div className="container mx-auto px-4 max-w-3xl">
        <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: page.h1 }]} />

        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{page.h1}</h1>
        <p className="text-xl text-reelmatch-gray mb-8">{page.intro}</p>

        <section aria-label="Movie generator" className="rounded-2xl border border-gray-100 shadow-subtle p-6 md:p-8 mb-12">
          {!page.mood && (
            <fieldset className="mb-6">
              <legend className="font-semibold mb-3">What are you in the mood for?</legend>
              <div className="flex flex-wrap gap-2">
                <Chip active={!mood} onClick={() => setMood(undefined)}>
                  Anything
                </Chip>
                {MOODS.filter((m) => (page.season ? m.id !== "holiday" : true)).map((m) => (
                  <Chip key={m.id} active={mood === m.id} onClick={() => setMood(m.id)}>
                    {m.label}
                  </Chip>
                ))}
              </div>
            </fieldset>
          )}

          <fieldset className="mb-8">
            <legend className="font-semibold mb-3">Who are you watching with?</legend>
            <div className="flex flex-wrap gap-2">
              <Chip active={!audience} onClick={() => setAudience(undefined)}>
                Anyone
              </Chip>
              {AUDIENCES.map((a) => (
                <Chip key={a.id} active={audience === a.id} onClick={() => setAudience(a.id)}>
                  {a.label}
                </Chip>
              ))}
            </div>
          </fieldset>

          <button
            type="button"
            onClick={pickMovie}
            className="w-full md:w-auto rounded-xl bg-reelmatch-black text-white px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            {pick ? "Pick another movie" : "Pick a movie for me"}
          </button>
        </section>

        <section
          ref={resultRef}
          aria-label="Your pick"
          className="-mx-4 mb-12 scroll-mt-24 bg-gradient-to-b from-black via-black to-[#8a6d2b] px-4 py-10 sm:mx-0 sm:rounded-3xl sm:px-8"
        >
          <p className="mb-4 text-center text-xl font-bold text-reelmatch-primary">ReelMatch</p>
          <div aria-live="polite" className="mx-auto max-w-md">
            <MovieCard key={shown.title} movie={shown} label={pick ? undefined : "Example pick"} />
          </div>

          <div className="mx-auto mt-8 flex max-w-md items-start justify-center gap-10">
            <button
              type="button"
              onClick={pickMovie}
              className="flex flex-col items-center gap-2 text-sm font-medium text-white"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/80 transition-colors hover:bg-white/10">
                <ThumbsDown className="h-7 w-7" aria-hidden="true" />
              </span>
              Not this one
            </button>
            <Link
              to="/download"
              onClick={() => track("generator_app_click", shown)}
              className="flex flex-col items-center gap-2 text-sm font-medium text-white"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-reelmatch-primary bg-reelmatch-primary text-reelmatch-dark transition-opacity hover:opacity-90">
                <ThumbsUp className="h-7 w-7" aria-hidden="true" />
              </span>
              Save it in ReelMatch
            </Link>
          </div>

          <p className="mx-auto mt-6 max-w-md text-center text-sm text-gray-200">
            In ReelMatch you and your partner, friends or family swipe trailers like this on your own phones and
            see the movies you all said yes to. Free on iPhone and Android.
          </p>
          <p className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            <a
              href={trailerUrl(shown)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("generator_trailer_click", shown)}
              className="font-medium text-white underline underline-offset-4"
            >
              Trailer on YouTube
            </a>
            <Link to={`/guides/${shown.guide.slug}`} className="font-medium text-white underline underline-offset-4">
              More like this
            </Link>
          </p>
        </section>

        <StoreCTA
          heading="Picking with someone else?"
          body="The generator picks for one. With ReelMatch, everyone swipes through trailers on their own phone and you see the movies you all said yes to. Free on iPhone and Android."
        />

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">How the generator works</h2>
          <p className="text-reelmatch-dark mb-3">
            Every movie comes from one of our hand-picked guides, so you won't get filler. Choose a mood and who
            you're watching with to narrow it down, or leave both on "Anything" for a surprise. If nothing fits
            your exact combination, the generator widens the search so you always get a pick.
          </p>
          <p className="text-reelmatch-dark">
            Each pick links to its trailer. Thirty seconds of trailer tells you more about the tone than any
            poster, which is usually what decides whether a movie is right for tonight. That's the idea behind
            ReelMatch: instead of one random pick, everyone you're watching with swipes through trailers and you
            choose from the movies you all said yes to.
          </p>
          <p className="mt-3 text-sm text-reelmatch-gray">
            Images, ratings and cast from TMDB. This product uses the TMDB API but is not endorsed or certified by
            TMDB.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-6">Frequently asked questions</h2>
          <div className="space-y-6">
            {page.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-reelmatch-dark">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-display font-bold mb-4">More ways to decide</h2>
          <ul className="space-y-2">
            {otherPages.map((p) => (
              <li key={p.path}>
                <Link to={p.path} className="font-medium underline underline-offset-4 hover:text-reelmatch-primary">
                  {p.h1}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/guides" className="font-medium underline underline-offset-4 hover:text-reelmatch-primary">
                All our guides to deciding what to watch
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </PageLayout>
  );
};

export default MovieGenerator;
