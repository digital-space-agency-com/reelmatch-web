# ReelMatch outreach drafts

_Drafted 23 September 2026. Supersedes the drafts in the 19 Aug version of
[link-building.md](link-building.md), which used dating-app wording and
unverified claims. Strategy and targeting stay in link-building.md; this file
holds the copy._

Every draft is meant to be sent by hand from your own accounts. Personalize
anything with a `[placeholder]` before sending.

## Ground rules

- **Always disclose.** Say you built ReelMatch, every time. Undisclosed
  promotion gets accounts banned.
- **No dating wording.** No Tinder, "swipe right", "perfect match" or "match
  with". The movie is what matches, not people.
- **Only true numbers.** "More than 10,000 downloads on Google Play." Not
  "users", and no ratings the stores don't show.
- **Never pay for listings.** Turn down paid listicle and directory
  placements.

## Contents

| Channel | Link value | Effort |
|---|---|---|
| [Product Hunt](#product-hunt) | Already earned, needs recovering | 10 minutes |
| [It's All Widgets](#its-all-widgets) | Existing listing (nofollow) | 15 minutes |
| [r/FlutterDev](#rflutterdev-build-post) | Nofollow, developer audience | 1–2 hours with replies |
| [Flutter Community](#flutter-community-on-medium) | Article with author links | Half a day |
| [Reddit answers](#reddit-answers) | Nofollow, cited by AI answers | 10 minutes each |
| [Regional press](#regional-press) | Editorial | Ongoing |
| [Roundup writers](#roundup-writers) | Editorial | Ongoing |
| [Skipped](#skipped-and-why) | | |

---

## Product Hunt

ReelMatch launched here in May 2025, but the link never counted: the old
robots.txt rule `Disallow: /*?*` blocked `reelmatch.app/?ref=producthunt` until
18 Aug 2026. No post needed:

1. Open <https://www.producthunt.com/products/reelmatch> and check the website
   link still points to `reelmatch.app`. If it's gone, re-add it in the maker
   dashboard.
2. Check the tagline and description for "swipe right" or "match with friends"
   and update them.
3. In Search Console, run URL Inspection on
   `https://reelmatch.app/?ref=producthunt` and click **Request indexing**.
4. Check your backlink tool again in about 3 weeks for producthunt.com.

**Tagline** (Product Hunt allows 60 characters; this is 58):

```text
Swipe trailers together and see what you all want to watch
```

---

## It's All Widgets

The listing at <https://itsallwidgets.com/reelmatch> is one of three real
links. Update it rather than creating a new one: sign in with the account that
made it and edit the description. Add fresh screenshots if you have them.

**Short description:**

```text
Swipe movie and TV trailers with friends and see the titles you all said yes to.
```

**Long description:**

```text
ReelMatch is a Flutter app for iOS and Android that helps couples, friends and families agree on what to watch. Everyone swipes through real trailers on their own phone, and any title two or more people say yes to shows up in a shared list of matches. iPhone and Android users can use it together.

Built with Flutter 3.27 and Provider. Firebase (Auth and Firestore) handles accounts and matches, TMDB provides titles and streaming availability, youtube_player_flutter plays the trailers, appinio_swiper powers the card deck, and RevenueCat runs the Pro subscription.

Free on iOS and Android. ReelMatch Pro adds streaming-service and genre filters and instant launch on a smart TV.

Website: https://reelmatch.app
App Store: https://apps.apple.com/app/reelmatch/id6457263386
Google Play: https://play.google.com/store/apps/details?id=team.dsa.reelmatch
```

---

## r/FlutterDev build post

r/FlutterDev rewards engineering detail and removes marketing. Every technical
point below matches the ReelMatch codebase as of 23 Sep 2026
(`lib/repository/tmdb_repo.dart`, `lib/repository/movie_repo.dart`,
`lib/screens/home/card_front.dart`). Stay in the comments for the first few
hours.

Before posting:

- [ ] Read the subreddit rules for self-promotion and flair on the day you
      post.
- [ ] Post from an account with some comment history in the sub. A first-ever
      post linking your own product usually gets removed.
- [ ] The last point ("how many cards before the first match") is an opinion.
      Keep it only if it's true for you.

**Title:**

```text
Three years of a Flutter app built around YouTube trailers in a swipe deck: what I learned
```

**Body** (Reddit markdown):

```markdown
I built ReelMatch, a movie and TV app where you swipe through trailers instead of poster grids, and connected friends see the titles they all said yes to. It's been on iOS and Android since 2023: Flutter 3.27, Provider, Firebase and TMDB. A few things I learned that might help anyone building something similar.

**One TMDB request per title, not four.** TMDB's `append_to_response` lets you pull `videos,credits,watch/providers,release_dates` in the same call as the details. That's the trailer key, the cast, where it's streaming and the age rating in one round trip, which matters when you're filling a swipe deck.

**Streaming availability goes stale.** Provider data changes all the time, so saved titles sometimes come back with no availability at all. When that happens the app re-fetches the title once before showing it. Simple, and it fixes most of the gaps.

**Denormalize for the feature people pay for.** The paid tier filters matches by streaming service. Instead of joining at read time, every liked title and every match document in Firestore carries a flat list of provider names, so the filter is a single Firestore query. The cost is writes: an availability update touches the user's copy and every friend's copy of the match. There's a TODO in my code that says exactly that.

**Video in a card deck.** Each card gets its own `YoutubePlayerController`, keyed by trailer ID, and pauses as soon as it leaves view. I also had to turn off hybrid composition on the player because it caused frame rendering issues.

**Matches are the easy part technically.** A match is a document under the friendship (`friends/{id}/matches/{titleId}`), and it's deleted if someone takes back their yes. The hard part is product: how many cards someone swipes before their first match.

Happy to go into any of it. The code isn't open source, but I'll answer anything about the architecture.

(Disclosure: I'm the developer. It's free if you want to see it: https://reelmatch.app)
```

---

## Flutter Community on Medium

A longer version of the build post. Write it on your own Medium account first,
then submit it to the Flutter Community publication through the submission
process on their Medium page. Link to reelmatch.app once in the intro and once
in your author bio.

**Title and subtitle:**

```text
Building a swipeable trailer deck in Flutter
YouTube players, TMDB and Firestore in a production app, three years in
```

**Outline:**

1. The problem: two people, one evening, forty minutes of scrolling. Why
   trailers instead of posters.
2. The stack: Flutter 3.27, Provider, Firebase Auth and Firestore, TMDB,
   youtube_player_flutter, appinio_swiper, RevenueCat.
3. Filling the deck: one TMDB call per title with `append_to_response`
   (videos, credits, watch/providers, release_dates).
4. Playing video in a swipe deck: a controller per card keyed by trailer ID,
   pausing off-screen cards, and why hybrid composition is off.
5. Matching in Firestore: match documents under each friendship, and cleaning
   up when someone takes back a yes.
6. Denormalizing streaming providers so the Pro filter is one query, and what
   it costs in writes.
7. Keeping availability fresh: re-fetching titles that come back empty.
8. What I'd do differently.

**Opening paragraph:**

```text
Most "we can't agree what to watch" arguments aren't about genre. They're about tone, and thirty seconds of trailer settles that faster than any poster or synopsis. That idea became ReelMatch, a Flutter app where everyone swipes through trailers on their own phone and the app shows the titles they all said yes to. After three years in production on iOS and Android, here's how the pieces fit together, and what I'd change.
```

---

## Reddit answers

Reddit threads were cited in every AI Overview tested for this category.
Answer questions that already exist ("how do you decide what to watch with
your partner") rather than starting threads. Lead with advice that works
without the app.

- **English subs:** r/movies, r/netflix, r/television, r/AppHookup,
  r/androidapps, r/iosapps. Search each for "what to watch" questions from the
  last month.
- **Spanish:** search Reddit for "qué película ver con mi pareja" and "qué
  ver" threads in Spanish-language subreddits, and check each sub's rules
  first.
- Adapt each answer to the thread. Pasting the same text everywhere gets
  flagged as spam.
- Leave out links unless the sub allows them. The app name is enough.

**English, couples thread:**

```text
Full disclosure, I built an app for this, so weigh that. But the method works without any app: each of you writes down three things you'd actually watch tonight without showing the other, and you only pick from what overlaps. If nothing overlaps, each person crosses off one of the other's picks and you choose from what's left. Deciding by mood (funny, tense, easy) instead of genre helps a lot too.

If you want it done for you, mine's called ReelMatch: you both swipe through trailers on your own phones and it shows the titles you both said yes to. Free on iOS and Android.
```

**English, group or friends thread:**

```text
Disclosure: I made a movie-picking app, so bias noted. What works for groups is collecting picks privately before anyone gets together. Everyone messages three titles, anything that shows up twice wins, everyone gets one secret veto, and you vote on the rest. Asking the whole room at once is what makes it take forever.

ReelMatch does this automatically if you want: everyone swipes trailers during the week and it keeps what the whole group said yes to. Free on iOS and Android.
```

**Spanish, pareja:**

```text
Aviso: yo hice una app para esto, así que tómalo en cuenta. Pero el método funciona sin app: cada uno anota tres películas que sí vería hoy, sin enseñárselas al otro, y eligen solo entre las que coinciden. Si no coincide ninguna, cada uno tacha una opción del otro y deciden por el tono (reír, suspenso, algo ligero) en lugar del género.

Si lo quieres automático, la mía se llama ReelMatch: cada quien desliza tráilers en su teléfono y te muestra los títulos que a los dos les gustaron. Es gratis en iPhone y Android. La app por ahora está en inglés, pero es muy visual.
```

**Spanish, recommendation-list thread** (only where the sub allows links and
someone asked for recommendations):

```text
Aviso: tengo una app de recomendaciones, así que tómalo con calma. Unas que casi siempre funcionan en pareja, aunque tengan gustos distintos: Entre navajas y secretos (2019), Parásitos (2019) y Palm Springs (2020). Los misterios y las comedias suelen ser terreno común.

Hice una lista más larga, ordenada por plan de la noche, aquí: https://reelmatch.app/es/guias/peliculas-para-ver-en-pareja
```

---

## Regional press

AI Overviews cite local TV lifestyle segments about a competitor (see
link-building.md §7), and almost nobody pitches these. Send one personalized
email per outlet, never a bulk send.

- **English:** lifestyle and consumer-tech desks at regional TV affiliates,
  plus Irish and German outlets where Digital Space Agency is known.
- **Spanish:** tech and lifestyle sections at Mexican and Spanish outlets
  (for example Xataka México, Hipertextual, national newspapers' tech
  sections). Find the right writer's byline before emailing.
- The demo video (`JTdq1PCcmhQ`) shows "swipe right ... match with friends" as
  on-screen text. Send it if you're comfortable, or wait for a new clip.

**English pitch:**

```text
Subject: A small app that ends the "what should we watch?" standoff

Hi [name],

Most households have the same argument several times a week: two people, one evening, and forty minutes of scrolling before anyone presses play.

I build ReelMatch, a free app that fixes that. Everyone swipes through movie and TV trailers on their own phone, and the app shows the titles they all said yes to, so there's nothing left to negotiate. It works for couples, friend groups and families, and it has been downloaded more than 10,000 times on Google Play.

[Local angle, if pitching a local outlet: I'm based in [city], and ...]

It demos in about 30 seconds on camera. Here's a short clip: https://youtu.be/JTdq1PCcmhQ
I'm happy to do a quick screen-share walkthrough or send footage if that's easier.

Thanks for reading,
David Miller
Digital Space Agency · reelmatch.app
```

**Spanish pitch:**

```text
Asunto: Una app gratuita para dejar de discutir qué ver

Hola, [nombre]:

En casi todas las casas pasa lo mismo varias veces por semana: dos personas, una noche libre y cuarenta minutos buscando qué ver antes de darle play.

Desarrollo ReelMatch, una app gratuita para iPhone y Android que resuelve eso. Cada persona desliza tráilers de películas y series en su teléfono, y la app muestra solo los títulos que a todos les gustaron. Sirve en pareja, con amigos o en familia, y ya tiene más de 10 mil descargas en Google Play.

Acabamos de lanzar el sitio en español (reelmatch.app/es), con guías como "Películas para ver en pareja". Una aclaración para que no haya sorpresas: por ahora la interfaz de la app está en inglés, aunque es muy visual.

Si les interesa para una nota o una recomendación, con gusto les mando capturas, un video corto o una demostración por videollamada.

Gracias por leer,
David Miller
reelmatch.app
```

---

## Roundup writers

Articles like "best apps for movie night" are exactly what AI answers quote.
Email whoever holds the byline and mention something specific from their
article.

**Searches to find targets:**

```text
"best apps" "movie night" 2026 -site:reddit.com
"apps for couples" "what to watch" 2026
intitle:best intitle:apps "what to watch" 2026
"mejores apps" "elegir película" 2026
"apps para ver películas en pareja"
intitle:apps "qué ver" pareja OR amigos 2026
```

**English outreach:**

```text
Subject: ReelMatch for your movie night apps roundup

Hi [name],

Your article "[title]" came up while I was researching this category. The part about [specific point] was spot on.

I build ReelMatch, which fits the same slot with a different approach: instead of poster grids, everyone swipes through actual trailers on their own phone and sees the titles they all said yes to. Most disagreements about what to watch are really about tone, and thirty seconds of trailer settles that faster than a synopsis. It works for couples and groups, and Pro adds streaming-service filters and instant launch on a smart TV.

It's free on iOS and Android, with more than 10,000 downloads on Google Play.

If it's a fit for your next update, I'm happy to send screenshots or answer questions. If it isn't, no follow-up from me.

David Miller
reelmatch.app
```

**Spanish outreach:**

```text
Asunto: ReelMatch para su lista de apps para elegir qué ver

Hola, [nombre]:

Encontré su artículo "[título]" mientras investigaba esta categoría, y me gustó mucho la parte sobre [punto específico].

Desarrollo ReelMatch, que ocupa ese mismo espacio con un enfoque distinto: en lugar de pósters, cada persona desliza tráilers en su teléfono y la app muestra los títulos que a todos les gustaron. Casi siempre, cuando no se ponen de acuerdo, es por el tono, y treinta segundos de tráiler lo resuelven más rápido que una sinopsis.

Es gratis en iPhone y Android y tiene más de 10 mil descargas en Google Play. Por ahora la app está en inglés, pero el sitio y las guías ya están en español: reelmatch.app/es

Si les sirve para una actualización, con gusto les mando capturas. Si no, no les vuelvo a escribir.

David Miller
reelmatch.app
```

---

## Skipped, and why

| Target | Reason |
|---|---|
| Awesome Flutter (GitHub) | Its only apps section is "Open Source Apps". ReelMatch is closed source, so a pull request would be rejected. |
| Flutter Awesome | Mostly features open-source GitHub projects. Only worth trying if they accept closed-source apps when you check. |
| Flutter Gems | Lists packages, not apps. |
| Paid directories and listicles | Low-value links, and against the "never pay for listings" rule. |

_Figures as of 23 Sep 2026: 10K+ Google Play downloads, app on the stores
since 2023, app interface in English only._
