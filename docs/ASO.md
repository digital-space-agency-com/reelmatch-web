# ReelMatch ASO working notes

Nothing in this repo can change a store listing — these edits happen in App
Store Connect and Google Play Console. This file exists so the store side stays
consistent with the site side, since the two now share vocabulary (see
`src/seo/pages.ts` and `src/data/faq.ts`).

Draft copy below is a starting point, not a finished decision. Validate the
keyword choices against your own ASO tool before shipping; the character counts
and field rules are accurate, the relative search volumes are not something this
repo can measure.

---

## 1. Ratings volume is the blocker — everything else is secondary

The Play listing shows 10K+ downloads and **no star rating**, because it has not
cleared the threshold at which Play displays one. Every competitor surfacing in
the same searches has a rating (Matched 3.7 from 754, Queue 3.0 from 1,940,
Cineswipe 4.4 from 323, as of the 18 Aug 2026 audit).

This costs more than it looks:

- Play's own ranking uses rating signals.
- "Best app for…" roundups and AI-generated recommendation lists lean on ratings
  as the cheapest available quality proxy. With nothing to cite, ReelMatch is
  structurally hard to include — which is exactly the query shape it loses on.

**Action:** ship the in-app review prompt, triggered at peak positive emotion —
immediately after a successful match, not on app launch and not after a session
count.

- iOS: `SKStoreReviewController` / `requestReview(in:)`. Apple throttles to three
  prompts per 365 days per user, so the trigger point matters more than the
  frequency.
- Android: Play In-App Review API. Same principle; Google also throttles.

Do not gate the prompt behind a "do you like the app?" fork — both stores
prohibit deflecting negative reviewers away from the store.

## 2. Title and subtitle

iOS gives you 30 characters of name and 30 of subtitle, both indexed. Play gives
50 characters of title and 80 of short description, both indexed.

The current alternate name in the site's structured data is *ReelMatch: Movie &
Trailer App for Friends*. That spends its budget on "Trailer" and "Friends" and
never says **match** or **what to watch**, which is what people actually search.

Drafts to test:

| Field | Limit | Draft |
| --- | --- | --- |
| iOS name | 30 | `ReelMatch: What To Watch` (24) |
| iOS subtitle | 30 | `Match Movies With Friends` (25) |
| Play title | 50 | `ReelMatch: What To Watch With Friends` (37) |
| Play short desc | 80 | `Swipe trailers, match with friends, and agree on a movie in minutes.` (68) |

Rules worth remembering: iOS does not index the long description at all, so
every keyword must earn its place in name, subtitle or the keyword field. Play
*does* index the long description, so the two stores want different copy.

## 3. iOS keyword field (100 characters)

Comma-separated, no spaces after commas, no plurals (iOS stems), and never
repeat words already in the name or subtitle — duplicates waste the budget.

Draft:

```
couples,partner,tonight,decide,pick,film,series,streaming,netflix,watchlist,swipe,group,night,together
```

Trim to 100 characters once you have decided which terms survive validation.
Note that competitor brand names are indexable but risky; check current App
Store review guidance before including any.

## 4. Play long description

Play indexes this field, so it should carry the same question-shaped language as
the new site pages — a listing and a website that agree on vocabulary reinforce
each other in both store search and AI answers.

Reuse, near-verbatim, from `src/data/faq.ts` and `src/data/guides.ts`:

- "find movies you both want to watch"
- "decide what to watch with your partner"
- "pick a movie for a group"
- "how movie matching apps work"
- "stop scrolling and start watching"

Aim for natural repetition of two or three head terms rather than a keyword
list; Play penalises stuffing.

## 5. Screenshots

Screenshots are the highest-leverage conversion asset and the one most often
left as raw captures.

- Caption every screenshot. The first two are what most users see without
  scrolling, so those two must carry the whole proposition: swipe trailers →
  match with friends.
- Lead with the match result screen, not the swipe deck. The match is the
  payoff; the swipe is the mechanic.
- The site now serves `screen_home_1.png` and `reelmatch_home_he-man.png` with
  alt text and an image sitemap. Keep the store screenshots visually consistent
  with those so brand recognition carries across surfaces.

## 6. Storefront and localisation

The site's App Store links were pinned to the Irish storefront
(`apps.apple.com/ie/app/...`) and are now storefront-neutral
(`apps.apple.com/app/...`), so Apple resolves each visitor's own region.

If the app is available in non-English markets, localised metadata is the
cheapest remaining ASO win — both stores index localised keyword fields
separately, so each locale is effectively a fresh keyword budget.

## 7. Custom product pages

Both stores support alternate listing variants with their own screenshots and
copy, addressable by URL. Worth setting up one per audience — couples, friend
groups, families — and pointing each of the new site guides at the matching
variant. That aligns the landing experience with the query that produced the
click.

---

## Where this connects back to the site

The site changes in this branch already do the store-adjacent half:

- `MobileApplication` structured data with accurate `featureList`, `offers` and
  both `downloadUrl` entries.
- `apple-itunes-app` smart banner (app-id 6457263386).
- Storefront-neutral store links everywhere, including `llms.txt`.
- An `aggregateRating` claiming 4.8 from 1,000 ratings was removed from the
  homepage JSON-LD. It was not backed by either store — Play shows no rating at
  all — and unverifiable review markup risks a structured-data manual action.
  Search Console confirmed Google had been parsing it as **1 valid review
  snippet** since roughly May 2025, so the site was live-eligible for star
  ratings on numbers that do not exist. No manual action has been issued.
  Reinstate it once real ratings exist **and** are displayed on the page.
- `/download` and `/download.html` were both unindexed and had never earned an
  impression, because their device sniff redirected Googlebot Smartphone (whose
  user agent contains "Android") to the Play Store. Fixed. This matters for ASO
  too: the download page is the site's only direct store-handoff surface and it
  has been invisible to Google since launch. See
  [search-console-baseline-2026-08-18.md](search-console-baseline-2026-08-18.md).
