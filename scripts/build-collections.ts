/**
 * Resolves the hand-picked titles in src/data/collections.ts to TMDB data
 * (backdrop, genres, rating, runtime, US certification, description, and a
 * Spanish title/description for Spanish pages) and saves the result to
 * src/data/collectionMovies.json. Guide movies keep our own one-line reason.
 *
 *   TMDB_API_KEY=... npx tsx scripts/build-collections.ts
 */
import { writeFileSync } from "node:fs";
import { collections } from "../src/data/collections";
import { movies as curated } from "../src/data/movies";

const key = process.env.TMDB_API_KEY;
if (!key) throw new Error("Set TMDB_API_KEY");

const api = async (path: string, params: Record<string, string> = {}) => {
  const url = new URL(`https://api.themoviedb.org/3${path}`);
  url.search = new URLSearchParams({ api_key: key, language: "en-US", ...params }).toString();
  for (let attempt = 0; attempt < 3; attempt++) {
    const res = await fetch(url);
    if (res.status === 429) { await new Promise((r) => setTimeout(r, 1000)); continue; }
    if (!res.ok) throw new Error(`${res.status} ${path}`);
    return res.json();
  }
  throw new Error(`rate limited ${path}`);
};

const trim = (text: string) => {
  const clean = (text ?? "").replace(/\s+/g, " ").trim();
  return clean.length <= 260 ? clean : `${clean.slice(0, 257).replace(/\s+\S*$/, "")}…`;
};

const curatedByKey = new Map(curated.map((m) => [`${m.title}|${m.year}`, m]));
const wanted = new Map<string, { title: string; year: number; spanish: boolean }>();
for (const c of collections)
  for (const s of c.sections)
    for (const [title, year] of s.picks) {
      const k = `${title}|${year}`;
      const prev = wanted.get(k);
      wanted.set(k, { title, year, spanish: (prev?.spanish ?? false) || c.lang === "es" });
    }

const out: Record<string, unknown> = {};
const missing: string[] = [];
for (const [k, w] of wanted) {
  const known = curatedByKey.get(k);
  let id = known?.details?.tmdbId;
  if (!id) {
    const res = await api("/search/movie", { query: w.title, year: String(w.year) });
    const hit = res.results?.[0] ?? (await api("/search/movie", { query: w.title })).results?.find((r: { release_date?: string }) => r.release_date?.startsWith(String(w.year)));
    if (!hit) { missing.push(k); continue; }
    id = hit.id;
  }
  const full = await api(`/movie/${id}`, { append_to_response: "release_dates" });
  const us = (full.release_dates?.results ?? []).find((r: { iso_3166_1: string }) => r.iso_3166_1 === "US");
  const cert = us?.release_dates?.map((d: { certification: string }) => d.certification).find((c: string) => c) || undefined;
  const entry: Record<string, unknown> = {
    title: w.title,
    year: w.year,
    rating: known?.rating ?? cert,
    blurb: known?.blurb ? known.blurb.charAt(0).toUpperCase() + known.blurb.slice(1) : trim(full.overview),
    guide: known?.guide?.slug,
    details: {
      tmdbId: full.id,
      backdrop: full.backdrop_path ?? null,
      genres: (full.genres ?? []).map((g: { name: string }) => g.name).slice(0, 3),
      vote: Math.round((full.vote_average ?? 0) * 10) / 10,
      votes: full.vote_count ?? 0,
      runtime: full.runtime ?? null,
    },
  };
  if (w.spanish) {
    const es = await api(`/movie/${id}`, { language: "es-MX" });
    // TMDB typo in The Princess Bride's es-MX overview.
    entry.es = { title: es.title || w.title, blurb: trim((es.overview || "").replace("rajado de manera", "narrado de manera")), genres: (es.genres ?? []).map((g: { name: string }) => g.name).slice(0, 3) };
  }
  out[k] = entry;
}
writeFileSync("src/data/collectionMovies.json", JSON.stringify(out) + "\n");
console.log(`resolved ${Object.keys(out).length}/${wanted.size}`);
if (missing.length) console.log("missing:", missing.join(", "));
