/**
 * Movie list pages ("funny movies for teens", "sleepover movies", ...).
 *
 * Each page targets a search with real demand across the US, UK, Canada and
 * Australia (OpenSEO, 12 Oct 2026) and is hand-curated: the copy and the
 * picks are chosen here, and scripts/build-collections.ts fills in images,
 * US ratings and descriptions from TMDB into collectionMovies.json.
 */

export type Pick = [title: string, year: number];

export type Collection = {
  slug: string;
  lang: "en" | "es";
  metaTitle: string;
  description: string;
  h1: string;
  intro: string[];
  sections: { heading: string; text: string; picks: Pick[] }[];
  howTo: string[];
  faqs: { question: string; answer: string }[];
  /** Related guide slugs (same language). */
  related: string[];
  /** Generator page to suggest at the end. */
  generator: string;
  /** Slug of the same page in the other language, for hreflang. */
  translation?: string;
  published: string;
  updated: string;
};

export const collectionBase = { en: "/movies", es: "/es/peliculas" } as const;
export const collectionPath = (c: Collection) => `${collectionBase[c.lang]}/${c.slug}`;

const appFaq = {
  question: "Is there an app to help pick a movie together?",
  answer:
    "Yes. In ReelMatch everyone swipes through trailers on their own phone and the app shows the movies you all said yes to. It's free on iPhone and Android.",
};

export const collections: Collection[] = [
  {
    slug: "funny-movies-for-teens",
    lang: "en",
    metaTitle: "Funny Movies for Teens: 20 Comedies Teens Actually Like",
    description:
      "20 funny movies for teens, from high-school comedies to action-packed laughs and classics, with US ratings and tips for picking one the whole group likes.",
    h1: "Funny movies for teens: 20 comedies they'll actually laugh at",
    intro: [
      "Finding a comedy a teenager will sit through is harder than it sounds. Too young and it's cringe, too crude and it's awkward with the family in the room. These 20 picks land in between: sharp, quotable and mostly rated PG-13.",
      "They're grouped by the kind of funny, from high-school comedies to big action-comedy crowd-pleasers, so you can pick by mood instead of scrolling for half an hour.",
    ],
    sections: [
      {
        heading: "High-school comedies",
        text: "Smart, quotable and about the stuff teens actually deal with.",
        picks: [["Mean Girls", 2004], ["Clueless", 1995], ["10 Things I Hate About You", 1999], ["Easy A", 2010], ["Ferris Bueller's Day Off", 1986], ["Love, Simon", 2018]],
      },
      {
        heading: "Action comedies",
        text: "Big laughs with a bit of adventure, good for a group with mixed tastes.",
        picks: [["Jumanji: Welcome to the Jungle", 2017], ["Free Guy", 2021], ["Men in Black", 1997], ["Thor: Ragnarok", 2017], ["Scott Pilgrim vs. the World", 2010]],
      },
      {
        heading: "Classics teens still love",
        text: "Older movies that hold up, and that parents enjoy rewatching too.",
        picks: [["Back to the Future", 1985], ["Ghostbusters", 1984], ["The Princess Bride", 1987], ["School of Rock", 2003], ["Napoleon Dynamite", 2004]],
      },
      {
        heading: "Feel-good and offbeat",
        text: "Lighter picks with plenty of heart.",
        picks: [["Hairspray", 2007], ["The Mitchells vs. the Machines", 2021], ["Enola Holmes", 2020], ["The Lego Movie", 2014]],
      },
    ],
    howTo: [
      "Let your teen suggest three titles first and add one of your own.",
      "Everyone gets one veto, no explanation needed.",
      "Watch the trailers for the last two. Humor shows in two minutes far better than in a poster.",
    ],
    faqs: [
      {
        question: "What are good funny movies for teens?",
        answer:
          "Mean Girls (2004), Clueless (1995), Jumanji: Welcome to the Jungle (2017), Free Guy (2021) and School of Rock (2003) are reliable picks that most teens enjoy.",
      },
      {
        question: "What are funny PG-13 movies for teenagers?",
        answer:
          "Mean Girls, Easy A, 10 Things I Hate About You, Thor: Ragnarok and Scott Pilgrim vs. the World are all rated PG-13 and genuinely funny.",
      },
      appFaq,
    ],
    related: ["movies-to-watch-with-teens", "movies-to-watch-with-friends", "feel-good-movies"],
    generator: "/random-movie-generator",
    published: "2026-10-12",
    updated: "2026-10-12",
  },
  {
    slug: "funny-movies-for-family",
    lang: "en",
    metaTitle: "Funny Movies for Family Night: 20 Comedies for All Ages",
    description:
      "20 funny family movies everyone can laugh at, from animated favorites to live-action comedies, with US ratings and a quick way to pick one together.",
    h1: "Funny movies for family night: 20 comedies for all ages",
    intro: [
      "The best funny family films work on two levels: the kids laugh at the jokes, and the grown-ups laugh at the jokes the kids don't get. Every movie here is rated G or PG and has been a family favorite for years.",
      "Start with the animated picks for younger kids, or jump to the last section for movies that are best once the kids are a bit older.",
    ],
    sections: [
      {
        heading: "Animated favorites",
        text: "Safe bets for little kids that adults genuinely enjoy too.",
        picks: [["Toy Story", 1995], ["Shrek", 2001], ["Monsters, Inc.", 2001], ["Zootopia", 2016], ["The Incredibles", 2004], ["Despicable Me", 2010], ["Ratatouille", 2007], ["The Emperor's New Groove", 2000]],
      },
      {
        heading: "Live-action comedies for all ages",
        text: "Warm, silly and easy to watch together.",
        picks: [["Paddington 2", 2017], ["Home Alone", 1990], ["The Parent Trap", 1998], ["Freaky Friday", 2003], ["Matilda", 1996], ["Honey, I Shrunk the Kids", 1989]],
      },
      {
        heading: "For older kids and grown-ups",
        text: "A bit more adventure, still rated PG.",
        picks: [["Back to the Future", 1985], ["Ghostbusters", 1984], ["The Princess Bride", 1987], ["Night at the Museum", 2006], ["Jumanji", 1995], ["Galaxy Quest", 1999]],
      },
    ],
    howTo: [
      "Start from the youngest viewer's age.",
      "Everyone suggests one title, and everyone gets one veto.",
      "Keep it under two hours on a school night, and save the longer ones for the weekend.",
    ],
    faqs: [
      {
        question: "What are good funny movies for the whole family?",
        answer:
          "Paddington 2 (2017), Toy Story (1995), Shrek (2001), Home Alone (1990) and The Incredibles (2004) are some of the best-loved funny family films.",
      },
      {
        question: "What are funny family movies for older kids?",
        answer:
          "Back to the Future (1985), Ghostbusters (1984), The Princess Bride (1987) and Galaxy Quest (1999) are all rated PG and work well once kids are around 10.",
      },
      appFaq,
    ],
    related: ["family-movies-to-watch", "movies-to-watch-with-teens", "family-christmas-movies"],
    generator: "/random-movie-generator",
    translation: "peliculas-de-comedia-para-ver-en-familia",
    published: "2026-10-12",
    updated: "2026-10-12",
  },
  {
    slug: "sleepover-movies",
    lang: "en",
    metaTitle: "Sleepover Movies: 20 Picks for a Night In With Friends",
    description:
      "20 sleepover movies for teens and tweens: comedies, a few gentle scares, swoony picks and sing-along classics, with ratings and a way to vote on one fast.",
    h1: "Sleepover movies: 20 picks for a night in with friends",
    intro: [
      "A good sleepover movie is one everyone can talk over, quote and scream at together. These 20 are all rated G, PG or PG-13, so they work for most groups of tweens and teens.",
      "They're grouped by the vibe of the night: laughing until midnight, a little scary, swoony, or singing along.",
    ],
    sections: [
      {
        heading: "Laugh until midnight",
        text: "Comedies that are even funnier with friends.",
        picks: [["Mean Girls", 2004], ["13 Going on 30", 2004], ["Legally Blonde", 2001], ["Pitch Perfect", 2012], ["She's the Man", 2006], ["Freaky Friday", 2003]],
      },
      {
        heading: "A little scary",
        text: "Enough to make everyone jump, not enough to keep anyone up all night.",
        picks: [["Hocus Pocus", 1993], ["Coraline", 2009], ["Happy Death Day", 2017], ["A Quiet Place", 2018], ["Five Nights at Freddy's", 2023]],
      },
      {
        heading: "Swoony picks",
        text: "Romance and rom-coms for when the group wants something sweet.",
        picks: [["To All the Boys I've Loved Before", 2018], ["The Princess Diaries", 2001], ["A Cinderella Story", 2004], ["10 Things I Hate About You", 1999], ["Mamma Mia!", 2008]],
      },
      {
        heading: "Sing-along classics",
        text: "Older favorites that are made for a group.",
        picks: [["Grease", 1978], ["Dirty Dancing", 1987], ["Clueless", 1995], ["The Parent Trap", 1998]],
      },
    ],
    howTo: [
      "Agree on the vibe first: funny, scary or swoony.",
      "Everyone suggests one movie in secret, then everyone gets one veto.",
      "Watch the trailers of the last two and vote. Fastest way to stop the debate and start the movie.",
    ],
    faqs: [
      {
        question: "What are good sleepover movies?",
        answer:
          "Mean Girls (2004), Hocus Pocus (1993), 13 Going on 30 (2004), Pitch Perfect (2012) and To All the Boys I've Loved Before (2018) are sleepover favorites.",
      },
      {
        question: "What are good scary movies for a sleepover?",
        answer:
          "Hocus Pocus and Coraline are gentle enough for tweens; Happy Death Day, A Quiet Place and Five Nights at Freddy's are scarier but still rated PG-13.",
      },
      appFaq,
    ],
    related: ["movies-to-watch-with-friends", "movies-to-watch-with-teens", "scary-movies-to-watch-with-friends"],
    generator: "/random-movie-generator",
    published: "2026-10-12",
    updated: "2026-10-12",
  },
  {
    slug: "romantic-movies-for-teens",
    lang: "en",
    metaTitle: "Romantic Movies for Teens: 20 Sweet Love Stories",
    description:
      "20 romantic movies for teens, from teen love stories and feel-good rom-coms to classics and bittersweet picks, all rated G, PG or PG-13.",
    h1: "Romantic movies for teens: 20 sweet love stories",
    intro: [
      "Teen romance movies are at their best when they feel honest: first crushes, awkward moments and big gestures. All 20 picks here are rated G, PG or PG-13.",
      "They're grouped by mood, from light rom-coms to classics and a few that will need tissues.",
    ],
    sections: [
      {
        heading: "Teen love stories",
        text: "First love, high school and everything that comes with it.",
        picks: [["To All the Boys I've Loved Before", 2018], ["The Fault in Our Stars", 2014], ["Love, Simon", 2018], ["10 Things I Hate About You", 1999], ["A Walk to Remember", 2002], ["Five Feet Apart", 2019]],
      },
      {
        heading: "Feel-good rom-coms",
        text: "Light, funny and guaranteed to leave everyone smiling.",
        picks: [["13 Going on 30", 2004], ["The Princess Diaries", 2001], ["Enchanted", 2007], ["Crazy Rich Asians", 2018], ["Clueless", 1995]],
      },
      {
        heading: "Classic love stories",
        text: "The big romances everyone should see at least once.",
        picks: [["Pride & Prejudice", 2005], ["Titanic", 1997], ["The Notebook", 2004], ["Romeo + Juliet", 1996]],
      },
      {
        heading: "Magical and bittersweet",
        text: "Romance with a twist, and a few that hit hard.",
        picks: [["Your Name.", 2016], ["Edward Scissorhands", 1990], ["The Age of Adaline", 2015], ["Me Before You", 2016], ["Midnight in Paris", 2011]],
      },
    ],
    howTo: [
      "Decide the mood: laugh, swoon or cry.",
      "Pick two from that section and watch both trailers.",
      "Go with the one everyone's still talking about after the trailer ends.",
    ],
    faqs: [
      {
        question: "What are good romantic movies for teens?",
        answer:
          "To All the Boys I've Loved Before (2018), The Fault in Our Stars (2014), 10 Things I Hate About You (1999), 13 Going on 30 (2004) and Pride & Prejudice (2005) are popular picks.",
      },
      {
        question: "Are these romantic movies appropriate for teenagers?",
        answer:
          "Every movie on this list is rated G, PG or PG-13 in the US. Ratings differ by country, so check the one on your streaming service and watch the trailer first.",
      },
      appFaq,
    ],
    related: ["movies-to-watch-with-teens", "movies-to-watch-as-a-couple", "feel-good-movies"],
    generator: "/random-movie-generator",
    published: "2026-10-12",
    updated: "2026-10-12",
  },
  {
    slug: "scary-movies-for-teens",
    lang: "en",
    metaTitle: "Scary Movies for Teens: 20 PG-13 Horror Picks",
    description:
      "20 scary movies for teens, all rated PG or PG-13: first-scare favorites, jump-scare hits, tense thrillers and classics, sorted from mild to properly scary.",
    h1: "Scary movies for teens: 20 horror picks rated PG or PG-13",
    intro: [
      "You don't need an R rating to be scared. These 20 horror movies are all rated PG or PG-13, which makes them a good fit for teens, sleepovers and Halloween nights with mixed ages.",
      "They're sorted from mild to properly scary, so you can match the movie to the group.",
    ],
    sections: [
      {
        heading: "First scares",
        text: "Spooky fun for younger teens or anyone easing into horror.",
        picks: [["Coraline", 2009], ["Hocus Pocus", 1993], ["Beetlejuice", 1988], ["Monster House", 2006], ["Goosebumps", 2015]],
      },
      {
        heading: "Jump-scare hits",
        text: "Big scares, fun to watch with a group.",
        picks: [["Insidious", 2011], ["The Ring", 2002], ["Five Nights at Freddy's", 2023], ["Happy Death Day", 2017], ["M3GAN", 2022]],
      },
      {
        heading: "Tense thrillers",
        text: "Less gore, more holding your breath.",
        picks: [["A Quiet Place", 2018], ["Signs", 2002], ["The Others", 2001], ["10 Cloverfield Lane", 2016], ["Split", 2017]],
      },
      {
        heading: "Classics",
        text: "The older movies that started it all, still effective.",
        picks: [["Jaws", 1975], ["Poltergeist", 1982], ["Gremlins", 1984], ["The Sixth Sense", 1999], ["Tremors", 1990]],
      },
    ],
    howTo: [
      "Ask the group how scared they want to be: spooky, jumpy or tense.",
      "Pick from that section and watch the trailer first. It's the quickest way to check the scare level.",
      "Agree on a pause rule before you start, so nobody stops it at the scariest moment.",
    ],
    faqs: [
      {
        question: "What are good scary movies for teens?",
        answer:
          "A Quiet Place (2018), Insidious (2011), The Ring (2002), Happy Death Day (2017) and Coraline (2009) are popular PG and PG-13 picks.",
      },
      {
        question: "What's the scariest PG-13 horror movie?",
        answer:
          "Insidious (2011), The Ring (2002) and The Others (2001) are often called the scariest PG-13 horror movies.",
      },
      appFaq,
    ],
    related: ["scary-movies-to-watch-with-friends", "movies-to-watch-with-teens", "family-movies-to-watch"],
    generator: "/random-horror-movie-generator",
    published: "2026-10-12",
    updated: "2026-10-12",
  },
  {
    slug: "animated-movies-for-adults",
    lang: "en",
    metaTitle: "Animated Movies for Adults: 20 Films Worth Watching",
    description:
      "20 animated movies for adults, from Studio Ghibli and anime to stop-motion, big-feelings Pixar and bold experiments. Proof animation isn't just for kids.",
    h1: "Animated movies for adults: 20 films worth watching",
    intro: [
      "Animation is a format, not a genre. Some of the most moving, inventive and grown-up films of the last few decades happen to be animated, and plenty of them aren't made for kids at all.",
      "This list mixes anime, stop-motion, big-feelings Pixar and a few bold experiments. A handful are rated R; we've noted the rating on each.",
    ],
    sections: [
      {
        heading: "Studio Ghibli and anime",
        text: "From gentle and beautiful to dark and mind-bending.",
        picks: [["Spirited Away", 2001], ["Princess Mononoke", 1997], ["Your Name.", 2016], ["Akira", 1988], ["Perfect Blue", 1998]],
      },
      {
        heading: "Stop-motion worlds",
        text: "Handmade, odd and often very funny.",
        picks: [["Fantastic Mr. Fox", 2009], ["Isle of Dogs", 2018], ["Anomalisa", 2015], ["Coraline", 2009], ["Mary and Max", 2009]],
      },
      {
        heading: "Big feelings",
        text: "The ones that make adults cry more than kids.",
        picks: [["Up", 2009], ["Inside Out", 2015], ["Soul", 2020], ["WALL·E", 2008], ["Grave of the Fireflies", 1988]],
      },
      {
        heading: "Bold and different",
        text: "Animation that does things live action can't.",
        picks: [["Spider-Man: Into the Spider-Verse", 2018], ["Persepolis", 2007], ["Waltz with Bashir", 2008], ["Puss in Boots: The Last Wish", 2022], ["Tokyo Godfathers", 2003]],
      },
    ],
    howTo: [
      "Pick by mood: beautiful, funny, emotional or something completely new.",
      "Check the rating if you're watching with others; a few here are rated R.",
      "Watch the trailer. The art style alone usually tells you if it's for you.",
    ],
    faqs: [
      {
        question: "What are the best animated movies for adults?",
        answer:
          "Spirited Away (2001), Princess Mononoke (1997), Grave of the Fireflies (1988), Spider-Man: Into the Spider-Verse (2018) and Fantastic Mr. Fox (2009) are among the most acclaimed.",
      },
      {
        question: "Are there R-rated animated movies?",
        answer:
          "Yes. Akira (1988), Perfect Blue (1998), Anomalisa (2015) and Waltz with Bashir (2008) are all aimed at adults.",
      },
      appFaq,
    ],
    related: ["movies-to-watch-as-a-couple", "feel-good-movies", "movies-to-watch-with-friends"],
    generator: "/random-movie-generator",
    published: "2026-10-12",
    updated: "2026-10-12",
  },
  {
    slug: "action-movies-for-family",
    lang: "en",
    metaTitle: "Action Movies for Family Night: 20 Picks for All Ages",
    description:
      "20 action movies for family night, from superheroes and big adventures to animated action and picks for younger viewers, with US ratings for each.",
    h1: "Action movies for family night: 20 picks for all ages",
    intro: [
      "Action movies are some of the easiest to watch as a family: big set pieces, clear heroes and plenty to talk about afterward. Every pick here is rated PG or PG-13.",
      "Start with the animated section for younger kids, or go straight to the superheroes if everyone's old enough.",
    ],
    sections: [
      {
        heading: "Superheroes",
        text: "Crowd-pleasers for kids around 10 and up.",
        picks: [["The Avengers", 2012], ["Spider-Man: No Way Home", 2021], ["Guardians of the Galaxy", 2014], ["Black Panther", 2018], ["The Incredibles", 2004]],
      },
      {
        heading: "Big adventures",
        text: "Classic adventure movies that every generation enjoys.",
        picks: [["Star Wars", 1977], ["Raiders of the Lost Ark", 1981], ["Jurassic Park", 1993], ["Harry Potter and the Philosopher's Stone", 2001], ["Pirates of the Caribbean: The Curse of the Black Pearl", 2003]],
      },
      {
        heading: "Animated action",
        text: "Action and adventure that younger kids can enjoy too.",
        picks: [["Spider-Man: Into the Spider-Verse", 2018], ["How to Train Your Dragon", 2010], ["Kung Fu Panda", 2008], ["Big Hero 6", 2014], ["Puss in Boots: The Last Wish", 2022]],
      },
      {
        heading: "Fun for younger viewers",
        text: "Lighter action with plenty of laughs.",
        picks: [["The Goonies", 1985], ["Back to the Future", 1985], ["Jumanji: Welcome to the Jungle", 2017], ["The Mummy", 1999], ["Sonic the Hedgehog", 2020]],
      },
    ],
    howTo: [
      "Start from the youngest viewer and check the rating.",
      "Everyone suggests one movie, and everyone gets one veto.",
      "If it's part of a series, start with the first one so nobody feels lost.",
    ],
    faqs: [
      {
        question: "What are good action movies for families?",
        answer:
          "The Incredibles (2004), Star Wars (1977), Jurassic Park (1993), How to Train Your Dragon (2010) and Spider-Man: Into the Spider-Verse (2018) are family favorites.",
      },
      {
        question: "What action movies are OK for younger kids?",
        answer:
          "The animated picks, such as Kung Fu Panda, Big Hero 6 and How to Train Your Dragon, are rated PG and work well for kids from about 6.",
      },
      appFaq,
    ],
    related: ["family-movies-to-watch", "movies-to-watch-with-teens", "movies-to-watch-with-friends"],
    generator: "/random-movie-generator",
    published: "2026-10-12",
    updated: "2026-10-12",
  },
  {
    slug: "peliculas-de-comedia-para-ver-en-familia",
    lang: "es",
    metaTitle: "Películas de comedia para ver en familia: 20 ideas",
    description:
      "20 películas de comedia para ver en familia, de animadas a clásicos con actores, para reír todos juntos. Con clasificación y una forma rápida de elegir.",
    h1: "Películas de comedia para ver en familia: 20 ideas para reír juntos",
    intro: [
      "Las mejores comedias familiares funcionan en dos niveles: los niños se ríen con los chistes y los adultos con los que los niños no entienden. Todas las películas de esta lista tienen clasificación G o PG en Estados Unidos.",
      "Empieza por las animadas si hay niños pequeños, o ve directo a la última sección si ya son más grandes.",
    ],
    sections: [
      {
        heading: "Animadas favoritas",
        text: "Apuestas seguras para los más pequeños que los adultos también disfrutan.",
        picks: [["Toy Story", 1995], ["Shrek", 2001], ["Monsters, Inc.", 2001], ["Zootopia", 2016], ["The Incredibles", 2004], ["Despicable Me", 2010], ["Ratatouille", 2007], ["The Emperor's New Groove", 2000]],
      },
      {
        heading: "Comedias con actores para todas las edades",
        text: "Divertidas, tiernas y fáciles de ver juntos.",
        picks: [["Paddington 2", 2017], ["Home Alone", 1990], ["The Parent Trap", 1998], ["Freaky Friday", 2003], ["Matilda", 1996], ["Honey, I Shrunk the Kids", 1989]],
      },
      {
        heading: "Para niños más grandes y adultos",
        text: "Un poco más de aventura, todavía con clasificación PG.",
        picks: [["Back to the Future", 1985], ["Ghostbusters", 1984], ["The Princess Bride", 1987], ["Night at the Museum", 2006], ["Jumanji", 1995], ["Galaxy Quest", 1999]],
      },
    ],
    howTo: [
      "Empiecen por la edad del más pequeño.",
      "Cada quien propone un título y tiene un veto.",
      "Vean los tráilers de las dos finalistas: el humor se nota en dos minutos.",
    ],
    faqs: [
      {
        question: "¿Qué películas de comedia ver en familia?",
        answer:
          "Paddington 2 (2017), Toy Story (1995), Shrek (2001), Mi pobre angelito (1990) y Los Increíbles (2004) son de las comedias familiares más queridas.",
      },
      {
        question: "¿Qué comedias familiares hay para niños más grandes?",
        answer:
          "Volver al futuro (1985), Los cazafantasmas (1984), La princesa prometida (1987) y Jumanji (1995) funcionan muy bien a partir de los 10 años.",
      },
      {
        question: "¿Hay una app para elegir película en familia?",
        answer:
          "Sí. En ReelMatch cada persona desliza tráilers en su teléfono y la app muestra los títulos a los que todos dijeron que sí. Es gratis en iPhone y Android, y por ahora la interfaz está en inglés.",
      },
    ],
    related: ["peliculas-para-ver-en-familia", "peliculas-de-comedia", "peliculas-de-navidad-para-ver-en-familia"],
    generator: "/random-movie-generator",
    translation: "funny-movies-for-family",
    published: "2026-10-12",
    updated: "2026-10-12",
  },
];

export const collectionBySlug = (slug: string, lang: "en" | "es") =>
  collections.find((c) => c.slug === slug && c.lang === lang);
