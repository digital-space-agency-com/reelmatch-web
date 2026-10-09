import { guides, type Guide } from "./guides";
import detailsJson from "./movieDetails.json";

/**
 * The movie pool behind the random movie generator, built from the picks in
 * the English guides so the two never drift apart: add a guide and its movies
 * join the generator. Each list item like "Paddington 2 (2017, PG): kind and
 * funny" becomes one movie; moods and audiences come from the guide and the
 * section it sits in.
 */

export type Mood = "funny" | "feel-good" | "scary" | "romantic" | "thrilling" | "moving" | "holiday";
export type Audience = "couple" | "friends" | "family" | "teens" | "parents";
export type Season = "halloween" | "thanksgiving" | "christmas";

/** TMDB details saved by scripts/fetch-tmdb-movies.ts (image paths, not URLs). */
export type MovieDetails = {
  tmdbId: number;
  poster: string | null;
  backdrop: string | null;
  genres: string[];
  vote: number;
  votes: number;
  runtime: number | null;
  star: string | null;
  starPhoto: string | null;
};

const movieDetails = detailsJson as Record<string, MovieDetails>;

export const tmdbImage = (path: string, size: "w185" | "w342" | "w780" | "w1280") =>
  `https://image.tmdb.org/t/p/${size}${path}`;

export type Movie = {
  title: string;
  year: number;
  /** US rating when the guide gives one. */
  rating?: string;
  blurb: string;
  moods: Mood[];
  audiences: Audience[];
  seasons: Season[];
  /** Guide the pick comes from, for the "more like this" link. */
  guide: { slug: string; title: string };
  details?: MovieDetails;
};

export const MOODS: { id: Mood; label: string }[] = [
  { id: "funny", label: "Funny" },
  { id: "feel-good", label: "Feel-good" },
  { id: "scary", label: "Scary" },
  { id: "romantic", label: "Romantic" },
  { id: "thrilling", label: "Thrilling" },
  { id: "moving", label: "Moving" },
  { id: "holiday", label: "Holiday" },
];

export const AUDIENCES: { id: Audience; label: string }[] = [
  { id: "couple", label: "My partner" },
  { id: "friends", label: "Friends" },
  { id: "family", label: "Kids & family" },
  { id: "teens", label: "Teens" },
  { id: "parents", label: "My parents" },
];

const ITEM = /^(.+?) \((\d{4})(?:, ([^)]+))?\)(?::\s*(.+))?$/;

const MOOD_RULES: [RegExp, Mood][] = [
  [/laugh|comed|funny/i, "funny"],
  [/feel-good|cozy|pure joy|comfort|heartwarming|uplifting|crowd-pleasers/i, "feel-good"],
  [/horror|scary|fright|tense/i, "scary"],
  [/romance|romantic/i, "romantic"],
  [/thriller|action|adventure|sci-fi|myster/i, "thrilling"],
  [/heartfelt|drama|coming-of-age|different/i, "moving"],
];

const GUIDE_AUDIENCE: Record<string, Audience[]> = {
  "movies-to-watch-as-a-couple": ["couple"],
  "movies-to-watch-with-friends": ["friends"],
  "scary-movies-to-watch-with-friends": ["friends"],
  "family-movies-to-watch": ["family"],
  "movies-to-watch-with-teens": ["teens"],
  "movies-to-watch-with-your-mom": ["parents"],
  "family-christmas-movies": ["family"],
  "thanksgiving-movies": ["family", "parents"],
};

const GUIDE_SEASON: Record<string, Season> = {
  "family-christmas-movies": "christmas",
  "thanksgiving-movies": "thanksgiving",
};

function classify(guide: Guide, heading: string) {
  const moods = new Set<Mood>();
  const audiences = new Set<Audience>(GUIDE_AUDIENCE[guide.slug] ?? []);
  const seasons = new Set<Season>();

  MOOD_RULES.forEach(([pattern, mood]) => pattern.test(heading) && moods.add(mood));
  if (guide.slug === "scary-movies-to-watch-with-friends") moods.add("scary");
  if (/halloween/i.test(heading)) {
    seasons.add("halloween");
    audiences.add("family");
  }
  if (/kids|ages|family|everyone/i.test(heading)) audiences.add("family");
  if (/teens/i.test(heading)) audiences.add("teens");
  if (/adults|romantic/i.test(heading)) {
    audiences.delete("family");
    audiences.add("couple");
  }
  if (/dad|parents/i.test(heading)) audiences.add("parents");

  const season = GUIDE_SEASON[guide.slug];
  if (season) {
    seasons.add(season);
    moods.add("holiday");
  }
  if (moods.size === 0) moods.add("feel-good");
  return { moods, audiences, seasons };
}

function buildMovies(): Movie[] {
  const byKey = new Map<string, Movie>();
  for (const guide of guides) {
    for (const section of guide.sections) {
      if (!section.list || /^shows|show/i.test(section.heading)) continue;
      for (const item of section.list) {
        const match = ITEM.exec(item);
        if (!match) continue;
        const [, title, year, rating, blurb] = match;
        const { moods, audiences, seasons } = classify(guide, section.heading);
        const key = `${title.toLowerCase()}|${year}`;
        const existing = byKey.get(key);
        if (existing) {
          existing.moods = [...new Set([...existing.moods, ...moods])];
          existing.audiences = [...new Set([...existing.audiences, ...audiences])];
          existing.seasons = [...new Set([...existing.seasons, ...seasons])];
          existing.rating ??= rating;
          if (!existing.blurb && blurb) existing.blurb = blurb;
          continue;
        }
        byKey.set(key, {
          title,
          year: Number(year),
          rating,
          blurb: blurb ?? "",
          moods: [...moods],
          audiences: [...audiences],
          seasons: [...seasons],
          guide: { slug: guide.slug, title: guide.title },
        });
      }
    }
  }
  return [...byKey.values()];
}

export const movies: Movie[] = buildMovies().map((movie) => ({
  ...movie,
  details: movieDetails[`${movie.title}|${movie.year}`],
}));

export const findMovie = (title: string) => movies.find((m) => m.title === title);

export type GeneratorFilter = { mood?: Mood; audience?: Audience; season?: Season };

/**
 * Movies matching the filter. If mood and audience together leave nothing,
 * the audience is relaxed so a pick always comes back.
 */
export function matchingMovies(filter: GeneratorFilter): Movie[] {
  const bySeason = filter.season ? movies.filter((m) => m.seasons.includes(filter.season!)) : movies;
  const byMood = filter.mood ? bySeason.filter((m) => m.moods.includes(filter.mood!)) : bySeason;
  const both = filter.audience ? byMood.filter((m) => m.audiences.includes(filter.audience!)) : byMood;
  return both.length > 0 ? both : byMood.length > 0 ? byMood : bySeason;
}
