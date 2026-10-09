import React from "react";
import { tmdbImage, type Movie } from "@/data/movies";

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

const runtimeLabel = (minutes: number) =>
  minutes >= 60 ? `${Math.floor(minutes / 60)}h ${minutes % 60}m` : `${minutes}m`;

/**
 * A movie card styled like the swipe card in the ReelMatch app (and the
 * Instagram posts): backdrop on top, gold genre pills, title, rating, year
 * and runtime, the reason to watch, and the lead actor at the bottom.
 */
const MovieCard: React.FC<{ movie: Movie; label?: string }> = ({ movie, label }) => {
  const d = movie.details;
  return (
    <article className="relative overflow-hidden rounded-[2rem] border-4 border-gray-400/80 bg-black text-white shadow-elevated">
      {d?.backdrop ? (
        <img
          src={tmdbImage(d.backdrop, "w780")}
          alt={`Still from ${movie.title} (${movie.year})`}
          width={780}
          height={439}
          loading="lazy"
          className="block aspect-video w-full object-cover"
        />
      ) : (
        <div className="aspect-video w-full bg-reelmatch-accent" aria-hidden="true" />
      )}
      {label && (
        <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-reelmatch-primary">
          {label}
        </span>
      )}

      <div className="p-6 md:p-7">
        {d?.genres.length ? (
          <ul className="mb-4 flex flex-wrap gap-2" aria-label="Genres">
            {d.genres.map((genre) => (
              <li
                key={genre}
                className="rounded-full border-2 border-reelmatch-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-reelmatch-primary"
              >
                {genre}
              </li>
            ))}
          </ul>
        ) : null}

        <h2 className="mb-2 text-2xl font-bold leading-tight md:text-3xl">{movie.title}</h2>

        <p className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-300 md:text-base">
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

        {movie.blurb && <p className="mb-5 text-base text-gray-300 md:text-lg">{capitalize(movie.blurb)}</p>}

        {d?.star && (
          <p className="flex items-center gap-3 text-sm text-gray-400">
            {d.starPhoto ? (
              <img
                src={tmdbImage(d.starPhoto, "w185")}
                alt=""
                width={36}
                height={36}
                loading="lazy"
                className="h-9 w-9 rounded-full object-cover"
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

export default MovieCard;
