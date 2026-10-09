import React from "react";
import { tmdbImage, type Movie } from "@/data/movies";

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

const runtimeLabel = (minutes: number) =>
  minutes >= 60 ? `${Math.floor(minutes / 60)}h ${minutes % 60}m` : `${minutes}m`;

/**
 * A landscape (16:9) movie card in the style of the ReelMatch app's swipe
 * card: the backdrop fills the card and the details sit over a dark fade,
 * with gold genre pills, the title, rating, year and runtime, the reason to
 * watch and the lead actor. On small screens the reason and actor are hidden
 * so the card keeps its 16:9 shape.
 */
const MovieCard: React.FC<{ movie: Movie; label?: string }> = ({ movie, label }) => {
  const d = movie.details;
  return (
    <article className="relative aspect-video w-full overflow-hidden rounded-[1.5rem] border-4 border-gray-400/80 bg-black text-white shadow-elevated">
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
          <p className="mt-2 hidden text-sm text-gray-200 sm:line-clamp-2 md:mt-3 md:text-base">
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

export default MovieCard;
