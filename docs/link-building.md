# ReelMatch link building — targets and ready-to-send drafts

_Written 19 August 2026, drafts replaced 23 September 2026. Companion to
`docs/ASO.md` and `docs/search-console-baseline-2026-08-18.md`._

> **The copy lives in [outreach-drafts.md](outreach-drafts.md).** The original
> drafts in this file used dating-app wording ("swipe right", "like a dating
> app"), described downloads as users, and made technical claims the code
> doesn't support. They were removed on 23 Sep 2026. This file keeps the
> strategy and targeting.

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
| **It's All Widgets** | App showcase | Already listed — submit an *update* |
| **Flutter Community** (Medium) | Publication | Accepts technical write-ups |
| ~~Awesome Flutter~~ (GitHub) | Curated list | Only lists **open-source** apps. ReelMatch is closed source, so not eligible |
| ~~Flutter Awesome~~ | Showcase | Mostly open-source GitHub projects. Check before submitting |

**Not Flutter Gems** — it curates packages, not apps.

Drafts: [It's All Widgets](outreach-drafts.md#its-all-widgets) and
[Flutter Community](outreach-drafts.md#flutter-community-on-medium).

---

## 6. r/FlutterDev — a build post, not a pitch

r/FlutterDev rewards specifics and punishes marketing. The credible angle is
the engineering, not the app. Post from your own account, engage in the
comments, and let the link sit at the bottom.

Draft (every technical claim checked against the app code on 23 Sep 2026):
[outreach-drafts.md → r/FlutterDev](outreach-drafts.md#rflutterdev-build-post).

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

English and Spanish drafts:
[outreach-drafts.md → Regional press](outreach-drafts.md#regional-press).

**Targeting:** lifestyle and consumer-tech desks at regional affiliates, Irish
and German outlets given Digital Space Agency's base, and since 23 Sep 2026
Mexican and Spanish tech and lifestyle outlets. Pitch one outlet at a time —
these are not bulk sends.

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

English and Spanish drafts:
[outreach-drafts.md → Roundup writers](outreach-drafts.md#roundup-writers).

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
genuinely answers the question, and disclose that you built it, every time.

Answer templates in English and Spanish:
[outreach-drafts.md → Reddit answers](outreach-drafts.md#reddit-answers).

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
