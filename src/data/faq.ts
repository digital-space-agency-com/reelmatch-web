export type Faq = {
  question: string;
  answer: string;
};

/**
 * Canonical FAQ copy. Rendered as visible HTML on the homepage and /faq, and
 * emitted as FAQPage structured data at build time — the three must stay in
 * sync or Google will treat the markup as mismatched.
 */
export const homepageFaqs: Faq[] = [
  {
    question: "Is ReelMatch free to use?",
    answer:
      "Yes. ReelMatch is free to download on iOS and Android. Swiping trailers, building a watchlist, adding friends and matching are all included, with 15 swipes a day on the free plan and bonus swipes when you invite friends. An optional ReelMatch Pro subscription removes the daily limit and adds streaming-provider filters, genre filters and instant TV launch.",
  },
  {
    question: "Does ReelMatch work across Netflix, Prime Video and Disney+?",
    answer:
      "Yes. ReelMatch covers titles across Netflix, Amazon Prime Video, Disney+, Hulu, Apple TV+ and Max in one deck, and shows where each title is streaming, so you're not choosing inside one service's catalog. You then play it on the service you already subscribe to. ReelMatch Pro can limit the deck to only the services you have.",
  },
  {
    question: "Can ReelMatch help couples with very different tastes?",
    answer:
      "Yes, that's what it's built for. You each swipe through trailers privately, and ReelMatch only shows the titles you both said yes to, so nobody has to argue for their pick or veto the other's. Trailers help with different tastes because they show the tone, which is usually what people disagree on.",
  },
  {
    question: "How does ReelMatch find matches between friends?",
    answer:
      "You and your friends each say yes to trailers you like. When two or more of you say yes to the same film or series, ReelMatch records it as a match and surfaces it to everyone involved. Instead of debating a shortlist, you open the app and pick from titles everyone has already said yes to.",
  },
  {
    question: "Is my watch history private?",
    answer:
      "Yes. Your swipes, watchlist and viewing preferences are private by default. Nothing is shared until you connect with a specific friend, and even then only your matches and the lists you choose to share are visible. You can disconnect from a friend at any time.",
  },
  {
    question: "Is ReelMatch available on iOS and Android?",
    answer:
      "Yes. ReelMatch is available on the Apple App Store for iPhone and iPad, and on Google Play for Android phones and tablets. Matching works across platforms, so an iPhone user and an Android user can use it together without any extra setup.",
  },
];

/** Extra questions that only appear on the dedicated /faq page. */
export const extendedFaqs: Faq[] = [
  {
    question: "How is ReelMatch different from a streaming service's own recommendations?",
    answer:
      "A streaming service only recommends titles from its own catalog, and it only knows about one viewer at a time — usually whoever's profile is logged in. ReelMatch works across services and across people. It builds a shared picture of what a couple or a group will actually agree on, which is the part a single-service algorithm cannot see.",
  },
  {
    question: "How many people can match at once?",
    answer:
      "Matching is not limited to two people. You can connect with several friends or family members and see titles that everyone in the group has said yes to, which is the situation where choosing is normally hardest.",
  },
  {
    question: "How accurate are ReelMatch matches when tastes are very different?",
    answer:
      "A match only appears when everyone has said yes to the title, so it isn't a guess. Very different tastes mean fewer matches, not worse ones. Swiping a little more each, and keeping the deck broad at first, usually finds the overlap, often in thrillers, mysteries and comedies.",
  },
  {
    question: "Is ReelMatch free for families and groups?",
    answer:
      "Yes. Each person downloads ReelMatch for free on iPhone or Android, and groups of three or more can match together. The free plan includes 15 swipes a day per person. ReelMatch Pro is optional and removes the limit.",
  },
  {
    question: "Do my friends need ReelMatch for matching to work?",
    answer:
      "Yes. Matching compares your swipes with theirs, so each person needs the app and an account. Both apps are free, so there is no cost barrier to getting a partner or a friend group set up.",
  },
  {
    question: "Does ReelMatch cover TV series as well as films?",
    answer:
      "Yes. Trailers for both films and TV series appear in the swipe deck, and both can be matched on and added to a watchlist.",
  },
  {
    question: "Is there an app to find a TV show to watch with my husband, wife or partner?",
    answer:
      "Yes. ReelMatch is a free iPhone and Android app where you and your husband, wife or partner each swipe through TV show and movie trailers on your own phones, and it shows only the titles you both said yes to. See reelmatch.app/find-a-tv-show-to-watch-together.",
  },
  {
    question: "Can long-distance couples use ReelMatch to pick what to watch together?",
    answer:
      "Yes. Each person swipes through trailers on their own phone, so you don't need to be in the same room or even swipe at the same time. Connect with your partner in the app and ReelMatch shows the movies and shows you both said yes to, ready for whenever you each press play.",
  },
  {
    question: "Is there an app to filter movies by streaming service and open them on my TV?",
    answer:
      "Yes, in ReelMatch Pro. Pro filters the deck to the streaming services you already pay for, such as Netflix, Prime Video and Disney+, adds genre filters, and has instant TV launch, which opens a matched title on your smart TV without hunting through apps.",
  },
  {
    question: "What does ReelMatch Pro add?",
    answer:
      "ReelMatch Pro unlocks filtering by streaming provider, so you only see titles on services you already pay for, filtering by genre, and instant TV launch, which opens a matched title on your TV without hunting through apps.",
  },
  {
    question: "What is a movie matcher app?",
    answer:
      "A movie matcher app helps two or more people agree on something to watch. Each person says yes or no to movies and shows on their own phone, and the app shows only the titles everyone said yes to. Nothing is predicted: every match is a title each person has already approved. ReelMatch is a free movie matcher for iPhone and Android that uses trailers instead of posters.",
  },
  {
    question: "Can I use ReelMatch on my own?",
    answer:
      "Yes. You can swipe through trailers on your own to discover movies and shows and build a watchlist. Matching starts once you connect with a partner, friends or family, because a match is a title two or more of you said yes to.",
  },
  {
    question: "Is the ReelMatch app available in Spanish?",
    answer:
      "The app itself is in English for now, but it's very visual: you watch trailers and swipe. The ReelMatch website and guides are available in Spanish at reelmatch.app/es.",
  },
  {
    question: "How do I pick a movie with my partner?",
    answer:
      "Each of you writes down three movies you'd actually watch tonight without showing the other, then choose only from what overlaps. If nothing overlaps, each person crosses off one of the other's picks and you decide by mood rather than genre. ReelMatch does this automatically: you both swipe through trailers and it shows the titles you both said yes to.",
  },
  {
    question: "Where does ReelMatch get its film and trailer data?",
    answer:
      "Film and series metadata comes from The Movie Database (TMDB), and trailers are played from YouTube. ReelMatch uses the TMDB API but is not endorsed or certified by TMDB.",
  },
];

export const allFaqs: Faq[] = [...homepageFaqs, ...extendedFaqs];

export const faqPageJsonLd = (faqs: Faq[], url: string) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${url}#faq`,
  url,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
