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
      "Yes. ReelMatch is free to download and free to use on both iOS and Android. Swiping trailers, building a watchlist, adding friends and matching on films are all included at no cost. An optional ReelMatch Pro subscription adds streaming-provider filters, genre filters and instant TV launch.",
  },
  {
    question: "Which streaming services does ReelMatch work with?",
    answer:
      "ReelMatch covers titles across all the major streaming platforms, including Netflix, Amazon Prime Video, Disney+, Hulu, Apple TV+ and Max. ReelMatch helps you decide what to watch and shows you where a title is streaming — you then play it on the service you already subscribe to.",
  },
  {
    question: "How does ReelMatch find matches between friends?",
    answer:
      "You and your friends each swipe right on trailers you like. When two or more of you swipe right on the same film or series, ReelMatch records it as a match and surfaces it to everyone involved. Instead of debating a shortlist, you open the app and pick from titles everyone has already said yes to.",
  },
  {
    question: "Is my watch history private?",
    answer:
      "Yes. Your swipes, watchlist and viewing preferences are private by default. Nothing is shared until you connect with a specific friend, and even then only your matches and the lists you choose to share are visible. You can disconnect from a friend at any time.",
  },
  {
    question: "Is ReelMatch available on iOS and Android?",
    answer:
      "Yes. ReelMatch is available on the Apple App Store for iPhone and iPad, and on Google Play for Android phones and tablets. Matching works across platforms, so an iPhone user and an Android user can match with each other without any extra setup.",
  },
];

/** Extra questions that only appear on the dedicated /faq page. */
export const extendedFaqs: Faq[] = [
  {
    question: "How is ReelMatch different from a streaming service's own recommendations?",
    answer:
      "A streaming service only recommends titles from its own catalogue, and it only knows about one viewer at a time — usually whoever's profile is logged in. ReelMatch works across services and across people. It builds a shared picture of what a couple or a group will actually agree on, which is the part a single-service algorithm cannot see.",
  },
  {
    question: "How many people can match at once?",
    answer:
      "Matching is not limited to two people. You can connect with several friends or family members and see titles that everyone in the group has swiped right on, which is the situation where choosing is normally hardest.",
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
    question: "What does ReelMatch Pro add?",
    answer:
      "ReelMatch Pro unlocks filtering by streaming provider, so you only see titles on services you already pay for, filtering by genre, and instant TV launch, which opens a matched title on your TV without hunting through apps.",
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
