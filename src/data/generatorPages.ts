import type { Mood, Season } from "./movies";

/**
 * The random movie generator pages. One component serves all of them; each
 * page presets a filter and has its own copy, so they rank for different
 * searches ("random movie generator", "random horror movie generator", ...).
 */
export type GeneratorPage = {
  path: string;
  metaTitle: string;
  description: string;
  h1: string;
  intro: string;
  /** Locked filter for seasonal pages; the mood chips are hidden for these. */
  mood?: Mood;
  season?: Season;
  /** Shown before the first pick, so the page has a card (and an image) on load. */
  example: string;
  faqs: { question: string; answer: string }[];
};

const sharedFaqs = [
  {
    question: "Where do the movies come from?",
    answer:
      "Our hand-picked guide movies plus hundreds of well-rated, widely seen films from TMDB, so you only get well-liked titles, never filler. Each pick links to a guide with more like it.",
  },
  {
    question: "How do two or more people pick a movie together?",
    answer:
      "The generator picks for one person. When you're choosing with a partner, friends or family, ReelMatch lets everyone swipe through trailers on their own phone and shows the movies you all said yes to. It's free on iPhone and Android.",
  },
];

export const generatorPages: GeneratorPage[] = [
  {
    path: "/random-movie-generator",
    metaTitle: "Random Movie Generator: What Movie Should I Watch?",
    description:
      "Can't decide what to watch? Pick a mood and who you're watching with, and our free random movie generator suggests a movie with its trailer. No sign-up.",
    h1: "Random movie generator: what movie should I watch?",
    intro:
      "Pick a mood and who you're watching with, then hit the button. You'll get one movie, a reason to watch it and a link to the trailer. Don't like it? Pick again.",
    example: "Paddington 2",
    faqs: [
      {
        question: "What movie should I watch tonight?",
        answer:
          "Start with your mood. Funny: Palm Springs or School of Rock. Feel-good: Paddington 2. Scary: A Quiet Place. Thrilling: The Martian. Or let the random movie generator above choose for you.",
      },
      {
        question: "Is the random movie generator free?",
        answer: "Yes. It's free, works in your browser and doesn't need an account.",
      },
      ...sharedFaqs,
    ],
  },
  {
    path: "/random-horror-movie-generator",
    metaTitle: "Random Horror Movie Generator: Pick a Scary Movie",
    description:
      "Get a random horror movie for tonight, from horror-comedies to real nightmares, with a trailer link for each. Free, no sign-up. Pick again until it clicks.",
    h1: "Random horror movie generator",
    intro:
      "Need a scary movie for tonight? Hit the button for a random horror pick, from fun frights to genuinely terrifying, with a link to the trailer so you can check the scare level first.",
    mood: "scary",
    example: "A Quiet Place",
    faqs: [
      {
        question: "What's a good horror movie to watch with friends?",
        answer:
          "Scream (1996) and Shaun of the Dead (2004) are scary and funny, which works well in a group. For something tenser, try A Quiet Place (2018) or The Conjuring (2013).",
      },
      ...sharedFaqs,
    ],
  },
  {
    path: "/random-christmas-movie-generator",
    metaTitle: "Random Christmas Movie Generator for the Whole Family",
    description:
      "Get a random Christmas movie for tonight: classics, comedies, animated picks for kids and a few for grown-ups, each with a trailer link. Free, no sign-up.",
    h1: "Random Christmas movie generator",
    intro:
      "Can't settle on a Christmas movie? Hit the button for a random pick, from timeless classics to animated favorites, with a link to the trailer. Choose \"Kids & family\" to keep it suitable for everyone.",
    season: "christmas",
    example: "Elf",
    faqs: [
      {
        question: "What's the best Christmas movie to watch as a family?",
        answer:
          "Elf (2003), Home Alone (1990), The Polar Express (2004) and Klaus (2019) are safe picks that work for kids and adults.",
      },
      ...sharedFaqs,
    ],
  },
];

export const generatorPage = (path: string) => generatorPages.find((p) => p.path === path);
