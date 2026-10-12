import React from "react";
import { tmdbImage, type Movie } from "@/data/movies";

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

const runtimeLabel = (minutes: number) =>
  minutes >= 60 ? `${Math.floor(minutes / 60)}h ${minutes % 60}m` : `${minutes}m`;

/**
 * A landscape (16:9) movie card in the style of the ReelMatch app's swipe
 * card: the backdrop fills the card and the details sit over a dark fade,
 * with gold genre pills, the title, rating, year and runtime, the reason to
 * watch (up to four lines) and the lead actor. On phones the reason and actor
 * are hidden so the card keeps its 16:9 shape; on desktop the card can grow
 * taller to line up with the filter panel beside it.
 */
const MovieCard: React.FC<{ movie: Movie; label?: string }> = ({ movie, label }) => {
  const d = movie.details;
  return (
    <article className="relative aspect-video w-full overflow-hidden rounded-[1.5rem] lg:aspect-auto lg:h-full lg:min-h-[22rem] border-4 border-gray-400/80 bg-black text-white shadow-elevated">
      {d?.backdrop ? (
        <img
          src={tmdbImage(d.backdrop, "w780")}
          srcSet={`${tmdbImage(d.backdrop, "w780")} 780w, ${tmdbImage(d.backdrop, "w1280")} 1280w`}
          sizes="(min-width: 768px) 736px, 100vw"
          alt={`Still from ${movie.title} (${movie.year})`}
          width={1280}
          height={720}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent md:bg-gradient-to-r md:from-black md:via-black/70 md:to-transparent"
        aria-hidden="true"
      />

      {label && (
        <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-reelmatch-primary">
          {label}
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 md:w-[70%] md:p-7">
        {d?.genres.length ? (
          <ul className="mb-2 flex flex-wrap gap-1.5 md:mb-3 md:gap-2" aria-label="Genres">
            {d.genres.map((genre) => (
              <li
                key={genre}
                className="rounded-full border-2 border-reelmatch-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-reelmatch-primary md:px-3 md:py-1 md:text-xs"
              >
                {genre}
              </li>
            ))}
          </ul>
        ) : null}

        <h2 className="mb-1 text-xl font-bold leading-tight sm:text-2xl md:mb-2 md:text-3xl">{movie.title}</h2>

        <p className="flex flex-wrap items-center gap-x-2 text-xs text-gray-200 md:text-sm">
          {d && d.votes > 0 && (
            <>
              <span>
                <span className="text-reelmatch-primary" aria-hidden="true">★</span> {d.vote.toFixed(1)}{" "}
                <span className="text-gray-400">({d.votes.toLocaleString("en-US")})</span>
                <span className="sr-only"> TMDB rating</span>
              </span>
              <span aria-hidden="true">•</span>
            </>
          )}
          <span>{movie.year}</span>
          {d?.runtime ? (
            <>
              <span aria-hidden="true">•</span>
              <span>{runtimeLabel(d.runtime)}</span>
            </>
          ) : null}
          {movie.rating && (
            <>
              <span aria-hidden="true">•</span>
              <span>Rated {movie.rating}</span>
            </>
          )}
        </p>

        {movie.blurb && (
          <p className="mt-2 hidden text-sm text-gray-200 sm:line-clamp-3 md:mt-3 md:text-base lg:line-clamp-4">
            {capitalize(movie.blurb)}
          </p>
        )}

        {d?.star && (
          <p className="mt-3 hidden items-center gap-2 text-sm text-gray-300 md:flex">
            {d.starPhoto ? (
              <img
                src={tmdbImage(d.starPhoto, "w185")}
                alt=""
                width={28}
                height={28}
                loading="lazy"
                className="h-7 w-7 rounded-full object-cover"
              />
            ) : null}
            <span>
              Starring <span className="font-semibold text-white">{d.star}</span>
            </span>
          </p>
        )}
      </div>
    </article>
  );
};

/**
 * Card for movie list pages, in the same style as the app's card but with the
 * image on top and the text below, so the reason to watch is visible on every
 * screen size.
 */
export const GridMovieCard: React.FC<{
  title: string;
  originalTitle?: string;
  year: number;
  rating?: string;
  blurb?: string;
  genres: string[];
  backdrop: string | null;
  vote?: number;
  votes?: number;
  runtime?: number | null;
  rank: number;
  ratedLabel?: string;
}> = ({ title, originalTitle, year, rating, blurb, genres, backdrop, vote, votes, runtime, rank, ratedLabel = "Rated" }) => (
  <article className="flex h-full flex-col overflow-hidden rounded-[1.25rem] border-4 border-gray-400/80 bg-black text-white shadow-subtle">
    <div className="relative aspect-video w-full bg-reelmatch-accent">
      {backdrop ? (
        <img
          src={tmdbImage(backdrop, "w780")}
          alt={`Still from ${originalTitle ?? title} (${year})`}
          width={780}
          height={439}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
      <span className="absolute left-3 top-3 flex h-8 min-w-8 items-center justify-center rounded-full bg-black/75 px-2 text-sm font-bold text-reelmatch-primary">
        {rank}
      </span>
    </div>
    <div className="flex flex-1 flex-col p-5">
      {genres.length ? (
        <ul className="mb-3 flex flex-wrap gap-1.5" aria-label="Genres">
          {genres.map((genre) => (
            <li
              key={genre}
              className="rounded-full border-2 border-reelmatch-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-reelmatch-primary"
            >
              {genre}
            </li>
          ))}
        </ul>
      ) : null}
      <h3 className="text-xl font-bold leading-tight">{title}</h3>
      {originalTitle && originalTitle !== title ? <p className="text-xs text-gray-400">{originalTitle}</p> : null}
      <p className="mt-1 flex flex-wrap items-center gap-x-2 text-xs text-gray-300">
        {vote && votes ? (
          <>
            <span>
              <span className="text-reelmatch-primary" aria-hidden="true">★</span> {vote.toFixed(1)}
              <span className="sr-only"> TMDB rating</span>
            </span>
            <span aria-hidden="true">•</span>
          </>
        ) : null}
        <span>{year}</span>
        {runtime ? (
          <>
            <span aria-hidden="true">•</span>
            <span>{runtimeLabel(runtime)}</span>
          </>
        ) : null}
        {rating && rating !== "NR" ? (
          <>
            <span aria-hidden="true">•</span>
            <span>
              {ratedLabel} {rating}
            </span>
          </>
        ) : null}
      </p>
      {blurb ? <p className="mt-3 line-clamp-4 text-sm text-gray-300">{capitalize(blurb)}</p> : null}
    </div>
  </article>
);

export default MovieCard;
