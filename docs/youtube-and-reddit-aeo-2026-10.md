# YouTube brief and Reddit answers: AI visibility gaps (24 October 2026)

Why these two: in the 24 Oct AI visibility run (33 prompts, ChatGPT, Google AI
Overviews and Gemini) ReelMatch was absent from 14 Google AI Overview prompts
where competitors appear, and YouTube and Reddit were two of the most-cited
sources (YouTube in 12 answers, all Google AI Overviews for the "find a TV show
with my wife / husband / partner / kids app" prompts; Reddit in 10).

Rules for everything below (from the project writing preferences):

- Say you built ReelMatch, every time.
- No dating wording: no "Tinder", "date night", "swipe right", "match with
  people". The movie is what matches. Say "say yes to", "the titles you both
  said yes to".
- Only true claims. Don't mention ratings, review counts or rankings.
  "Free on iPhone and Android" is true; Pro is optional.
- US English in English copy.
- The existing demo video (`JTdq1PCcmhQ`) has "swipe right ... match with
  friends" on screen. Don't reuse it for this; record a new one.

---

## Part 1. YouTube video brief

### Goal

Get a video that Google's AI Overview can cite for "find a TV show with my wife
/ husband / partner app", and that links to the landing page
`https://reelmatch.app/find-a-tv-show-to-watch-together`.

### How the AI Overview picks a video

It reads the title, description, chapter titles and transcript. So the exact
phrase has to be in all four, said out loud in the first ten seconds, and the
video has to answer the question directly rather than be an ad.

### Format

One main video, about 45 to 60 seconds, plus a 20 to 25 second Short cut from
it. Screen recording of the real app with voiceover or captions. No face
required. Record on one phone, in portrait for the Short and landscape crop for
the main video.

### Title (pick one)

1. How to Find a TV Show to Watch With Your Husband, Wife or Partner (Free App)
2. Find a TV Show You'll Both Watch: Free App for Couples and Families
3. Can't Agree on a Show? Find a TV Show to Watch Together in 60 Seconds

Use option 1 for the main video: it contains the exact search phrase and the
three words people actually type (husband, wife, partner).

### Script (about 55 seconds)

Read it as written; times are targets. On-screen text in caps.

| Time | Voiceover | Screen |
|---|---|---|
| 0:00 | "Here's how to find a TV show to watch with your husband, wife or partner, without arguing for forty minutes." | Title card: FIND A TV SHOW TO WATCH TOGETHER |
| 0:08 | "The problem isn't genre. It's tone. One of you wants light, the other wants intense, and a title and a description never settle that." | Scrolling a streaming app, then stop |
| 0:18 | "I built a free app called ReelMatch that fixes it. Each of you swipes through trailers on your own phone." | Real ReelMatch trailer deck, swiping yes on a series |
| 0:30 | "You say yes or skip. Nobody has to turn down the other person's pick." | Show a skip and a yes |
| 0:38 | "Then ReelMatch shows only the shows you both said yes to, and where each one is streaming." | Real matches screen with a series on it |
| 0:48 | "Free on iPhone and Android. Link in the description. Start with the trailers, not the titles." | End card with App Store and Google Play badges and reelmatch.app |

Notes for the recording:

- Use only screens the app really has today. Check the matches screen shows a
  series, not only a movie, before recording; if not, record a movie and say
  "movie or show".
- Don't claim anything about ratings, user counts or awards.
- Use two real accounts so the matches screen is genuine. Don't show personal
  data (emails, handles you don't want public).
- Show the iPhone and Android badges, because "works across iPhone and Android"
  is a differentiator the AI answers pick up.

### Description (paste as is)

```text
How to find a TV show to watch with your husband, wife or partner: each of you swipes through trailers on your own phone, and ReelMatch shows only the shows and movies you both said yes to.

Free on iPhone and Android. I built ReelMatch.
Find a TV show to watch together: https://reelmatch.app/find-a-tv-show-to-watch-together
Download: https://reelmatch.app/download

Chapters
0:00 Find a TV show to watch with your partner
0:08 Why it's about tone, not genre
0:18 Swipe trailers on your own phone
0:38 See the shows you both said yes to

Works for couples, friends and families, and iPhone and Android users can use it together. ReelMatch covers titles on Netflix, Prime Video, Disney+, Hulu, Apple TV+ and Max. It doesn't stream anything itself.
```

Keep the first line exactly like that: it is the sentence most likely to be
quoted.

### Other settings

- **Pinned comment:** "I built ReelMatch. If you and your partner have very
  different tastes, tell me what you can never agree on and I'll suggest where
  to start." (Only post it if you will actually reply.)
- **Thumbnail:** two phones side by side, big text "FIND A SHOW TOGETHER". No
  faces or people needed. Don't use heart icons or romance imagery (no dating
  associations).
- **Tags:** find a tv show to watch together, tv show to watch with husband, tv
  show to watch with wife, tv show to watch with partner, what to watch
  together, movie matcher app, ReelMatch.
- **Category:** Howto & Style. **Language:** English (US).
- **Playlists:** add to a "How to decide what to watch" playlist with the
  existing demo.
- **End screen and cards:** link to the existing demo video.

### Short cut (20 to 25 seconds)

Same script from 0:00 to 0:30, cut to the matches screen, end on the badges.
Title: "Find a TV show to watch with your partner #shorts". Description: same
first line as above plus the landing page link.

### After publishing (website, 10 minutes)

1. Send me the video ID. I add it to the landing page as an embed and VideoObject
   schema (the `VideoEmbed` component and `src/seo/site.ts` already support the
   demo video; this adds a second one).
2. Link the video from the `/for-couples` hub.
3. Re-check the AI prompts "find a tv show with my wife / husband / partner
   app" in OpenSEO after two weeks. YouTube was cited on all of them.

### Honest limits

I can't record or publish the video. Google may take weeks to start citing it,
and a video is a good bet, not a guarantee. The pipeline channel
(@reelmatchapp) is mostly automated trailers, so a hand-made how-to is a
different kind of content and is worth keeping separate in a playlist.

---

## Part 2. Reddit answers

### How to use these

- Find a real thread first. A question that is already asked and still being
  answered is worth ten posts you start. Skip threads older than a few weeks and
  locked threads.
- Read the subreddit rules the same day. Many ban self-promotion or require a
  flair or an approved account age. If a sub bans it, don't post there. Don't
  ask anyone to upvote.
- Lead with advice that works without the app, then mention ReelMatch once, and
  disclose that you built it. Never reuse a draft word for word in two
  places. Change the opening and the examples to match the thread.
- Put no link in the comment unless the sub allows it. The name is enough, and
  people will search for it.
- One comment per thread. Answer replies for a few days. If you won't reply,
  don't post.

### Where to look (searches)

Search Reddit for these, sorted by new and limited to the past month:

- "show to watch with my wife" / "husband" / "partner"
- "what series should we watch together"
- "app to pick what to watch"
- "can't agree on what to watch"
- "long distance what to watch together"
- "family show everyone will like"

Subreddits to check rules for: r/television, r/netflix, r/MovieSuggestions,
r/whattowatch (if it exists and allows it), r/AppHookup, r/androidapps,
r/iosapps, r/LongDistance, r/relationship_advice (usually no promotion, answer
without naming the app).

### Drafts

**1. "Show to watch with my wife / husband / partner" thread**

```text
Disclosure: I built an app for this, so weigh my answer. What works for a series is picking by tone, not genre. Each of you writes down two shows you'd happily start tonight without showing the other, and you only pick from the overlap. A series is a commitment, so also agree to give episode one a fair go before you veto it.

If you want it done for you, mine is called ReelMatch: you each swipe through trailers on your own phone and it shows the shows and movies you both said yes to. Free on iPhone and Android.
```

**2. Long-distance thread**

```text
I built a movie app, so bias noted. For watching apart, the trick is deciding separately, not on a call. Each of you says yes or no to the same list in your own time, and you only watch what you both said yes to.

ReelMatch works like that: you each swipe through trailers on your own phone, whenever it suits you, and it shows what you both said yes to. No need to be online at the same time. Free on iPhone and Android.
```

(Don't claim it syncs playback or lets you watch together. It doesn't.)

**3. Family or kids thread**

```text
Disclosure: I made an app that helps families pick, so take that into account. What helped our house was letting everyone choose from a shortlist they each approved, instead of one person picking. Let each person say yes or no to trailers on their own, then only look at what everyone said yes to.

ReelMatch does that: free on iPhone and Android, groups of three or more can use it. It isn't a locked-down kids app, so use your streaming service's parental controls for what's allowed.
```

**4. "Alternative to a random movie generator" thread**

```text
Full disclosure, I make a small movie picker, so I'm biased. A random generator picks for one person, which is why it doesn't help when two or more people watch. What works better is each person saying yes or no to the same trailers, then picking from the overlap.

If you just want a random pick, the one on reelmatch.app is free and needs no sign-up. If you want everyone's opinion counted, the ReelMatch app does the overlap for you. Free on iOS and Android.
```

(Only include the generator link if the sub allows links.)

**5. "App to filter by streaming service and open on my TV" thread**

```text
Disclosure: I built ReelMatch, so bias noted. If you mean choosing together, it has a Pro option that limits the deck to the services you already pay for and opens a matched title on your smart TV. The base app is free; Pro is an optional subscription.

If you only want to see what's streaming where, JustWatch and Reelgood are better at that than we are.
```

(The last line is deliberate: being straight about the better tool for a different
job earns trust, and moderators and readers notice.)

**6. Spanish: "qué serie ver con mi esposo / esposa / pareja"**

```text
Aviso: yo hice una app para esto, así que tómalo con calma. Lo que funciona con una serie es elegir por el tono, no por el género: cada uno anota dos series que sí empezaría hoy, sin enseñárselas al otro, y eligen solo entre las que coinciden. Una serie es un compromiso, así que acuerden darle una oportunidad al primer episodio antes de vetarla.

Si lo quieres automático, la mía se llama ReelMatch: cada quien desliza tráilers en su teléfono y te muestra las series y películas que a los dos les gustaron. Es gratis en iPhone y Android. La app por ahora está en inglés, pero es muy visual.
```

### Tracker

| # | Where (sub + thread link) | Draft | Posted | Replies | Notes |
|---|---|---|---|---|---|
| 1 | | 1 | | | |
| 2 | | 2 | | | |
| 3 | | 3 | | | |
| 4 | | 4 | | | |
| 5 | | 5 | | | |
| 6 | | 6 | | | |

### Measure

- Re-run the AI visibility check in about two weeks and look at whether
  `www.reddit.com` threads that mention ReelMatch show up as cited sources.
- Count mentions of "ReelMatch" in Reddit search (reddit.com/search, sort by
  new). The goal is threads you did not write.
