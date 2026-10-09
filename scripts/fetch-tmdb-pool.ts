/**
 * Builds the extended generator pool: well-rated, widely seen movies from
 * TMDB on top of the hand-picked guide movies. Saves src/data/moviePool.json,
 * which the generator loads only on its own pages.
 *
 *   TMDB_API_KEY=... npx tsx scripts/fetch-tmdb-pool.ts
 *
 * The key is read from the environment only. Re-run every few months to pick
 * up newer releases.
 */
import { writeFileSync } from "node:fs";
import { movies as curated } from "../src/data/movies";
import type { Audience, Mood, Season } from "../src/data/movies";

const key = process.env.TMDB_API_KEY;
if (!key) throw new Error("Set TMDB_API_KEY");

const api = async (path: string, params: Record<string, string> = {}) => {
  const url = new URL(`https://api.themoviedb.org/3${path}`);
  url.search = new URLSearchParams({ api_key: key, language: "en-US", ...params }).toString();
  for (let attempt = 0; attempt < 3; attempt++) {
    const res = await fetch(url);
    if (res.status === 429) {
      await new Promise((r) => setTimeout(r, 1000));
      continue;
    }
    if (!res.ok) throw new Error(`${res.status} ${path}`);
    return res.json();
  }
  throw new Error(`rate limited ${path}`);
};

// TMDB genre and keyword ids.
const G = { action: 28, adventure: 12, animation: 16, comedy: 35, crime: 80, drama: 18, family: 10751, fantasy: 14, horror: 27, mystery: 9648, romance: 10749, scifi: 878, thriller: 53 };
const K = { christmas: 207317, halloween: 3335 };

/** Discover buckets: [label, params, how many]. Sorted by vote count so the picks are well known. */
const buckets: [string, Record<string, string>, number][] = [
  ["comedy", { with_genres: `${G.comedy}`, without_genres: `${G.animation}` }, 120],
  ["horror", { with_genres: `${G.horror}` }, 100],
  ["romance", { with_genres: `${G.romance}` }, 80],
  ["family", { with_genres: `${G.family}|${G.animation}` }, 110],
  ["action", { with_genres: `${G.action}|${G.adventure}` }, 120],
  ["scifi", { with_genres: `${G.scifi}|${G.fantasy}` }, 80],
  ["thriller", { with_genres: `${G.thriller}|${G.mystery}|${G.crime}` }, 100],
  ["drama", { with_genres: `${G.drama}`, without_genres: `${G.comedy},${G.horror}` }, 120],
  ["christmas", { with_keywords: `${K.christmas}`, "vote_count.gte": "300" }, 60],
  ["halloween", { with_keywords: `${K.halloween}`, "vote_count.gte": "300" }, 30],
];

const base = {
  sort_by: "vote_count.desc",
  "vote_average.gte": "6.6",
  "vote_count.gte": "1500",
  include_adult: "false",
  certification_country: "US",
  "certification.lte": "R",
};

const curatedKeys = new Set(curated.map((m) => `${m.title.toLowerCase()}|${m.year}`));
const ids = new Map<number, string>();
for (const [label, params, count] of buckets) {
  let page = 1;
  let added = 0;
  while (added < count && page <= 10) {
    const res = await api("/discover/movie", { ...base, ...params, page: String(page) });
    for (const r of res.results ?? []) {
      if (added >= count) break;
      const year = (r.release_date ?? "").slice(0, 4);
      if (!year || curatedKeys.has(`${r.title.toLowerCase()}|${year}`) || ids.has(r.id)) continue;
      ids.set(r.id, label);
      added++;
    }
    if (page >= (res.total_pages ?? 1)) break;
    page++;
  }
  console.log(`${label}: ${added}`);
}

/** The overview, trimmed at a word to fit four lines on the card. Not split
 * into sentences: abbreviations like "Dr." made that cut summaries short. */
const shortOverview = (text: string) => {
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length <= 260 ? clean : `${clean.slice(0, 257).replace(/\s+\S*$/, "")}…`;
};

type PoolMovie = {
  title: string;
  year: number;
  rating?: string;
  blurb: string;
  moods: Mood[];
  audiences: Audience[];
  seasons: Season[];
  details: Record<string, unknown>;
};

async function build(id: number): Promise<PoolMovie | null> {
  const full = await api(`/movie/${id}`, { append_to_response: "credits,release_dates,keywords" });
  const us = (full.release_dates?.results ?? []).find((r: { iso_3166_1: string }) => r.iso_3166_1 === "US");
  const cert: string | undefined = us?.release_dates?.map((d: { certification: string }) => d.certification).find((c: string) => c) || undefined;
  if (!cert || !["G", "PG", "PG-13", "R"].includes(cert) || !full.backdrop_path || !full.overview) return null;

  const genreIds = new Set<number>((full.genres ?? []).map((g: { id: number }) => g.id));
  const keywordIds = new Set<number>((full.keywords?.keywords ?? []).map((k: { id: number }) => k.id));
  const moods = new Set<Mood>();
  const audiences = new Set<Audience>();
  const seasons = new Set<Season>();

  if (genreIds.has(G.comedy)) moods.add("funny");
  if (genreIds.has(G.horror)) moods.add("scary");
  if (genreIds.has(G.romance)) moods.add("romantic");
  if ([G.action, G.adventure, G.scifi, G.thriller, G.mystery, G.crime, G.fantasy].some((g) => genreIds.has(g))) moods.add("thrilling");
  if (genreIds.has(G.drama) && !genreIds.has(G.comedy)) moods.add("moving");
  if (genreIds.has(G.family) || genreIds.has(G.animation) || (genreIds.has(G.comedy) && !genreIds.has(G.horror) && full.vote_average >= 7.2)) moods.add("feel-good");
  if (keywordIds.has(K.christmas)) {
    moods.add("holiday");
    seasons.add("christmas");
  }
  if (keywordIds.has(K.halloween)) seasons.add("halloween");
  if (moods.size === 0) moods.add("moving");

  if (cert === "G" || cert === "PG") audiences.add("family");
  if (cert !== "R") audiences.add("teens");
  if (genreIds.has(G.romance) || genreIds.has(G.drama) || genreIds.has(G.comedy)) audiences.add("couple");
  if (genreIds.has(G.comedy) || genreIds.has(G.horror) || genreIds.has(G.action) || genreIds.has(G.thriller)) audiences.add("friends");
  if (cert !== "R" && !genreIds.has(G.horror) && (genreIds.has(G.drama) || genreIds.has(G.comedy) || genreIds.has(G.family))) audiences.add("parents");

  return {
    title: full.title,
    year: Number(full.release_date.slice(0, 4)),
    rating: cert,
    blurb: shortOverview(full.overview),
    moods: [...moods],
    audiences: [...audiences],
    seasons: [...seasons],
    details: {
      tmdbId: full.id,
      backdrop: full.backdrop_path,
      genres: (full.genres ?? []).map((g: { name: string }) => g.name).slice(0, 3),
      vote: Math.round((full.vote_average ?? 0) * 10) / 10,
      votes: full.vote_count ?? 0,
      runtime: full.runtime ?? null,
      star: full.credits?.cast?.[0]?.name ?? null,
      starPhoto: full.credits?.cast?.[0]?.profile_path ?? null,
    },
  };
}

const pool: PoolMovie[] = [];
const queue = [...ids.keys()];
await Promise.all(
  Array.from({ length: 8 }, async () => {
    while (queue.length) {
      const id = queue.shift()!;
      try {
        const movie = await build(id);
        if (movie) pool.push(movie);
      } catch (e) {
        console.warn(`skip ${id}: ${(e as Error).message}`);
      }
    }
  }),
);
pool.sort((a, b) => a.title.localeCompare(b.title));
writeFileSync("src/data/moviePool.json", JSON.stringify(pool) + "\n");
console.log(`saved ${pool.length} extra movies`);
