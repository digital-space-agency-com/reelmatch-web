import type { Faq } from "@/data/faq";

/**
 * Search landing pages for the app's own vocabulary: "swipe movies" and
 * "match a movie". One component (SeoLanding) renders all of them. Copy frames
 * a match as everyone agreeing on a title, never as matching people.
 */
export type LandingPage = {
  path: string;
  metaTitle: string;
  description: string;
  h1: string;
  intro: string;
  steps: { title: string; body: string }[];
  whyTitle: string;
  why: string[];
  faqs: Faq[];
  related: { to: string; text: string }[];
};

export const landingPages: LandingPage[] = [
  {
    path: "/swipe-movies",
    metaTitle: "Swipe Movies: Movie Swiper App for Couples & Groups | ReelMatch",
    description:
      "Swipe movies with ReelMatch, the free movie swiper app. Swipe trailers on your own phone, say yes or skip, and see the films everyone said yes to.",
    h1: "Swipe movies with the people you watch with",
    intro:
      "ReelMatch is a free movie swiper for iPhone and Android. Swipe through trailers, say yes to what looks good, and the app shows the titles you and your group all said yes to. No more scrolling a catalog for 40 minutes.",
    steps: [
      {
        title: "Swipe trailers",
        body: "Each trailer is one card. Swipe to say yes or skip. It takes a couple of seconds per title, so ten swipes is a minute of effort.",
      },
      {
        title: "Everyone swipes on their own phone",
        body: "Nobody has to see or defend anyone else's picks. You each swipe when it suits you, even on different days.",
      },
      {
        title: "Watch what you all said yes to",
        body: "Any movie or show two or more of you said yes to lands in your matches, with where it's streaming. Pick one and press play.",
      },
    ],
    whyTitle: "Why swiping beats scrolling",
    why: [
      "Scrolling a streaming catalog is one person browsing while everyone else waits. Swiping turns choosing into a quick yes or no that every person does at the same time.",
      "Because every title on your match list has already been approved by each of you, there's no veto round and no 'I don't mind, you pick'.",
      "ReelMatch covers titles on Netflix, Prime Video, Disney+, Hulu, Apple TV+ and Max in one deck, so you aren't limited to a single service's catalog.",
    ],
    faqs: [
      {
        question: "What is the best app to swipe movies?",
        answer:
          "ReelMatch is a free app for iPhone and Android where you swipe through movie and TV trailers, and it shows the titles you and your friends, partner or family all said yes to.",
      },
      {
        question: "How do you swipe movies with friends?",
        answer:
          "Everyone installs ReelMatch, connects in the app, and swipes trailers on their own phone. Anything two or more people say yes to appears in your matches.",
      },
      {
        question: "Is the movie swiper free?",
        answer:
          "Yes. Swiping, watchlists, adding friends and matching are free, with 15 swipes a day on the free plan and bonus swipes when you invite friends. ReelMatch Pro removes the daily limit.",
      },
      {
        question: "Can iPhone and Android users swipe movies together?",
        answer:
          "Yes. ReelMatch works across iPhone and Android with no extra setup, so nobody in the group is left out.",
      },
    ],
    related: [
      { to: "/match-a-movie", text: "How to match a movie with friends" },
      { to: "/random-movie-generator", text: "Random movie generator" },
      { to: "/guides/how-movie-matching-apps-work", text: "How movie matching apps work" },
    ],
  },
  {
    path: "/match-a-movie",
    metaTitle: "Match a Movie: Find Films Everyone Wants to Watch | ReelMatch",
    description:
      "Match a movie with friends, family or your partner in minutes. Everyone swipes trailers on their own phone and ReelMatch shows the films you all said yes to.",
    h1: "Match a movie with friends in minutes",
    intro:
      "To match a movie, everyone says yes or no to the same trailers and you watch something you all said yes to. ReelMatch does the comparing for you: free on iPhone and Android, for two people or a whole group.",
    steps: [
      {
        title: "Download ReelMatch and connect",
        body: "Everyone installs the app and connects by sharing an invite link. It works for couples, friend groups and families, on iPhone and Android.",
      },
      {
        title: "Swipe trailers separately",
        body: "Each person swipes yes or skip on their own phone, so there's no arguing over the remote and no one is put on the spot.",
      },
      {
        title: "Open your matches",
        body: "Titles that two or more of you said yes to show up as matches, along with which streaming service has them. Choose one and start the movie.",
      },
    ],
    whyTitle: "Why matching works when 'what do you fancy?' doesn't",
    why: [
      "A match is an overlap, not a guess. It only contains titles each person has said yes to, so nobody has to reject anyone's suggestion.",
      "It scales to groups. Agreeing on a film with three or more people by chatting rarely works; comparing everyone's yeses does.",
      "It saves the evening. Most of a movie night is lost choosing, and a match list gets you to the film quickly.",
    ],
    faqs: [
      {
        question: "How do you match a movie with friends?",
        answer:
          "Install ReelMatch, connect with your friends, and everyone swipes through trailers on their own phone. Movies you all said yes to appear in your matches.",
      },
      {
        question: "How can a group of friends choose a movie?",
        answer:
          "Have each person say yes or no to the same set of trailers, then watch something everyone said yes to. ReelMatch automates that for groups of three or more.",
      },
      {
        question: "Do we both need the app?",
        answer:
          "Yes. A match is the overlap between each person's swipes, so everyone you watch with needs ReelMatch. It's free to download.",
      },
      {
        question: "How do we choose a movie when we never agree?",
        answer:
          "Stop debating and compare answers. Swiping separately means you only see titles you all like, and 'I don't mind' stops being the answer.",
      },
    ],
    related: [
      { to: "/swipe-movies", text: "Swipe movies with ReelMatch" },
      { to: "/guides/movies-to-watch-as-a-couple", text: "Movies to watch as a couple" },
      { to: "/guides/movies-to-watch-with-friends", text: "Movies to watch with friends" },
    ],
  },
];

export const landingPage = (path: string) =>
  landingPages.find((p) => p.path === path);
