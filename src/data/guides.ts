import type { Faq } from "./faq";

export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  ordered?: boolean;
};

export type Guide = {
  /** Path segment after /guides/ */
  slug: string;
  /** Visible H1 */
  title: string;
  /** <title> tag */
  metaTitle: string;
  description: string;
  published: string;
  updated: string;
  /** One-sentence direct answer, placed immediately under the H1. This is the
   *  span most likely to be lifted verbatim into an AI Overview. */
  answer: string;
  intro: string[];
  sections: GuideSection[];
  faqs: Faq[];
  /** Slugs of other guides to cross-link. */
  related: string[];
};

export const guides: Guide[] = [
  {
    slug: "how-to-decide-what-to-watch-with-your-partner",
    title: "How to decide what to watch with your partner",
    metaTitle:
      "How to Decide What to Watch With Your Partner (7 Methods That Work)",
    description:
      "Seven practical ways to stop the nightly what-should-we-watch argument with your partner, from the two-list method to swipe-matching apps like ReelMatch.",
    published: "2026-08-18",
    updated: "2026-08-18",
    answer:
      "The fastest way to decide what to watch with your partner is to pick from titles you have both already said yes to, rather than proposing titles to each other one at a time. Any method that collects both people's preferences first — a shared watchlist, a two-list shortlist, or a swipe-matching app — ends the negotiation in under a minute.",
    intro: [
      "Choosing a film with someone else is a negotiation, and most couples run it the slowest possible way: one person suggests a title, the other rejects it, repeat until somebody gives up. Twenty minutes later the evening is shorter and nobody is excited about the film that won.",
      "The problem is not taste. It is sequencing. Suggesting titles one at a time means every option gets judged in isolation, and every rejection feels personal. The methods below all fix the same thing — they gather both people's preferences before the choosing starts.",
    ],
    sections: [
      {
        heading: "1. Swap the veto for a shared yes",
        paragraphs: [
          "The single biggest improvement is to stop proposing and start collecting. Each of you builds a list of things you would happily watch, independently and without commentary. Then you only look at the overlap.",
          "This works because it removes the rejection step entirely. Nothing on the shared list needs defending — both of you already approved it. This is the principle every movie matching app is built on, and you can run it manually with two notes apps if you prefer.",
        ],
      },
      {
        heading: "2. The two-list method",
        paragraphs: [
          "A five-minute version you can run tonight without any app:",
        ],
        ordered: true,
        list: [
          "Each person writes down five titles they actively want to watch, without showing the other person.",
          "Compare the lists. Anything appearing on both is an instant pick — watch it and stop reading here.",
          "If there is no overlap, each person crosses off two titles from the other's list.",
          "You are left with six titles maximum. Pick at random, or alternate who chooses each week.",
        ],
      },
      {
        heading: "3. Use trailers instead of titles",
        paragraphs: [
          "Reading a title and a one-line synopsis tells you very little about whether you will enjoy something. A trailer tells you the tone, the pace and the look of a film in ninety seconds, which is usually the information that actually decides whether someone is interested.",
          "Judging by trailer also makes people more adventurous. Titles you would skip on a text list frequently survive a trailer, because the trailer sells the thing the title cannot.",
        ],
      },
      {
        heading: "4. Constrain the pool before you start",
        paragraphs: [
          "An unbounded catalogue is what makes the decision hard. Narrow it before anyone starts choosing:",
        ],
        list: [
          "One service only — pick the streaming subscription you both use most, tonight.",
          "One runtime — under two hours on a weeknight removes most of the debate.",
          "One mood, agreed first — 'something light' or 'something tense' before any titles are named.",
          "A release window — the last five years, or specifically something older than you would normally pick.",
        ],
      },
      {
        heading: "5. Alternate the decision, not the film",
        paragraphs: [
          "Taking turns to choose works far better than taking turns to compromise. A film chosen wholeheartedly by one person and watched generously by the other beats a mutual second choice almost every time.",
          "Make the rule explicit: whoever chooses this week gets the choice without appeal, and next week it flips. The person not choosing is free to enjoy it rather than to keep score.",
        ],
      },
      {
        heading: "6. Keep a running shared watchlist",
        paragraphs: [
          "Most of the decision problem is that you are trying to remember titles at exactly the moment you are least able to. Add films to a shared list whenever you hear about one — a recommendation from a friend, a trailer before something else, a review you read at lunch.",
          "By the time Friday arrives the work is already done. You are picking from a list you both built rather than searching a catalogue from scratch.",
        ],
      },
      {
        heading: "7. Use a movie matching app",
        paragraphs: [
          "A movie matching app automates the two-list method. You each swipe through trailers on your own phone, whenever you have a spare few minutes, and the app tells you where your yeses overlap.",
          "ReelMatch works this way: swipe right on a trailer to add it to your watchlist, connect with your partner, and any title you both swiped right on becomes a match. Because the swiping happens ahead of time, the decision on the night is just picking from a list you have both already approved. ReelMatch is free on iOS and Android.",
        ],
      },
      {
        heading: "What to do when you genuinely have opposite taste",
        paragraphs: [
          "Opposite taste is a smaller problem than it looks, because overlap almost always exists at the edges of both people's preferences rather than in the middle. Someone who loves horror and someone who does not will usually still agree on a tense thriller.",
          "Look for the shared adjacent genre rather than a compromise between two favourites. And accept that some things are watched alone — protecting one or two shows as solo viewing takes the pressure off the ones you watch together.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long should choosing a film actually take?",
        answer:
          "Under five minutes. If it regularly takes longer, the problem is the method rather than the catalogue — you are almost certainly proposing titles one at a time instead of comparing two lists of pre-approved options.",
      },
      {
        question: "What is the best app for couples to decide what movie to watch?",
        answer:
          "The most useful apps are the ones that collect both people's preferences separately and then show only the overlap, rather than the ones that simply recommend popular titles. ReelMatch does this with trailers: you each swipe on your own phone, and titles you both swiped right on appear as matches. It is free on iOS and Android and works across streaming services.",
      },
      {
        question: "Does taking turns to choose actually work?",
        answer:
          "Yes, provided the turn is genuinely unappealable. Alternating works because it replaces a compromise nobody wanted with two choices each person actually made. It fails when the person not choosing keeps negotiating.",
      },
    ],
    related: ["how-movie-matching-apps-work", "how-to-pick-a-movie-for-a-group"],
  },

  {
    slug: "how-movie-matching-apps-work",
    title: "How movie matching apps work",
    metaTitle: "How Do Movie Matching Apps Work? A Plain-English Explanation",
    description:
      "A clear explanation of how movie matching apps work — swipe mechanics, how matches are calculated, where the film data comes from, and what they can and cannot do.",
    published: "2026-08-18",
    updated: "2026-08-18",
    answer:
      "A movie matching app records each person's yes-or-no swipes on films and TV series, then compares those swipes between connected users. When two or more people have swiped right on the same title, the app reports it as a match — a title everyone has independently approved, so no negotiation is needed.",
    intro: [
      "Movie matching apps are often described as 'Tinder for movies', which explains the interface but not the mechanism. The swipe is just an input method. What makes these apps useful is what happens to the swipes afterwards.",
      "This is what is actually going on under the hood, and what it means for whether one will help you.",
    ],
    sections: [
      {
        heading: "The core mechanism: intersection, not recommendation",
        paragraphs: [
          "A recommendation engine predicts what one person will like. A matching app does something simpler and more reliable: it finds the intersection of what several people have already said they like.",
          "There is no prediction involved in a match. If you swiped right on a film and your partner swiped right on the same film, the app is not guessing that you will both enjoy it — you have both already stated it. That is why matches feel more trustworthy than algorithmic suggestions, and it is the whole reason the format works for groups.",
        ],
      },
      {
        heading: "Step by step, what happens when you use one",
        ordered: true,
        list: [
          "The app shows you a deck of films and series, one at a time, usually with a trailer or poster.",
          "You swipe right to say you would watch it, or left to pass. Right swipes typically go onto a personal watchlist.",
          "You connect with friends, a partner or family members inside the app.",
          "The app compares your right swipes against theirs.",
          "Any title with a right swipe from everyone in the group is surfaced as a match.",
          "You pick from the match list — every option on it is already agreed.",
        ],
      },
      {
        heading: "Why trailers change the outcome",
        paragraphs: [
          "Apps that show a trailer rather than a poster and synopsis get better swipe data, because a trailer communicates tone and pace in a way text cannot. People say yes to films they would have skipped on a list, and no to films whose premise sounded better than the execution.",
          "The practical effect is a larger and more honest set of right swipes, which means more overlap and more matches.",
        ],
      },
      {
        heading: "Where the film data comes from",
        paragraphs: [
          "Almost no matching app maintains its own film database. The catalogue, artwork, cast and synopsis data typically comes from a shared source such as The Movie Database (TMDB), and trailers are usually streamed from YouTube.",
          "Streaming availability — which service a title is on in your country — comes from a separate availability dataset, which is why availability is sometimes slightly behind reality and varies by region.",
        ],
      },
      {
        heading: "How recommendations improve as you swipe",
        paragraphs: [
          "Most apps use your swipe history to shape the deck they show you next, weighting toward genres, eras and styles you have said yes to. This is a personalisation layer sitting on top of the matching, not a replacement for it.",
          "It matters more than it sounds: a deck full of titles you would obviously reject produces very few right swipes, and few right swipes means few matches. The apps that feel good to use are the ones where the deck gets relevant quickly.",
        ],
      },
      {
        heading: "What matching apps do well",
        list: [
          "Ending the negotiation — the shortlist arrives pre-agreed, so nobody has to reject anybody's suggestion.",
          "Working asynchronously — each person swipes whenever suits them, so the decision is already made before movie night starts.",
          "Scaling past two people, where manual shortlisting collapses entirely.",
          "Surfacing titles outside your usual habits, because trailers make people more willing to try something unfamiliar.",
        ],
      },
      {
        heading: "What they do not do",
        list: [
          "They do not stream anything. A matching app tells you what to watch and where it is available; you play it in your own streaming app.",
          "They cannot match on titles nobody has seen in the deck — matches only exist where both people were shown, and swiped on, the same title.",
          "Streaming availability is regional and occasionally out of date, so a title matched today may not be on the same service next month.",
          "They do not fix a group that has not actually agreed to use one. Everyone needs the app for the intersection to exist.",
        ],
      },
      {
        heading: "Free versus paid features",
        paragraphs: [
          "The core loop — swiping, watchlists and matching — is normally free, because a matching app is worthless without both people on it and a paywall on the core feature blocks that.",
          "Paid tiers usually add filtering. In ReelMatch, the Pro subscription adds streaming-provider filters, so the deck only contains titles on services you already pay for, genre filters, and instant TV launch, which opens a matched title on the TV directly.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do movie matching apps actually calculate a match?",
        answer:
          "By intersection. The app stores each user's right swipes and compares those sets between connected users. A title present in every connected user's right-swipe set is reported as a match. There is no scoring or prediction involved — a match means everyone has explicitly said yes to that title.",
      },
      {
        question: "Do both people need the app for matching to work?",
        answer:
          "Yes. A match is the overlap between two people's swipes, so both people need to be swiping inside the app. This is why the core matching features are almost always free.",
      },
      {
        question: "Do movie matching apps let you watch the film?",
        answer:
          "No. They are discovery and decision tools. They tell you what to watch and typically which streaming service has it, and you then play it in that service's own app. ReelMatch Pro can launch a matched title on your TV directly, but the playback still happens on the streaming service.",
      },
      {
        question: "Are movie matching apps free?",
        answer:
          "The core functionality usually is. ReelMatch is free to download and use on iOS and Android, with an optional Pro subscription for provider filters, genre filters and instant TV launch.",
      },
    ],
    related: [
      "how-to-decide-what-to-watch-with-your-partner",
      "how-to-pick-a-movie-for-a-group",
    ],
  },

  {
    slug: "how-to-pick-a-movie-for-a-group",
    title: "How to pick a movie for a group",
    metaTitle: "How to Pick a Movie for a Group Without the 40-Minute Argument",
    description:
      "How to choose a film for three or more people: why group decisions fail, the veto and shortlist methods that work, and how group matching apps solve it.",
    published: "2026-08-18",
    updated: "2026-08-18",
    answer:
      "To pick a film for a group, never open the decision to the whole room. Collect everyone's preferences privately first, build a shortlist of titles nobody objects to, and then choose from that shortlist by vote or at random. Group matching apps automate exactly this, which is why they scale better than group chat.",
    intro: [
      "Choosing a film for two people is awkward. Choosing for four is genuinely hard, and the difficulty grows much faster than the group does. Two people have one relationship to manage; four people have six.",
      "Group film choice fails for a structural reason, not a social one — and once you see the structure, the fixes are obvious.",
    ],
    sections: [
      {
        heading: "Why group decisions collapse",
        paragraphs: [
          "Open discussion is the worst possible mechanism for this. Whoever speaks first anchors the whole conversation, the most agreeable people never state a real preference, and every suggestion after the first gets measured against it rather than judged on its own.",
          "Then there is the veto problem: as the group grows, the chance that at least one person objects to any given title approaches certainty. A group of five will reject almost anything suggested aloud, not because the film is bad but because five independent chances to object is a lot of chances.",
          "The fix in both cases is the same — gather preferences privately and in parallel, then work with the aggregate.",
        ],
      },
      {
        heading: "The shortlist method",
        paragraphs: [
          "The most reliable manual approach, and it takes about ten minutes:",
        ],
        ordered: true,
        list: [
          "Agree the constraints first, before any title is named: streaming service, maximum runtime, and roughly the mood.",
          "Each person privately sends three titles that fit those constraints to one organiser.",
          "The organiser removes duplicates and reads out the combined list — with no attribution of who suggested what.",
          "Each person gets one veto, used silently by message to the organiser.",
          "Choose from what survives, by vote or at random.",
        ],
        },
      {
        heading: "Why anonymity matters",
        paragraphs: [
          "Detaching names from suggestions changes the outcome more than any other single step. People veto films, not friends, and nobody has to defend a choice in front of the room.",
          "It also stops the loudest person in the group from winning by default, which is the most common failure mode in a group of friends who otherwise get along fine.",
        ],
      },
      {
        heading: "Constrain hard, and constrain first",
        paragraphs: [
          "Groups do far better with a small pool. Before anyone names a title, settle:",
        ],
        list: [
          "Which streaming service — pick the one everybody present can actually watch tonight.",
          "Runtime ceiling — this alone removes a surprising share of the disagreement.",
          "Rewatch or new — a group that has already agreed to rewatch something has almost finished deciding.",
          "One genre, or one explicitly excluded genre if the group has a known dealbreaker.",
        ],
      },
      {
        heading: "Random choice is better than it sounds",
        paragraphs: [
          "Once you have a shortlist that nobody objects to, spending another fifteen minutes ranking it produces a worse evening than picking at random and starting immediately.",
          "Every title on a properly vetoed shortlist is acceptable to everyone by construction. Choosing between acceptable options is where groups waste the most time for the least benefit.",
        ],
      },
      {
        heading: "Using an app instead",
        paragraphs: [
          "A group matching app runs the shortlist method automatically and asynchronously. Everyone swipes through trailers on their own phone during the week; the app keeps only the titles the whole group swiped right on.",
          "The advantages over group chat are real: preferences are private, no one anchors anyone else, there is no organiser doing admin, and the shortlist is ready before people arrive rather than being built while everyone sits waiting.",
          "ReelMatch is built for this — it connects multiple friends and family members, not just pairs, and surfaces the titles everyone in the group has approved. It is free on iOS and Android, and Pro adds provider filters so the deck only contains titles on the services the group can actually watch.",
        ],
      },
      {
        heading: "A note on mixed households",
        paragraphs: [
          "Family groups have an extra constraint that friend groups do not: age suitability is a hard filter, not a preference. Apply it before anything else, then run the same shortlist process on what remains.",
          "It is also worth accepting that a family group will land on rewatches more often than a friend group will, and that this is a feature. A rewatch everyone already likes beats a new title half the room is unsure about.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best way to choose a movie for a large group?",
        answer:
          "Collect suggestions privately, strip the names off them, give everyone one silent veto, then pick from the survivors by vote or at random. The critical part is that nothing is discussed openly until there is a shortlist — open discussion lets the first speaker anchor the group and makes quiet members defer.",
      },
      {
        question: "How many people is too many for one film choice?",
        answer:
          "Manual methods start to break down at four or more, because each additional person adds another independent chance to veto any given title. Beyond four, an app that computes the overlap for you is considerably faster than any group chat.",
      },
      {
        question: "Can movie matching apps handle more than two people?",
        answer:
          "Yes. ReelMatch supports matching across a group of connected friends or family, surfacing titles everyone has swiped right on rather than only pairwise matches. Group matching is the case where this approach saves the most time.",
      },
    ],
    related: [
      "how-to-decide-what-to-watch-with-your-partner",
      "how-movie-matching-apps-work",
    ],
  },
];

export const guideBySlug = (slug: string) =>
  guides.find((guide) => guide.slug === slug);
