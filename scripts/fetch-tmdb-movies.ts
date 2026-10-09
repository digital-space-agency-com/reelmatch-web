/**
 * One-off: looks up every generator movie on TMDB and saves the poster,
 * backdrop, genres, rating, runtime and lead actor to src/data/movieDetails.json,
 * so the site never needs a TMDB key at build or run time.
 *
 *   TMDB_API_KEY=... npx tsx scripts/fetch-tmdb-movies.ts
 *
 * Re-run after adding guides. The key is read from the environment only.
 */
import { writeFileSync, existsSync, readFileSync } from "node:fs";
import { movies } from "../src/data/movies";

const key = process.env.TMDB_API_KEY;
if (!key) throw new Error("Set TMDB_API_KEY");
const out = "src/data/movieDetails.json";
const existing: Record<string, unknown> = existsSync(out) ? JSON.parse(readFileSync(out, "utf8")) : {};

const api = async (path: string, params: Record<string, string> = {}) => {
  const url = new URL(`https://api.themoviedb.org/3${path}`);
  url.search = new URLSearchParams({ api_key: key, language: "en-US", ...params }).toString();
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${path}`);
  return res.json();
};

const details: Record<string, unknown> = { ...existing };
let found = 0;
const missing: string[] = [];
for (const movie of movies) {
  const id = `${movie.title}|${movie.year}`;
  if (details[id]) { found++; continue; }
  const search = await api("/search/movie", { query: movie.title, year: String(movie.year) });
  let hit = search.results?.[0];
  if (!hit) {
    const loose = await api("/search/movie", { query: movie.title });
    hit = loose.results?.find((r: { release_date?: string }) => r.release_date?.startsWith(String(movie.year))) ?? null;
  }
  if (!hit) { missing.push(id); continue; }
  const full = await api(`/movie/${hit.id}`, { append_to_response: "credits" });
  details[id] = {
    tmdbId: full.id,
    poster: full.poster_path ?? null,
    backdrop: full.backdrop_path ?? null,
    genres: (full.genres ?? []).map((g: { name: string }) => g.name).slice(0, 3),
    vote: Math.round((full.vote_average ?? 0) * 10) / 10,
    votes: full.vote_count ?? 0,
    runtime: full.runtime ?? null,
    star: full.credits?.cast?.[0]?.name ?? null,
    starPhoto: full.credits?.cast?.[0]?.profile_path ?? null,
  };
  found++;
}
writeFileSync(out, JSON.stringify(details, null, 2) + "\n");
console.log(`saved ${found}/${movies.length}`);
if (missing.length) console.log("not found:", missing.join(", "));
