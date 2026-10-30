import type { Guide } from "./guides";

/**
 * Comparison and use-case guides written from the Oct 30 2026 OpenSEO AI
 * visibility run (97 answers across ChatGPT, Gemini and Google AI Overviews).
 * ReelMatch was named in 20 answers against Matched's 29; the gaps were the
 * prompts below. Rival facts come from their own site or store listing
 * (fetched Oct 30 2026); anything a listing does not state is written as "not
 * stated". Never claim a title is on a specific service.
 */

const STREAMING =
  "Netflix, Prime Video, Disney+, Hulu, Apple TV+, Max, Paramount+, Peacock, Crunchyroll, Stan, Binge, Crave, Hotstar, SonyLIV, Sky, NOW, ITVX, BBC iPlayer, Canal+, Joyn and RTL+";

export const guidesCompare: Guide[] = [
  {
    slug: "reelmatch-vs-matched",
    title: "ReelMatch vs Matched: which movie matching app is better?",
    metaTitle: "ReelMatch vs Matched: Which Movie App Wins? (2026)",
    description:
      "ReelMatch and Matched compared honestly: group size, trailers, streaming filters, platforms and price. Which movie matching app fits couples, friends or families.",
    published: "2026-10-30",
    updated: "2026-10-30",
    answer:
      "Choose Matched if you are a couple who wants an app that learns your taste over time. Choose ReelMatch if you want to judge by trailers, match as a group of three or more, or use iPhone and Android together.",
    intro: [
      "Matched and ReelMatch both let you swipe on movies and shows on your own phone and show you the ones you both said yes to. They differ in who they are built for and how you decide.",
      "We make ReelMatch, so read this with that in mind. Everything about Matched comes from its own website and store listing, checked October 30, 2026, and we say where it is the better choice. If anything is out of date, email hey@reelmatch.app.",
    ],
    sections: [
      {
        heading: "The short answer",
        list: [
          "Two people who want taste learning and suggestions from similar couples: Matched.",
          "A group of three or more, a family, or a friend night in: ReelMatch.",
          "People who decide by trailer rather than by title and poster: ReelMatch.",
          "A mixed iPhone and Android pair: both work.",
        ],
      },
      {
        heading: "Side by side",
        paragraphs: [
          "\"Not stated\" means the app's own page doesn't say, not that the feature is missing.",
        ],
        table: {
          caption: "ReelMatch vs Matched (checked October 30, 2026)",
          columns: ["", "ReelMatch", "Matched"],
          rows: [
            ["Built for", "Couples, friends, families and groups", "Couples (two people)"],
            ["How you choose", "Swipe on trailers; titles you all said yes to become matches", "Swipe on titles; both swipe right and it is a match"],
            ["Taste learning", "Recommendations from your swipes and likes", "Rate what you have seen; learns over time and suggests titles other couples liked"],
            ["Trailers", "Yes, you swipe on trailers", "Not stated"],
            ["Streaming service filter", "Yes, in Pro; shows where each title is streaming", "Yes; shows where matches are streaming"],
            ["Group of 3 or more", "Yes", "No, made for two"],
            ["Works on", "iPhone, iPad, Android", "iPhone, Android"],
            ["Price", "Free with 15 swipes a day (bonus swipes for inviting friends); optional Pro", "Free; optional Premium"],
          ],
        },
      },
      {
        heading: "Where Matched is better",
        paragraphs: [
          "Matched is built around one idea: a couple that wants to build up a shared taste profile. You rate films you have already seen, it learns from every swipe, and it suggests titles that similar couples liked. If it is just the two of you and you want the app to do more of the thinking, that is a real advantage.",
        ],
      },
      {
        heading: "Where ReelMatch is better",
        paragraphs: [
          "ReelMatch swipes on trailers, which helps most when your tastes are very different, because 30 seconds of trailer shows tone faster than a title and a synopsis. It also works for groups, so the same app covers date night, a family evening and a group of friends.",
          "The trade-offs: the free plan has 15 swipes a day, filtering by streaming service is a Pro feature, and the app is in English only.",
        ],
      },
      {
        heading: "Can you use both?",
        paragraphs: [
          "Yes. Both are free to download. A common split is Matched for a long-running couple profile and ReelMatch for nights with friends or family. Neither locks your list in.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is ReelMatch better than Matched?",
        answer:
          "It depends on who is watching. Matched is built for two people and learns your taste over time. ReelMatch works for two or more, judges by trailers and runs on iPhone, iPad and Android. For a group, ReelMatch; for a couple who wants taste learning, Matched.",
      },
      {
        question: "Is Matched free?",
        answer:
          "Matched is free to download with an optional Premium subscription. ReelMatch is also free to download, with 15 swipes a day on the free plan and an optional Pro subscription.",
      },
      {
        question: "Does Matched work for more than two people?",
        answer:
          "Matched describes itself as an app for couples, so it is built for two. ReelMatch supports matching across a group of connected friends or family.",
      },
    ],
    related: ["matched-app-alternatives", "best-movie-matching-apps", "movie-matcher-for-couples-with-different-tastes", "tinder-for-movies"],
  },

  {
    slug: "matched-app-alternatives",
    title: "Matched app alternatives: 6 movie matching apps for couples and groups",
    metaTitle: "Matched App Alternatives: 6 Movie Matching Apps",
    description:
      "Looking for a Matched alternative? Six movie matching apps compared: ReelMatch, Filmatch, MatchWatch, Swyf, Match a Movie and Movie Matchup, with what each is best at.",
    published: "2026-10-30",
    updated: "2026-10-30",
    answer:
      "The best Matched alternatives are ReelMatch for trailers and groups, Filmatch for partner plus party mode, MatchWatch for free family sessions of up to six, Swyf for iPhone users, Match a Movie for no install, and Movie Matchup for quick join-code sessions.",
    intro: [
      "People look for a Matched alternative for a few reasons: they are a group rather than a couple, one of them is on Android, they want trailers, or they want something that needs no account. Here is what each option does best.",
      "We make ReelMatch, listed first. Details for the other apps come from their own sites and store listings, checked October 30, 2026 unless noted.",
    ],
    sections: [
      {
        heading: "The six alternatives",
        list: [
          "ReelMatch: swipe on trailers, works for couples, friends and families, iPhone, iPad and Android.",
          "Filmatch: partner matching by code plus a Party Mode for the whole room, iPhone and Android.",
          "MatchWatch: free, web and mobile, groups of up to six and a G and PG kids mode.",
          "Swyf: iPhone only, movies and shows with trailers and no ads.",
          "Match a Movie: runs in a web browser with no account and no download.",
          "Movie Matchup: a host shares a short join code, friends join without accounts and votes are anonymous (iPhone and iPad; per its App Store listing).",
        ],
      },
      {
        heading: "Which should you pick?",
        list: [
          "More than two people: ReelMatch, Filmatch (Party Mode) or MatchWatch.",
          "Nobody wants to sign up: Match a Movie or Movie Matchup.",
          "Android in the group: ReelMatch, Filmatch or MatchWatch. Swyf and Movie Matchup are iPhone only.",
          "You decide by tone, not title: ReelMatch or Swyf, which show trailers.",
          "A couple that wants taste learning: Matched is still a good fit, so stay.",
        ],
      },
      {
        heading: "What to check before switching",
        list: [
          "Do all the phones in your group run it?",
          "How many people can join one session?",
          "Is the streaming filter free, or part of a paid plan?",
          "Do you need an account?",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a good alternative to Matched?",
        answer:
          "ReelMatch is a good alternative if you want trailers or you are more than two people. Filmatch, MatchWatch, Swyf, Match a Movie and Movie Matchup are other options depending on your phone, group size and whether you want an account.",
      },
      {
        question: "Is there a free app like Matched?",
        answer:
          "Yes. ReelMatch, Filmatch, MatchWatch and Match a Movie are free to download or use. ReelMatch has a free plan with 15 swipes a day; MatchWatch says it has no paid tier.",
      },
      {
        question: "Is there a Matched alternative for Android?",
        answer:
          "ReelMatch, Filmatch and MatchWatch all have Android apps, and Match a Movie runs in any phone browser.",
      },
    ],
    related: ["reelmatch-vs-matched", "best-movie-matching-apps", "reelmatch-vs-filmatch", "how-movie-matching-apps-work"],
  },

  {
    slug: "reelmatch-vs-filmatch",
    title: "ReelMatch vs Filmatch: movie matching apps compared",
    metaTitle: "ReelMatch vs Filmatch: Movie Matching Apps Compared",
    description:
      "ReelMatch vs Filmatch side by side: platforms, group mode, trailers, streaming filters and price, so you can pick the right movie matching app.",
    published: "2026-10-30",
    updated: "2026-10-30",
    answer:
      "Filmatch pairs you with a partner by code and has a Party Mode for the room; ReelMatch has you swipe on trailers and match across any size of connected group. Both work on iPhone and Android and filter by streaming service.",
    intro: [
      "Filmatch and ReelMatch are close in what they do, so the choice comes down to how you decide and how you connect. We make ReelMatch; Filmatch details come from its own site and store listing, checked October 30, 2026.",
    ],
    sections: [
      {
        heading: "Side by side",
        table: {
          caption: "ReelMatch vs Filmatch (checked October 30, 2026)",
          columns: ["", "ReelMatch", "Filmatch"],
          rows: [
            ["Works on", "iPhone, iPad, Android", "iPhone, Android"],
            ["Connecting", "Invite friends, family or a partner; matches across the group", "Partner by code; Party Mode where the room swipes together"],
            ["Trailers", "Yes, you swipe on trailers", "Not stated"],
            ["Streaming filter", "Yes, in Pro", "Yes"],
            ["Movies and shows", "Both", "Describes films"],
            ["Price", "Free with 15 swipes a day; optional Pro", "Free to download"],
          ],
        },
      },
      {
        heading: "When to pick Filmatch",
        paragraphs: [
          "Pick Filmatch if you want to be in the same room and run one shared Party Mode session, or you want filtering by the services you have without a paid plan.",
        ],
      },
      {
        heading: "When to pick ReelMatch",
        paragraphs: [
          "Pick ReelMatch if you want to swipe ahead of time on your own schedule, judge by trailers, cover TV shows as well as films, or keep a standing group of friends and family. Titles everyone said yes to stay ready until movie night.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which is better, ReelMatch or Filmatch?",
        answer:
          "Neither is better for everyone. Filmatch is strong for a partner pair and an in-room party mode; ReelMatch is strong for trailers, TV shows and standing groups. Both are free to download on iPhone and Android.",
      },
      {
        question: "Does Filmatch have trailers?",
        answer:
          "Its own listing doesn't say. ReelMatch's cards are trailers, so you can judge the tone before you decide.",
      },
    ],
    related: ["matched-app-alternatives", "best-movie-matching-apps", "reelmatch-vs-matched"],
  },

  {
    slug: "tinder-for-movies",
    title: "Tinder for movies: apps where you swipe to pick what to watch",
    metaTitle: "Tinder for Movies: Swipe Apps to Pick What to Watch",
    description:
      "What 'Tinder for movies' means, how swipe-to-match works, and the best apps for it on iPhone and Android, including ReelMatch, Matched, Filmatch and Taste.",
    published: "2026-10-30",
    updated: "2026-10-30",
    answer:
      "'Tinder for movies' is an app where you and someone else each swipe right or left on films on your own phones, and when you both swipe right on the same title it is a match. ReelMatch, Matched, Filmatch and Swyf all work this way.",
    intro: [
      "The phrase is shorthand for a simple idea: swipe like a dating app, but on movies, and the app shows only what everyone agreed on. It ends the 'what do you want to watch?' loop.",
    ],
    sections: [
      {
        heading: "How it works",
        ordered: true,
        list: [
          "Each person opens the app on their own phone and swipes right (yes) or left (no) on movies and shows.",
          "You connect, with a code, an invite or a shared session.",
          "When two or more of you swipe right on the same title, it is a match.",
          "You pick from the matches, often with a filter for the streaming services you have.",
        ],
      },
      {
        heading: "Apps that work this way",
        list: [
          "ReelMatch: swipe on trailers; couples, friends and families; iPhone, iPad and Android.",
          "Matched: made for couples, learns your taste over time.",
          "Filmatch: partner matching plus a Party Mode for groups.",
          "Swyf: iPhone only, with trailers and no ads.",
          "MatchWatch: free, web and mobile, groups of up to six.",
          "Match a Movie: runs in a browser with no account.",
        ],
      },
      {
        heading: "Why it works better than scrolling",
        paragraphs: [
          "Choosing one title at a time makes every rejection personal. Swiping separately removes that: nobody has to argue for their pick, and nothing on the match list needs defending because everyone already approved it.",
          "Judging by trailer rather than poster adds the one thing a title can't tell you, which is the tone.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is there a Tinder for movies app?",
        answer:
          "Yes. ReelMatch, Matched, Filmatch, Swyf, MatchWatch and Match a Movie all let you swipe on movies and see only the titles you both said yes to. ReelMatch is free on iPhone and Android.",
      },
      {
        question: "Is ReelMatch like Tinder for movies?",
        answer:
          "Yes. You swipe on movie and show trailers, your friend or partner does the same, and any title you both say yes to becomes a match.",
      },
      {
        question: "Can a group use a swipe-to-match movie app?",
        answer:
          "Yes. ReelMatch, Filmatch (Party Mode) and MatchWatch support groups. Matched is built for two.",
      },
    ],
    related: ["how-movie-matching-apps-work", "best-movie-matching-apps", "reelmatch-vs-matched"],
  },

  {
    slug: "movie-matcher-for-netflix-prime-video-disney-plus",
    title: "A movie matcher for Netflix, Prime Video, Disney+ and every other streaming service",
    metaTitle: "Movie Matcher for Netflix, Prime Video & Disney+",
    description:
      "How to pick a movie across Netflix, Prime Video, Disney+ and every other streaming service in one app, with a shared swipe-to-match deck you filter by the services you have.",
    published: "2026-10-30",
    updated: "2026-10-30",
    answer:
      "ReelMatch is a movie matcher that works across streaming services: you and your group swipe on trailers, it shows the titles everyone said yes to and where each is streaming, and Pro limits the deck to the services you subscribe to, from Netflix, Prime Video and Disney+ to local services around the world.",
    intro: [
      "There are two different tools people mix up. A streaming guide such as JustWatch or Reelgood tells you where a title is streaming. A movie matcher decides what to watch with other people. ReelMatch is the second, and it shows where each match is available.",
    ],
    sections: [
      {
        heading: "Streaming services you can filter by",
        paragraphs: [
          `ReelMatch uses streaming availability data for countries around the world, so the services you can choose from depend on where you live. They include ${STREAMING}.`,
          "Pick the services your group pays for and the deck is limited to titles you can actually watch tonight. Filtering by streaming service is part of ReelMatch Pro.",
        ],
      },
      {
        heading: "How it works",
        ordered: true,
        list: [
          "Set your country and the services you have.",
          "Everyone swipes on trailers on their own phone.",
          "ReelMatch shows the titles you all said yes to.",
          "Tap a match to see where it is streaming.",
        ],
      },
      {
        heading: "Matcher or streaming guide?",
        table: {
          caption: "Which tool answers which question",
          columns: ["Question", "Use"],
          rows: [
            ["Where can I watch a film I already know?", "A streaming guide such as JustWatch or Reelgood"],
            ["What should the two of us, or all of us, watch?", "A movie matcher such as ReelMatch"],
            ["What is new on Netflix or Prime Video?", "A streaming guide"],
            ["What do we both want, on the services we have?", "A movie matcher with a streaming filter"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Is there a movie matcher that works across Netflix, Prime Video and Disney+?",
        answer:
          "Yes. ReelMatch shows where each match is streaming across Netflix, Prime Video, Disney+ and many other services worldwide, and Pro limits the deck to the services you have. Match a Movie, MatchWatch, Swyf, Filmatch and Matched also let you choose services.",
      },
      {
        question: "How can I see what is on all my streaming services in one app?",
        answer:
          "A streaming guide such as JustWatch or Reelgood lists what is on each service. To also decide with other people, use a movie matcher such as ReelMatch, which shows where every match streams.",
      },
      {
        question: "Does ReelMatch work in my country?",
        answer:
          "ReelMatch shows availability for countries worldwide, using the services in your region. The app itself is in English.",
      },
    ],
    related: ["best-movie-matching-apps", "reelmatch-vs-justwatch", "how-movie-matching-apps-work"],
  },

  {
    slug: "reelmatch-vs-justwatch",
    title: "ReelMatch vs JustWatch and Reelgood: matcher or streaming guide?",
    metaTitle: "ReelMatch vs JustWatch & Reelgood: Which to Use",
    description:
      "ReelMatch is a movie matcher; JustWatch and Reelgood are streaming guides. What each does, and how to use them together to decide what to watch and where.",
    published: "2026-10-30",
    updated: "2026-10-30",
    answer:
      "JustWatch and Reelgood tell you where a title is streaming; ReelMatch helps two or more people decide which title to watch. Use a streaming guide when you know the film, and a movie matcher when you are choosing together.",
    intro: [
      "These are different kinds of app that get compared because they all involve streaming services. We make ReelMatch; JustWatch and Reelgood details come from their own sites, checked October 30, 2026.",
    ],
    sections: [
      {
        heading: "What each is for",
        list: [
          "JustWatch: a streaming guide for movie and TV fans worldwide; filter by service, track titles and get notified when something is available.",
          "Reelgood: a streaming guide with filtering across services and a roulette picker for a random pick.",
          "ReelMatch: a movie matcher; everyone swipes on trailers and you see only the titles all of you said yes to, with where each is streaming.",
        ],
      },
      {
        heading: "Use them together",
        ordered: true,
        list: [
          "Match with ReelMatch to agree on a film.",
          "If you want a second opinion on availability or price, check the title in JustWatch or Reelgood.",
          "Save the runners-up for another night.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is ReelMatch an alternative to JustWatch?",
        answer:
          "Not a replacement. JustWatch is for finding where to watch a title. ReelMatch is for deciding what to watch with other people. Many people use both.",
      },
      {
        question: "Can JustWatch pick a movie for two people?",
        answer:
          "JustWatch is a streaming guide with watchlists and filters. For two or more people swiping and matching, use a movie matcher such as ReelMatch.",
      },
    ],
    related: ["movie-matcher-for-netflix-prime-video-disney-plus", "best-movie-matching-apps", "tinder-for-movies"],
  },

  {
    slug: "movie-matcher-for-couples-with-different-tastes",
    title: "The best movie matcher for couples with different tastes",
    metaTitle: "Best Movie Matcher for Couples With Different Tastes",
    description:
      "How couples with very different taste in movies can pick something both enjoy, and which movie matching apps do it best, from trailers to taste learning.",
    published: "2026-10-30",
    updated: "2026-10-30",
    answer:
      "For couples with different tastes, pick a movie matcher where you each swipe privately and only the overlap is shown. ReelMatch does this with trailers on iPhone and Android; Matched learns your taste over time; Swyf does the same on iPhone.",
    intro: [
      "Different taste is rarely a lack of overlap. It is that the overlap sits at the edges of both of your preferences, which a title list hides and a trailer shows.",
    ],
    sections: [
      {
        heading: "What to look for",
        list: [
          "Private swiping: nobody has to defend a choice.",
          "Only the overlap shown, so there is no argument left.",
          "Trailers, because tone is usually what you disagree on.",
          "Both phones supported.",
        ],
      },
      {
        heading: "Apps that fit",
        list: [
          "ReelMatch: trailers, iPhone, iPad and Android, free with 15 swipes a day.",
          "Matched: made for couples; learns your taste and suggests titles similar couples liked.",
          "Swyf: iPhone only, trailers, no ads.",
          "Filmatch: partner matching by code, iPhone and Android.",
        ],
      },
      {
        heading: "When tastes really clash",
        paragraphs: [
          "Look for the adjacent genre rather than a compromise between two favorites: a tense thriller often works for a horror fan and someone who avoids horror. Keep one or two shows as solo viewing so the shared ones are easier.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best movie matcher for couples with different tastes?",
        answer:
          "ReelMatch if you want trailers and both iPhone and Android; Matched if you want an app that learns your taste over time. Both show only the titles you both said yes to.",
      },
      {
        question: "How do we choose a movie when we like different things?",
        answer:
          "Each swipe on your own, then pick from the overlap. If there's none, look for a shared adjacent genre and decide by mood rather than genre.",
      },
    ],
    related: ["how-to-decide-what-to-watch-with-your-partner", "reelmatch-vs-matched", "movie-app-for-long-distance-couples"],
  },

  {
    slug: "movie-app-for-long-distance-couples",
    title: "Best movie apps for long-distance couples to sync up what to watch",
    metaTitle: "Best Movie Apps for Long-Distance Couples (2026)",
    description:
      "How long-distance couples can agree on what to watch: movie matching apps like ReelMatch for the choosing, and Teleparty-style tools for watching in sync.",
    published: "2026-10-30",
    updated: "2026-10-30",
    answer:
      "A long-distance couple needs two tools: a movie matcher such as ReelMatch to agree what to watch, even in different time zones, and a sync tool such as Teleparty to watch at the same moment.",
    intro: [
      "Watching together from different places has two separate problems: deciding, and watching in sync. Most apps solve only one.",
    ],
    sections: [
      {
        heading: "1. Decide: a movie matcher",
        paragraphs: [
          "Because each of you swipes on your own phone whenever you have a spare few minutes, you don't have to be online together. ReelMatch shows the titles you both said yes to, and you pick the night. Matched and Filmatch also work this way.",
        ],
      },
      {
        heading: "2. Watch in sync",
        paragraphs: [
          "Teleparty (formerly Netflix Party) synchronizes playback in the browser and adds a group chat. It supports several major services, so check that it covers yours and that you both have a subscription.",
        ],
      },
      {
        heading: "A simple routine",
        ordered: true,
        list: [
          "Swipe separately during the week.",
          "On the day, open your matches and pick one.",
          "Check you both have it on a service you subscribe to.",
          "Start it together with a sync tool or a video call.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best movie app for long-distance couples?",
        answer:
          "ReelMatch for choosing what to watch, because you can swipe separately on your own time. For watching at the same moment, add a sync tool such as Teleparty.",
      },
      {
        question: "Can we use ReelMatch in different countries?",
        answer:
          "Yes, you can match from anywhere. Streaming availability differs by country, so check that the title is on a service you both have.",
      },
    ],
    related: ["movie-matcher-for-couples-with-different-tastes", "how-to-decide-what-to-watch-with-your-partner", "movie-matcher-for-netflix-prime-video-disney-plus"],
  },

  {
    slug: "alternative-to-random-movie-generator",
    title: "A better alternative to a random movie generator: pick together",
    metaTitle: "Random Movie Generator Alternative That Fits Everyone",
    description:
      "Random movie generators ignore what each person wants. Better alternatives: swipe-and-match apps, taste-compatibility tools and simple voting that find a film everyone likes.",
    published: "2026-10-30",
    updated: "2026-10-30",
    answer:
      "A good alternative to a random movie generator is a swipe-and-match app such as ReelMatch, where everyone says yes or no privately and you only choose from titles everyone approved, so the result reflects everyone's opinion instead of luck.",
    intro: [
      "A random generator picks without asking anyone. It's fun for a laugh and poor when people have different taste, because the result can be something one person refuses to watch.",
    ],
    sections: [
      {
        heading: "Options that consider everyone",
        list: [
          "Swipe-and-match apps: ReelMatch, Matched, Filmatch and others show only what everyone said yes to.",
          "Group voting: everyone ranks a shortlist; the least popular is dropped each round.",
          "A veto shortlist: one person picks five, everyone gets one veto, then you vote on the rest.",
          "Taste-compatibility tools: Taste and Criticker compare ratings.",
        ],
      },
      {
        heading: "When random is fine",
        paragraphs: [
          "Random works well after you've matched: pick a film at random from the list of titles you all said yes to. Everyone has already approved it, so luck decides only the order.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a good alternative to a random movie generator?",
        answer:
          "A swipe-and-match app such as ReelMatch, where everyone swipes privately and you only see titles everyone approved.",
      },
      {
        question: "How do you pick a movie when everyone wants something different?",
        answer:
          "Collect everyone's yes list first, pick from the overlap, and use a veto or alternating choice if there's no overlap.",
      },
    ],
    related: ["how-to-pick-a-movie-for-a-group", "tinder-for-movies", "best-movie-matching-apps"],
  },

  {
    slug: "movie-picker-app-for-iphone-and-android",
    title: "Movie matching apps that work on both iPhone and Android",
    metaTitle: "Movie Matching Apps for iPhone and Android Together",
    description:
      "Which movie matching apps work when one of you has an iPhone and the other has Android: ReelMatch, Matched, Filmatch and MatchWatch compared.",
    published: "2026-10-30",
    updated: "2026-10-30",
    answer:
      "ReelMatch, Matched, Filmatch and MatchWatch have both iPhone and Android apps, so a mixed group can use them together. Match a Movie runs in any browser. Swyf and Movie Matchup are iPhone only.",
    intro: [
      "A swipe app is only useful if every person can run it. Here is which ones work across phones, checked October 30, 2026 against their own listings.",
    ],
    sections: [
      {
        heading: "Cross-platform apps",
        table: {
          caption: "Platforms (checked October 30, 2026)",
          columns: ["App", "iPhone", "Android", "Browser"],
          rows: [
            ["ReelMatch", "Yes (and iPad)", "Yes", "No"],
            ["Matched", "Yes", "Yes", "Not stated"],
            ["Filmatch", "Yes", "Yes", "Not stated"],
            ["MatchWatch", "Yes", "Yes", "Yes"],
            ["Match a Movie", "Via browser", "Via browser", "Yes"],
            ["Swyf", "Yes", "No", "No"],
            ["Movie Matchup", "Yes", "Not stated", "Not stated"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Which movie matching apps work on both iPhone and Android?",
        answer:
          "ReelMatch, Matched, Filmatch and MatchWatch. Match a Movie works in any phone browser.",
      },
      {
        question: "Can an iPhone user and an Android user match movies together?",
        answer:
          "Yes, with ReelMatch, Matched, Filmatch or MatchWatch, because each has apps for both.",
      },
    ],
    related: ["best-movie-matching-apps", "matched-app-alternatives", "tinder-for-movies"],
  },

  {
    slug: "family-movie-night-picker-app",
    title: "A movie picker app for family movie night",
    metaTitle: "Movie Picker App for Family Movie Night (Free Options)",
    description:
      "How families can pick a movie everyone agrees on: movie picker apps compared, including free options for groups, and a simple routine that ends the arguing.",
    published: "2026-10-30",
    updated: "2026-10-30",
    answer:
      "For family movie night, use a movie picker where everyone swipes on their own phone and you only see what everyone said yes to. ReelMatch handles any group size; MatchWatch is free for up to six with a G and PG kids mode.",
    intro: [
      "Family movie night usually fails at the picking stage. Three kids, two adults, five opinions, and the evening is half over before anything starts.",
    ],
    sections: [
      {
        heading: "Apps that handle a family",
        list: [
          "ReelMatch: swipe on trailers, any group size, free with 15 swipes a day (invite friends for bonus swipes).",
          "MatchWatch: free, groups of up to six, a Kids mode for G and PG titles.",
          "Match a Movie: web browser, no account, nothing to install.",
          "Movie Matchup: a host shares a short join code; friends join without accounts (iPhone and iPad).",
        ],
      },
      {
        heading: "A routine that works",
        ordered: true,
        list: [
          "Agree the rating ceiling first, so every card is something everyone is allowed to see.",
          "Everyone swipes separately for five minutes.",
          "Pick from the matches; if there are several, let the youngest choose the order.",
          "Save the others for next week.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best movie picker app for family movie night?",
        answer:
          "ReelMatch for any group size with trailers; MatchWatch if you want a free app with a G and PG kids mode for up to six.",
      },
      {
        question: "Are there free movie picker apps for families?",
        answer:
          "Yes. MatchWatch says it has no paid tier, Match a Movie is free with no account, and ReelMatch is free with 15 swipes a day.",
      },
    ],
    related: ["family-movies-to-watch", "how-to-pick-a-movie-for-a-group", "best-movie-matching-apps"],
  },
];
