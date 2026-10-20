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
const wanted = new Map<string, { title: string; year: number; spanish: boolean; tv: boolean; providers: Map<number, string> }>();
for (const c of collections)
  for (const s of c.sections)
    for (const [title, year, kind] of s.picks) {
      const k = `${title}|${year}`;
      const prev = wanted.get(k);
      const providers = prev?.providers ?? new Map<number, string>();
      if (c.provider) providers.set(c.provider.id, c.provider.name);
      wanted.set(k, { title, year, spanish: (prev?.spanish ?? false) || c.lang === "es", tv: kind === "tv", providers });
    }

const out: Record<string, unknown> = {};
const missing: string[] = [];
const notStreaming: string[] = [];
for (const [k, w] of wanted) {
  const kind = w.tv ? "tv" : "movie";
  const known = w.tv ? undefined : curatedByKey.get(k);
  let id = known?.details?.tmdbId;
  if (!id) {
    const yearParam = w.tv ? "first_air_date_year" : "year";
    const res = await api(`/search/${kind}`, { query: w.title, [yearParam]: String(w.year) });
    const dateOf = (r: { release_date?: string; first_air_date?: string }) => r.release_date ?? r.first_air_date ?? "";
    const hit = res.results?.[0] ?? (await api(`/search/${kind}`, { query: w.title })).results?.find((r: { release_date?: string; first_air_date?: string }) => dateOf(r).startsWith(String(w.year)));
    if (!hit) { missing.push(k); continue; }
    id = hit.id;
  }
  const full = await api(`/${kind}/${id}`, { append_to_response: w.tv ? "content_ratings" : "release_dates" });
  const us = w.tv
    ? (full.content_ratings?.results ?? []).find((r: { iso_3166_1: string }) => r.iso_3166_1 === "US")
    : (full.release_dates?.results ?? []).find((r: { iso_3166_1: string }) => r.iso_3166_1 === "US");
  const cert = w.tv
    ? us?.rating || undefined
    : us?.release_dates?.map((d: { certification: string }) => d.certification).find((c: string) => c) || undefined;
  // Streaming-service lists must only show titles that stream there (US, subscription).
  if (w.providers.size) {
    const wp = await api(`/${kind}/${id}/watch/providers`);
    const flatrate: number[] = (wp.results?.US?.flatrate ?? []).map((p: { provider_id: number }) => p.provider_id);
    for (const [pid, pname] of w.providers)
      if (!flatrate.includes(pid)) notStreaming.push(`${k} (not on ${pname} in the US)`);
  }
  const entry: Record<string, unknown> = {
    title: w.title,
    year: w.year,
    kind,
    rating: known?.rating ?? cert,
    blurb: known?.blurb ? known.blurb.charAt(0).toUpperCase() + known.blurb.slice(1) : trim(full.overview),
    guide: known?.guide?.slug,
    details: {
      tmdbId: full.id,
      backdrop: full.backdrop_path ?? null,
      genres: (full.genres ?? []).map((g: { name: string }) => g.name).slice(0, 3),
      vote: Math.round((full.vote_average ?? 0) * 10) / 10,
      votes: full.vote_count ?? 0,
      runtime: (w.tv ? full.episode_run_time?.[0] : full.runtime) ?? null,
    },
  };
  if (w.spanish) {
    const es = await api(`/${kind}/${id}`, { language: "es-MX" });
    // TMDB typo in The Princess Bride's es-MX overview.
    entry.es = { title: es.title || es.name || w.title, blurb: trim((es.overview || "").replace("rajado de manera", "narrado de manera")), genres: (es.genres ?? []).map((g: { name: string }) => g.name).slice(0, 3) };
  }
  out[k] = entry;
}
writeFileSync("src/data/collectionMovies.json", JSON.stringify(out) + "\n");
console.log(`resolved ${Object.keys(out).length}/${wanted.size}`);
if (missing.length) console.log("missing:", missing.join(", "));
if (notStreaming.length) console.log("NOT STREAMING (remove or replace these picks):\n  " + notStreaming.join("\n  "));
