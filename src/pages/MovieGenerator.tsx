import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import StoreCTA from "@/components/StoreCTA";
import MovieCard from "@/components/MovieCard";
import { Shuffle, ThumbsDown, ThumbsUp } from "lucide-react";
import { generatorPage, generatorPages } from "@/data/generatorPages";
import {
  AUDIENCES,
  MOODS,
  findMovie,
  guideFor,
  loadFullPool,
  matchingMovies,
  movies,
  type Audience,
  type Movie,
  type Mood,
} from "@/data/movies";

type Gtag = (
  command: "event",
  name: string,
  params: Record<string, string>,
) => void;

const trailerUrl = (movie: Movie) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(`${movie.title} ${movie.year} trailer`)}`;

const Chip: React.FC<{
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ active, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={active}
    className={`shrink-0 whitespace-nowrap rounded-full border px-3 py-1.5 text-sm font-medium transition-colors lg:px-4 lg:py-2 ${
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
  // Starts with the hand-picked guide movies; the larger TMDB pool loads
  // after the page is up, so it never slows the first paint or other pages.
  const [pool, setPool] = useState<Movie[]>(movies);
  useEffect(() => {
    loadFullPool()
      .then(setPool)
      .catch(() => {});
  }, []);
  // Before the first click the page shows a fixed example, so the prerendered
  // HTML has a card and image and matches the first client render.
  const shown = pick ?? findMovie(page.example) ?? movies[0];

  const pickMovie = (
    nextMood: Mood | undefined = mood,
    nextAudience: Audience | undefined = audience,
  ) => {
    const candidates = matchingMovies(
      { mood: nextMood, audience: nextAudience, season: page.season },
      pool,
    );
    const choices =
      candidates.length > 1 && pick
        ? candidates.filter((m) => m.title !== pick.title)
        : candidates;
    const next = choices[Math.floor(Math.random() * choices.length)];
    setPick(next);
    // Keep the card in view if the page has been scrolled away from it.
    const card = resultRef.current;
    const top = card?.getBoundingClientRect().top ?? 0;
    if (card && (top < 0 || top > window.innerHeight * 0.5)) {
      requestAnimationFrame(() =>
        card.scrollIntoView({ behavior: "smooth", block: "start" }),
      );
    }
    (window as unknown as { gtag?: Gtag }).gtag?.("event", "generator_pick", {
      page_path: path,
      mood: nextMood ?? "any",
      audience: nextAudience ?? "any",
    });
  };

  const track = (name: string, movie: Movie) =>
    (window as unknown as { gtag?: Gtag }).gtag?.("event", name, {
      page_path: path,
      movie: movie.title,
    });

  const otherPages = generatorPages.filter((p) => p.path !== path);

  return (
    <PageLayout path={path}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* The trail wraps to two lines on phones; it's still in the
            BreadcrumbList structured data, so hide it there to keep the card
            above the fold. */}
        <div className="hidden sm:block">
          <Breadcrumbs
            trail={[{ name: "Home", path: "/" }, { name: page.h1 }]}
          />
        </div>

        <h1 className="text-[1.7rem] leading-tight sm:text-3xl md:text-4xl font-display font-bold mb-2">
          {page.h1}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-reelmatch-gray mb-4 sm:mb-5 max-w-3xl">
          {page.intro}
        </p>

        {/* Filters on the left, card on the right (stacked on phones), so all
            the controls and the card fit above the fold. */}
        <div className="mb-12 grid grid-cols-[minmax(0,1fr)] gap-x-5 gap-y-3 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:grid-rows-[1fr_auto] lg:gap-x-10">
          <section
            aria-label="Choose what to pick"
            className="lg:row-span-2 lg:flex lg:flex-col lg:rounded-2xl lg:border lg:border-gray-100 lg:p-6 lg:shadow-subtle"
          >
            {!page.mood && (
              <fieldset className="mb-4 min-w-0 lg:mb-5">
                <legend className="mb-2 text-sm font-semibold lg:mb-3 lg:text-base">
                  What are you in the mood for?
                </legend>
                <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0">
                  <Chip
                    active={!mood}
                    onClick={() => {
                      setMood(undefined);
                      pickMovie(undefined, audience);
                    }}
                  >
                    Anything
                  </Chip>
                  {MOODS.filter((m) =>
                    page.season ? m.id !== "holiday" : true,
                  ).map((m) => (
                    <Chip
                      key={m.id}
                      active={mood === m.id}
                      onClick={() => {
                        setMood(m.id);
                        pickMovie(m.id, audience);
                      }}
                    >
                      {m.label}
                    </Chip>
                  ))}
                </div>
              </fieldset>
            )}

            <fieldset className="min-w-0 lg:mb-5">
              <legend className="mb-2 text-sm font-semibold lg:mb-3 lg:text-base">
                Who are you watching with?
              </legend>
              <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0">
                <Chip
                  active={!audience}
                  onClick={() => {
                    setAudience(undefined);
                    pickMovie(mood, undefined);
                  }}
                >
                  Anyone
                </Chip>
                {AUDIENCES.map((a) => (
                  <Chip
                    key={a.id}
                    active={audience === a.id}
                    onClick={() => {
                      setAudience(a.id);
                      pickMovie(mood, a.id);
                    }}
                  >
                    {a.label}
                  </Chip>
                ))}
              </div>
            </fieldset>

            <button
              type="button"
              onClick={() => pickMovie()}
              className="hidden w-full rounded-xl bg-reelmatch-black px-8 py-4 text-lg font-semibold text-white transition-opacity hover:opacity-90 lg:mt-auto lg:block"
            >
              {pick ? "Pick another movie" : "Pick a movie for me"}
            </button>
          </section>

          {/* On desktop the filter panel spans the card and the button row, so
              its bottom lines up with the buttons; the card fills the rest of
              the height. On smaller screens the card stays 16:9. */}
          <section
            ref={resultRef}
            aria-label="Your pick"
            className="scroll-mt-28 lg:h-full"
          >
            <div aria-live="polite" className="lg:h-full">
              <MovieCard
                key={shown.title}
                movie={shown}
                label={pick ? undefined : "Example pick"}
              />
            </div>
          </section>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-3 lg:col-start-2">
            {/* Before the first pick this is the main "go" button (the big
                  one in the filter panel is desktop only); afterwards it
                  becomes the app's thumbs-down. */}
            <button
              type="button"
              onClick={() => pickMovie()}
              className={`flex items-center gap-2 rounded-full border-2 border-reelmatch-black px-4 py-2 text-sm font-semibold transition-colors sm:text-base ${
                pick
                  ? "text-reelmatch-black hover:bg-gray-100"
                  : "bg-reelmatch-black text-white hover:opacity-90 lg:hidden"
              }`}
            >
              {pick ? (
                <ThumbsDown className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Shuffle className="h-5 w-5" aria-hidden="true" />
              )}
              {pick ? "Not this one" : "Pick a movie for me"}
            </button>
            <Link
              to="/download"
              onClick={() => track("generator_app_click", shown)}
              className="flex items-center gap-2 rounded-full border-2 border-reelmatch-primary bg-reelmatch-primary px-4 py-2 text-sm font-semibold text-reelmatch-dark transition-opacity hover:opacity-90 sm:text-base"
            >
              <ThumbsUp className="h-5 w-5" aria-hidden="true" />
              Save it in ReelMatch
            </Link>
            <p className="flex w-full gap-x-5 whitespace-nowrap text-sm sm:ml-auto sm:w-auto">
              <a
                href={trailerUrl(shown)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("generator_trailer_click", shown)}
                className="font-medium text-reelmatch-gray underline underline-offset-4 hover:text-reelmatch-dark"
              >
                Trailer on YouTube
              </a>
              <Link
                to={`/guides/${guideFor(shown)}`}
                className="font-medium text-reelmatch-gray underline underline-offset-4 hover:text-reelmatch-dark"
              >
                More like this
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl">
        <StoreCTA
          heading="Picking with someone else?"
          body="The generator picks for one. With ReelMatch, everyone swipes through trailers on their own phone and you see the movies you all said yes to. Free on iPhone and Android."
        />

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">
            How the generator works
          </h2>
          <p className="text-reelmatch-dark mb-3">
            The generator picks from our hand-picked guide movies plus hundreds
            of well-rated, widely seen films from TMDB, so you won't get filler.
            Choose a mood and who you're watching with to narrow it down, or
            leave both on "Anything" for a surprise. If nothing fits your exact
            combination, the generator widens the search so you always get a
            pick.
          </p>
          <p className="text-reelmatch-dark">
            Each pick links to its trailer. Thirty seconds of trailer tells you
            more about the tone than any poster, which is usually what decides
            whether a movie is right for tonight. That's the idea behind
            ReelMatch: instead of one random pick, everyone you're watching with
            swipes through trailers and you choose from the movies you all said
            yes to.
          </p>
          <p className="mt-3 text-sm text-reelmatch-gray">
            Images, ratings and cast from TMDB. This product uses the TMDB API
            but is not endorsed or certified by TMDB.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-6">
            Frequently asked questions
          </h2>
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
          <h2 className="text-2xl font-display font-bold mb-4">
            More ways to decide
          </h2>
          <ul className="space-y-2">
            {otherPages.map((p) => (
              <li key={p.path}>
                <Link
                  to={p.path}
                  className="font-medium underline underline-offset-4 hover:text-reelmatch-primary"
                >
                  {p.h1}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/guides"
                className="font-medium underline underline-offset-4 hover:text-reelmatch-primary"
              >
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
