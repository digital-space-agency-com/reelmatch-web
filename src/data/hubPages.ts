import type { Faq } from "@/data/faq";
import { guides } from "@/data/guides";
import { collections, collectionPath } from "@/data/collections";
import { landingPages } from "@/data/landingPages";
import { generatorPages } from "@/data/generatorPages";

/**
 * Topic hubs: an audience or theme page that groups the guides, lists, tools
 * and landing pages for it. Hubs add a middle layer to the site
 * (Home > hub > page) without moving any existing URL. A page's breadcrumb
 * parent is the first hub that lists it in a `primary` group.
 */
export type HubGroup = {
  heading: string;
  blurb?: string;
  /** Paths of existing pages. */
  paths: string[];
  /** Pages in a primary group get this hub as their breadcrumb parent. */
  primary?: boolean;
};

export type HubPage = {
  path: string;
  /** Short name used in breadcrumbs and links. */
  name: string;
  metaTitle: string;
  description: string;
  h1: string;
  intro: string;
  groups: HubGroup[];
  faqs: Faq[];
};

export const hubPages: HubPage[] = [
  {
    path: "/for-couples",
    name: "For couples",
    metaTitle: "What to Watch as a Couple: Apps, Guides & Picks | ReelMatch",
    description:
      "Everything for picking something to watch as a couple: how to decide, movie and TV picks for two, and the app that shows what you both said yes to.",
    h1: "Pick something to watch as a couple",
    intro:
      "Two people, one evening, forty minutes of scrolling. These guides and tools help you and your partner, husband or wife agree on a movie or TV show faster, and ReelMatch does the comparing for you: you each swipe trailers separately and see only what you both said yes to.",
    groups: [
      {
        heading: "Decide together",
        paths: [
          "/guides/how-to-decide-what-to-watch-with-your-partner",
          "/find-a-tv-show-to-watch-together",
          "/match-a-movie",
        ],
        primary: true,
      },
      {
        heading: "Picks for two",
        paths: ["/guides/movies-to-watch-as-a-couple", "/guides/feel-good-movies"],
        primary: true,
      },
      {
        heading: "Tools and comparisons",
        paths: [
          "/random-movie-generator",
          "/guides/best-movie-matching-apps",
          "/guides/how-movie-matching-apps-work",
        ],
      },
    ],
    faqs: [
      {
        question: "What's the best way for a couple to decide what to watch?",
        answer:
          "Each person says yes or no to the same options separately, then you watch something you both said yes to. ReelMatch is a free iPhone and Android app that does this with trailers.",
      },
      {
        question: "Can we use ReelMatch if one of us has an iPhone and the other Android?",
        answer: "Yes. ReelMatch works across iPhone and Android with no extra setup.",
      },
    ],
  },
  {
    path: "/for-families",
    name: "For families",
    metaTitle: "Family Movie Night: Picks & an App to Choose | ReelMatch",
    description:
      "Family movie night made easier: movies for all ages, teens and parents, holiday picks, and a free app where everyone votes by swiping trailers.",
    h1: "Family movie night, sorted",
    intro:
      "Families spend longer choosing than watching. Find picks for every age and occasion below, then use ReelMatch so everyone swipes trailers on their own phone and you only see what the whole family said yes to.",
    groups: [
      {
        heading: "Movies for the whole family",
        paths: [
          "/guides/family-movies-to-watch",
          "/movies/funny-movies-for-family",
          "/movies/action-movies-for-family",
          "/guides/feel-good-movies",
        ],
        primary: true,
      },
      {
        heading: "Teens, sleepovers and parents",
        paths: [
          "/guides/movies-to-watch-with-teens",
          "/movies/funny-movies-for-teens",
          "/movies/sleepover-movies",
          "/guides/movies-to-watch-with-your-mom",
        ],
        primary: true,
      },
      {
        heading: "Holidays",
        paths: ["/guides/family-christmas-movies", "/guides/thanksgiving-movies", "/random-christmas-movie-generator"],
        primary: true,
      },
    ],
    faqs: [
      {
        question: "Is there an app to pick a movie or TV show with the whole family?",
        answer:
          "Yes. ReelMatch is free on iPhone and Android. Each family member swipes trailers on their own phone, and groups of three or more can match together.",
      },
      {
        question: "Does ReelMatch filter by age rating?",
        answer:
          "ReelMatch is for choosing together rather than a locked-down kids' app. ReelMatch Pro adds genre filters, and parental controls are set in your streaming service.",
      },
    ],
  },
  {
    path: "/for-friends",
    name: "For friends and groups",
    metaTitle: "Movie Night With Friends: How to Pick | ReelMatch",
    description:
      "Choose a movie for a group without the endless scrolling: guides, scary-movie picks, a random movie generator and the app everyone swipes on.",
    h1: "Movie night with friends, without the scrolling",
    intro:
      "The more people, the harder it is to agree. These guides show how to pick a movie for a group, and ReelMatch makes it quick: everyone swipes trailers on their own phone and the app shows the titles everyone said yes to.",
    groups: [
      {
        heading: "Pick a movie for the group",
        paths: [
          "/guides/how-to-pick-a-movie-for-a-group",
          "/guides/movies-to-watch-with-friends",
          "/swipe-movies",
        ],
        primary: true,
      },
      {
        heading: "Themed nights",
        paths: [
          "/guides/scary-movies-to-watch-with-friends",
          "/random-horror-movie-generator",
          "/movies/scary-movies-for-teens",
        ],
        primary: true,
      },
      {
        heading: "Compare the apps",
        paths: ["/guides/best-movie-matching-apps", "/guides/how-movie-matching-apps-work"],
      },
    ],
    faqs: [
      {
        question: "How do you pick a movie for a group of friends?",
        answer:
          "Have everyone say yes or no to the same options on their own, then watch something everyone said yes to. ReelMatch automates it for groups of three or more.",
      },
      {
        question: "Do all of my friends need the app?",
        answer:
          "Yes. A match is the overlap of everyone's swipes, so each person needs ReelMatch. It's free to download.",
      },
    ],
  },
  {
    path: "/movies",
    name: "Movie lists",
    metaTitle: "Movie Lists by Mood, Audience & Service | ReelMatch",
    description:
      "Hand-picked movie lists: funny, scary and romantic picks, movies for family and teens, and what to watch on Netflix, Disney+ and Prime Video.",
    h1: "Movie lists by mood, audience and streaming service",
    intro:
      "Hand-picked lists with trailers and ratings, for every kind of night. Can't agree on one? ReelMatch lets everyone swipe the trailers and shows what you all said yes to.",
    groups: [
      {
        heading: "By audience",
        paths: [
          "/movies/funny-movies-for-family",
          "/movies/action-movies-for-family",
          "/movies/funny-movies-for-teens",
          "/movies/sleepover-movies",
        ],
        primary: true,
      },
      {
        heading: "By mood",
        paths: [
          "/movies/romantic-movies-for-teens",
          "/movies/scary-movies-for-teens",
          "/movies/animated-movies-for-adults",
        ],
        primary: true,
      },
      {
        heading: "By streaming service",
        paths: [
          "/movies/what-to-watch-on-netflix",
          "/movies/what-to-watch-on-disney-plus",
          "/movies/what-to-watch-on-prime-video",
        ],
        primary: true,
      },
    ],
    faqs: [
      {
        question: "Where do the movies on these lists come from?",
        answer:
          "Each list is hand-picked, with images, ratings and runtimes from TMDB. Ratings are US ratings.",
      },
    ],
  },
];

export const hubByPath = (path: string) => hubPages.find((h) => h.path === path);

export type HubLink = { to: string; title: string; blurb: string };

/** Title and blurb for any internal page the hubs can list. */
export const linkInfo = (path: string): HubLink | undefined => {
  const guide = guides.find((g) => `/guides/${g.slug}` === path);
  if (guide) return { to: path, title: guide.title, blurb: guide.description };
  const collection = collections.find((c) => collectionPath(c) === path);
  if (collection) return { to: path, title: collection.h1, blurb: collection.description };
  const landing = landingPages.find((p) => p.path === path);
  if (landing) return { to: path, title: landing.h1, blurb: landing.description };
  const generator = generatorPages.find((p) => p.path === path);
  if (generator) return { to: path, title: generator.h1, blurb: generator.description };
  return undefined;
};

/** The hub whose primary group lists [path], for breadcrumbs. */
export const parentHub = (path: string): HubPage | undefined =>
  path.startsWith("/movies/")
    ? hubByPath("/movies")
    : hubPages.find((h) => h.groups.some((g) => g.primary && g.paths.includes(path)));
