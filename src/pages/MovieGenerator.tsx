import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import StoreCTA from "@/components/StoreCTA";
import { generatorPage, generatorPages } from "@/data/generatorPages";
import {
  AUDIENCES,
  MOODS,
  matchingMovies,
  type Audience,
  type Movie,
  type Mood,
} from "@/data/movies";

type Gtag = (command: "event", name: string, params: Record<string, string>) => void;

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

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

  const pickMovie = () => {
    const pool = matchingMovies({ mood, audience, season: page.season });
    const choices = pool.length > 1 && pick ? pool.filter((m) => m.title !== pick.title) : pool;
    const next = choices[Math.floor(Math.random() * choices.length)];
    setPick(next);
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

          <div aria-live="polite">
            {pick && (
              <article className="mt-8 rounded-xl bg-reelmatch-secondary/30 p-6">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-1">{pick.title}</h2>
                <p className="text-reelmatch-gray mb-4">
                  {pick.year}
                  {pick.rating ? ` · Rated ${pick.rating}` : ""}
                </p>
                {pick.blurb && <p className="text-lg text-reelmatch-dark mb-5">{capitalize(pick.blurb)}</p>}
                <div className="flex flex-wrap gap-x-5 gap-y-3 items-center">
                  <Link
                    to="/download"
                    onClick={() => track("generator_app_click", pick)}
                    className="rounded-lg bg-reelmatch-primary text-reelmatch-dark px-5 py-2.5 font-semibold"
                  >
                    Get ReelMatch to swipe trailers like this
                  </Link>
                  <a
                    href={trailerUrl(pick)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track("generator_trailer_click", pick)}
                    className="text-sm font-medium underline underline-offset-4 text-reelmatch-gray hover:text-reelmatch-dark"
                  >
                    Trailer on YouTube
                  </a>
                  <Link
                    to={`/guides/${pick.guide.slug}`}
                    className="text-sm font-medium underline underline-offset-4 text-reelmatch-gray hover:text-reelmatch-dark"
                  >
                    More like this
                  </Link>
                </div>
                <p className="mt-4 text-sm text-reelmatch-gray">
                  In ReelMatch you and your partner, friends or family swipe through trailers on your own phones and
                  see the movies you all said yes to. Free on iPhone and Android.
                </p>
              </article>
            )}
          </div>
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
