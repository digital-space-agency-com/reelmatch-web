# Search Console baseline — 18 August 2026

Recorded immediately **before** the prerender/SEO branch was deployed, so the
effect of those changes is measurable rather than guessed at. Source: Google
Search Console, `sc-domain:reelmatch.app`, plus Ahrefs Webmaster Tools.

Note the property lives on a different Google account from the default profile
one — it is under Chrome profile `/u/1/`, not `/u/0/`.

## Headline, last 3 months (17 May – 16 Aug 2026)

| Metric | Value |
| --- | --- |
| Clicks | 997 |
| Impressions | 50,700 |
| Average CTR | 2.0% |
| Average position | 6.2 |
| Indexed pages | **2** |
| Not indexed | 6 |
| Manual actions | None |
| Core Web Vitals (mobile) | 2 good, 0 poor |
| Core Web Vitals (desktop) | insufficient data |

Ahrefs: Domain Rating 14, 290 referring domains (+95 in 30 days), organic
traffic 0, organic keywords 0.

## The whole site is one page

Only three URLs have ever earned an impression:

| Page | Clicks | Impressions | CTR | Position |
| --- | --- | --- | --- | --- |
| `/` | 997 | 50,659 | 2.0% | 6.2 |
| `/privacy-policy` | 1 | 62 | 1.6% | 6.7 |
| `/images/social-preview.png` | 0 | 1 | 0% | 7.0 |

`/download` has never earned a single impression.

## One query is 80% of all impressions

Top queries by clicks:

| Query | Clicks | Impressions | CTR | Position |
| --- | --- | --- | --- | --- |
| movie matcher | 502 | 40,355 | **1.2%** | 6.1 |
| reelmatch | 37 | 94 | 39.4% | 1.0 |
| match a movie | 28 | 293 | 9.6% | 7.6 |
| reel match | 15 | 54 | 27.8% | 2.8 |
| movie match | 11 | 445 | 2.5% | 9.1 |
| movie matcher app | 7 | 494 | 1.4% | 7.1 |
| movie tinder | 7 | 93 | 7.5% | 7.1 |
| movie matchee | 6 | 106 | 5.7% | 5.8 |
| movie matching | 6 | 52 | 11.5% | 5.5 |
| movie-matcher | 4 | 324 | 1.2% | 6.1 |

199 queries in total. Every one of the top 30 is a short generic head term or a
misspelling of one — `movie swipe app`, `film matcher`, `moviematcher`,
`movie macher`, `movie marcher`. **Not one question-shaped query appears
anywhere**, which is consistent with the site having had no page capable of
answering a question until now.

`movie matcher` at position 6.1 with 1.2% CTR is the single biggest gap: 40k
impressions producing 502 clicks. Position 6 should convert far better than
that. The likely reading is that searchers typing "movie matcher" want
movie-matcher.com specifically, so ReelMatch is being shown for a query that
carries another product's brand intent.

## Why the 6 pages are not indexed

**Page with redirect (5):**

| URL | Verdict |
| --- | --- |
| `http://reelmatch.app/` | expected — HTTPS canonicalisation |
| `http://www.reelmatch.app/` | expected — www canonicalisation |
| `https://www.reelmatch.app/` | expected — www canonicalisation |
| `https://reelmatch.app/download` | **bug — fixed in this branch** |
| `https://reelmatch.app/download.html` | **bug — fixed in this branch** |

Both download pages ran a user-agent device sniff that redirected anything
matching `/android/` to the Play Store. Googlebot's primary crawler is Googlebot
Smartphone, whose user agent contains `Android`, so Google was redirected to the
Play Store on every crawl and filed the page as a redirect rather than indexing
it. Fixed by excluding crawlers from the auto-redirect in both
`public/download.html` and `src/pages/Download.tsx` (see `isCrawler` in
`src/lib/download.ts`).

**Blocked by robots.txt (1):**

`https://reelmatch.app/?ref=producthunt`, blocked since **27 May 2025** by
`Disallow: /*?*`. This is the Product Hunt launch referral URL — a real inbound
link that has been unindexable for roughly 15 months. The audit called this rule
harmless-for-now; it had already cost something. The rule is removed in this
branch.

## Sitemap had stopped being read

`sitemap.xml` was submitted 9 June 2025 and **last read 27 November 2025** —
about nine months before this snapshot. Three pages discovered. The stale
`lastmod` dates (all 2025-06-13 or earlier) are the most likely cause.
`image-sitemap.xml` was never submitted at all.

## Review snippets

**1 valid item, 0 invalid.** Google had been parsing the homepage
`aggregateRating` (4.8 from 1,000 ratings) as a valid review snippet since about
May 2025, making the site eligible for star ratings in results. Neither store
backs those numbers — Google Play shows no rating at all.

No manual action has been issued, so removing the markup is preventive rather
than remedial. The trade-off is real and worth stating: dropping it gives up
star-rating eligibility in the SERP, which may cost some CTR. Keeping fabricated
ratings is a structured-data policy violation, so it goes.

## What to re-check after deploy

1. Resubmit `sitemap.xml` and submit `image-sitemap.xml`; confirm "last read"
   starts moving again.
2. Watch indexed pages go from 2 towards 10 as the guides, `/faq` and a now
   crawlable `/download` get picked up.
3. Confirm `/?ref=producthunt` leaves the blocked-by-robots report.
4. Confirm `/download` leaves the redirect report and starts earning
   impressions.
5. Watch for the first question-shaped queries entering the query report — that
   is the signal the guides are working.
6. Review snippets should drop to 0 valid items. Expected, not a regression.
