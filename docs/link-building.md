# ReelMatch link building — targets and ready-to-send drafts

_Written 19 August 2026. Companion to `docs/ASO.md` and
`docs/search-console-baseline-2026-08-18.md`._

The site fixes from the 18 Aug audit made ReelMatch **eligible** to be cited.
This document is about being **chosen**. Those are different problems and this
one is not solvable in the repo.

---

## 1. Where things stand

Ahrefs, 19 August 2026 — **10 referring domains, 4 dofollow links**:

| Domain | DR | Dofollow | Verdict |
|---|---|---|---|
| apple.com | 97 | no | Real. App Store listing. Nofollow, but a strong entity signal |
| bug.hr | 65 | yes | Real. Croatian tech coverage, 37k monthly traffic |
| itsallwidgets.com | 52 | no | Real. Flutter showcase |
| mwmbl.org | 30 | yes ×2 | Neutral. Open-source crawler index, not coverage |
| blogsphere.top | 40 | no | Junk |
| seogeko.shop | 29 | no | Junk |
| acquire.co.in | 8 | no | Junk |
| addurl.in | 7 | no | Junk |
| egyptiandirectory.com | 7 | yes | Link farm — 231M dofollow linked domains at DR 7 |
| findit.co.in | 7 | no | Junk |

**Three genuine links, both editorial ones from July 2025.** Nothing since.

Two things follow:

- **Do not disavow the junk.** Google discards this class automatically;
  disavow is for manual actions, and Search Console shows none. But find out
  where the Feb–May 2026 cluster came from — six low-DR directories appearing
  in four months is a pattern, not chance. If a submission service is running,
  stop it.
- **You do not need Ahrefs Link Intersect** (it is gated on the current plan).
  Link Intersect exists to diff large profiles. With ten referring domains,
  every competitor backlink that is not one of those ten is a gap by
  definition. The free Ahrefs Backlink Checker, Moz free tier, or a Google
  operator search on each competitor gets you the same list.

---

## 2. Why this is the binding constraint

From the 18 Aug GEO testing, Google's AI Overviews in this category are
assembled almost entirely from four source types:

1. **Reddit threads** — cited in every category overview tested
2. **App store listings** — Apple and Play
3. **Short-form video** — TikTok, Instagram, Snapchat, YouTube
4. **Third-party roundups and regional press**

ReelMatch has a presence in exactly one of the four. The overviews are not
ignoring the site because the site is bad — they are citing sources ReelMatch
does not appear in. Every target below is chosen because it feeds one of those
four buckets.

---

## 3. Priority order

| # | Target | Effort | Why |
|---|---|---|---|
| 1 | Product Hunt link recovery | 10 min | Already earned, was blocked |
| 2 | Flutter ecosystem | 2 hrs | Proven lane — itsallwidgets worked |
| 3 | r/FlutterDev build post | 2 hrs | Real audience, real links, no pitch |
| 4 | Regional press | ongoing | The pattern competitors already exploit |
| 5 | Roundup writers | ongoing | These pages *are* AI Overview sources |
| 6 | Reddit category presence | ongoing | Most-cited source; nofollow but GEO gold |

---

## 4. Product Hunt — an already-earned link that was blocked

**This one is nearly free and should be done first.**

ReelMatch launched on Product Hunt in May 2025 and the homepage still renders
the badge, but `producthunt.com` does not appear in the referring domains at
all. The 18 Aug audit found the cause: `Disallow: /*?*` in robots.txt blocked
`https://reelmatch.app/?ref=producthunt` — the exact referral URL Product Hunt
links to — from 27 May 2025 until it was removed on 18 Aug 2026.

The rule is gone. What to do now:

1. Open `https://reelmatch.app/?ref=producthunt` and confirm it loads.
2. In Search Console, **URL Inspection** → paste that URL → **Request
   Indexing**.
3. Check the live Product Hunt listing still links out to reelmatch.app.
4. Re-check Ahrefs in ~3 weeks for producthunt.com appearing.

If the listing's link was dropped, the maker dashboard lets you re-add the
website URL.

---

## 5. Flutter ecosystem — the proven lane

`itsallwidgets.com` (DR 52) already produced a real link with no relationship
and no pitch. That lane is open and under-used.

### Targets

| Site | Type | Notes |
|---|---|---|
| **It's All Widgets** | App showcase | Already listed — submit an *update* with the new screenshots |
| **Flutter Awesome** | App/package showcase | Accepts apps; free submission |
| **Awesome Flutter** (GitHub) | Curated list | PR to the "Apps made with Flutter" section |
| **Flutter Community** (Medium) | Publication | Accepts technical write-ups |

**Not Flutter Gems** — it curates packages, not apps. ReelMatch is ineligible.

### Submission copy (reusable)

> **ReelMatch — Movie & TV discovery for people who can't agree**
>
> ReelMatch is a Flutter app for iOS and Android that solves a small, universal
> problem: two people, one evening, forty minutes lost to scrolling. You swipe
> through actual trailers rather than poster grids, and when two people swipe
> right on the same title it becomes a match.
>
> Built with Flutter 3.x, backed by the TMDB API for catalogue data and YouTube
> for trailer playback. Pro adds streaming-provider filters and one-tap launch
> to a TV.
>
> Free on [iOS](https://apps.apple.com/app/reelmatch/id6457263386) and
> [Android](https://play.google.com/store/apps/details?id=team.dsa.reelmatch).
> More at [reelmatch.app](https://reelmatch.app).

---

## 6. r/FlutterDev — a build post, not a pitch

r/FlutterDev rewards specifics and punishes marketing. The credible angle is
the engineering, not the app. Post from your own account, engage in the
comments, and let the link sit at the bottom.

> **Title:** Two years of a monetised Flutter app: what the trailer-swiping
> pipeline actually costs
>
> I've been running ReelMatch — a movie discovery app where you swipe trailers
> instead of poster grids — on iOS and Android for about two years now. A few
> things that surprised me, in case they're useful to anyone building something
> similar.
>
> **Video playback is the whole app.** The core interaction is a swipeable deck
> where each card autoplays a YouTube trailer. Getting that to feel like Tinder
> rather than a slideshow meant preloading the next two players while disposing
> anything more than two cards back — otherwise memory climbs until Android
> kills you. Worth profiling early if you're doing anything video-in-a-list.
>
> **TMDB is generous but you still cache aggressively.** Catalogue data,
> provider availability and trailer keys all come from TMDB. Provider
> availability changes often enough that caching it for a week produces
> user-visible wrongness; caching it for an hour produces a rate-limit problem.
>
> **Matching is the hard product problem, not the hard technical one.** Two
> people swiping independently and getting a mutual match is trivial to build
> and surprisingly hard to make feel good — mostly a question of how many cards
> someone sees before the first match lands.
>
> Happy to go into any of it. Code isn't open source but I'll answer anything
> about the architecture.
>
> [reelmatch.app](https://reelmatch.app) if you want to see the result.

**Rules:** check the current self-promotion policy before posting, and have
comment history on the sub first. A first-ever post that links your own product
gets removed regardless of quality.

---

## 7. Regional press — the pattern competitors already use

Two of the AI Overview citations found on 18 Aug were **local TV news segments
about a competitor**:

- **KAAL** (ABC 6, Rochester MN) — "'Matched' App Helps Couples Agree on Which
  Movie to Watch", July 2024
- **Texomashomepage** (KFDX/KJTL, Wichita Falls TX) — "App provides couples an
  easier way to choose movies together", July 2024

Both are lifestyle segments on regional affiliates. Nobody is competing for
these, they syndicate, and they get cited by AI Overviews. This is the single
most under-priced channel in the list.

### Pitch email

> **Subject:** Local developer's app ends the "what should we watch?" argument
>
> Hi [name],
>
> I build a small app called ReelMatch that solves a domestic argument most
> households have several times a week: two people, one evening, and forty
> minutes lost to scrolling before anyone presses play.
>
> It works like a dating app for films. You swipe through trailers rather than
> reading poster grids, and when two people swipe right on the same title it
> becomes a match. Around 10,000 people are using it.
>
> I thought it might make a light segment — it demos in about thirty seconds on
> camera, and the "we can never agree on anything" bit tends to land with
> anyone who shares a sofa. Happy to do a short screen-share walkthrough, or
> send footage if that's easier.
>
> Either way, thanks for reading.
>
> David Miller
> reelmatch.app

**Targeting:** lifestyle and consumer-tech desks at regional affiliates, plus
Irish and German outlets given Digital Space Agency's base. Pitch one outlet at
a time — these are not bulk sends.

---

## 8. Roundup writers — placements that pay twice

Pages titled "best apps for movie night", "apps for couples", "what to watch
apps" are exactly what AI Overviews quote. A placement earns a link *and* a
grounding source.

### Finding targets

Search each, then email whoever holds the byline:

```
"best apps" "movie night" 2026 -site:reddit.com
"apps for couples" "what to watch" 2026
intitle:"best" intitle:"movie" intitle:"apps" 2026
```

### Outreach email

> **Subject:** ReelMatch for your movie night apps roundup
>
> Hi [name],
>
> Your [article title] came up while I was researching this category — the
> [specific point] section in particular.
>
> I build ReelMatch, which fits the same slot but takes a different approach:
> instead of poster grids you swipe through actual trailers, which turns out to
> matter, because most disagreements about what to watch are really
> disagreements about tone, and thirty seconds of trailer settles that faster
> than a synopsis. Match with a partner or a group, and Pro adds
> streaming-provider filters and one-tap launch to a TV.
>
> Free on iOS and Android, roughly 10,000 users.
>
> If it's a fit for an update, I'm glad to send screenshots, or a Pro code so
> you can try the paid tier. And if it isn't, no follow-up from me.
>
> David Miller
> reelmatch.app

**Decline paid placements.** Six of the ten current referring domains are
exactly what buying listicle inclusion produces.

---

## 9. Reddit — no link value, high GEO value

Reddit links are nofollow and will never appear as a win in Ahrefs. Include it
anyway: it was cited in **every** category AI Overview tested on 18 August.
This is a GEO channel, not an SEO one.

### Where

`r/movies`, `r/netflix`, `r/television`, `r/AppHookup`, `r/androidapps`,
`r/iosapps`

### How

The threads that get cited are ones where somebody asks "how do you decide what
to watch" and real people answer. **Answer those questions where they already
exist** rather than starting promotional threads. Mention ReelMatch when it
genuinely answers the question, disclose that you built it, every time.

> Built one of these, so take it with the appropriate salt — but the thing that
> made the difference for us was swiping trailers instead of posters. Most
> "we can't agree" standoffs are actually tone mismatches, and thirty seconds
> of trailer resolves that much faster than an argument about a synopsis. It's
> called ReelMatch, free on both stores. Genuinely not trying to sell you
> anything, the general approach works whichever app you use.

Undisclosed promotion gets accounts banned and is the one failure mode here
that is hard to recover from.

---

## 10. Measurement

Re-check monthly:

- **Ahrefs referring domains** — target is 20+ genuine domains within six
  months, junk excluded
- **The six GEO queries** from the 18 Aug audit — specifically whether
  ReelMatch enters any *non-branded* AI Overview
- **Search Console** — impressions on `/guides/*` and `/faq`, which had no
  question-shaped queries at baseline

The leading indicator is not link count. It is whether ReelMatch starts
appearing in Reddit threads and roundups it did not write, because that is what
the AI Overviews read.
