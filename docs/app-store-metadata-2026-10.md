# App Store Connect metadata: next iOS release (Oct 2026)

Paste into App Store Connect → ReelMatch → the new version → App Information /
version page. The live listing is still 1.8.10 (23 Jun 2026) as "ReelMatch:
Movie Discovery", with 2.7★ from 3 ratings. Character counts are checked.

No dating-app wording (no "Tinder", "date night", "match with friends",
"perfect match", "swipe right/left"). The movie is what matches, not people.

## English (U.S.)

**Name** (24/30)

```
ReelMatch: What to Watch
```

**Subtitle** (28/30)

```
Pick Movies & Shows Together
```

**Keywords** (100/100). Comma-separated, no spaces, no words already in name or subtitle.

```
matcher,match,couple,friends,group,family,night,film,tv,series,trailer,decide,streaming,swipe,picker
```

**Promotional text** (163/170). Can be changed any time without a new build.

```
Can't agree on what to watch? Everyone swipes trailers on their own phone and ReelMatch shows the movies and shows you all said yes to. Free on iPhone and Android.
```

**Description**

```
Stop scrolling. Start watching.

ReelMatch helps couples, friends and families agree on a movie or show in minutes. Everyone swipes through trailers on their own phone, and ReelMatch shows you the titles you all said yes to. No more 40-minute debates, no more "I don't mind, you pick".

WHY TRAILERS
Most "we can't agree" moments are really about tone. Thirty seconds of trailer settles that faster than a poster or a synopsis.

HOW IT WORKS
• Add your partner, friends or family by their handle
• Swipe yes or skip on movie and TV trailers
• See the titles everyone said yes to, and press play

FEATURES
• QuickMatch: swipe together in real time with one person
• Friends: see what you and each friend both want to watch
• Liked list: keep every title you said yes to in one place
• Works for two people or a whole group
• iPhone and Android users can use it together
• Covers titles on Netflix, Prime Video, Disney+, Hulu, Apple TV+, Max and more

REELMATCH PRO
• Filter by your streaming services and favorite genres
• Launch what you picked straight on your smart TV

ReelMatch doesn't stream anything itself. It helps you decide what to watch on the services you already have. Movie and TV data from TMDB, trailers from YouTube.
```

**What's New** (adjust to what's actually switched on in Remote Config)

```
• Share a "You both said yes" card when you and a friend agree on a movie
• Easier ways to invite friends to ReelMatch
• Smoother swiping and bug fixes
```

## Spanish (Mexico) and Spanish (Spain)

The US App Store also indexes es-MX keywords, so this helps US Spanish speakers too.

**Name** (25/30)

```
ReelMatch: Qué ver juntos
```

**Subtitle** (28/30)

```
Películas y series en pareja
```

**Keywords** (95/100)

```
movie,match,matcher,amigos,familia,grupo,elegir,decidir,noche,cine,trailer,deslizar,tv,plan,app
```

**Promotional text** (154/170)

```
¿No se ponen de acuerdo? Cada quien desliza tráilers en su teléfono y ReelMatch les muestra las películas y series a las que todos dijeron que sí. Gratis.
```

**Description**

```
Deja de buscar. Empieza a ver.

ReelMatch te ayuda a elegir qué película o serie ver en pareja, con amigos o en familia. Cada quien desliza tráilers en su teléfono y ReelMatch les muestra los títulos a los que todos dijeron que sí. Se acabaron las discusiones de 40 minutos.

CÓMO FUNCIONA
• Agrega a tu pareja, amigos o familia con su nombre de usuario
• Desliza sí o no en tráilers de películas y series
• Vean los títulos que a todos les gustan y denle play

FUNCIONES
• QuickMatch: deslicen juntos en tiempo real
• Amigos: mira qué quieren ver tú y cada amigo
• Lista de favoritos con todo lo que te gustó
• Funciona para dos personas o para un grupo
• Personas con iPhone y Android pueden usarla juntas

REELMATCH PRO
• Filtra por tus plataformas de streaming y géneros favoritos
• Abre lo que eligieron directamente en tu smart TV

Por ahora la app está en inglés, pero es muy visual. ReelMatch no transmite contenido: te ayuda a decidir qué ver en las plataformas que ya tienes.
```

## When submitting

1. **Ratings summary:** on the version page choose to **reset the summary rating** for this release. The current 2.7★ is from only 3 ratings, and the in-app review prompt in this build should replace it quickly. Google Play already shows 5.0★ from 11 since the prompt shipped on Android.
2. **Screenshots:** the press-kit set (`public/images/press/`) shows the current UI if the store screenshots are older than 1.14.
3. Include the invite-link fix (ReelMatchAI #279) and Associated Domains (#228) in this build if they're merged, so `invite_links_enabled` can be switched on afterward.
