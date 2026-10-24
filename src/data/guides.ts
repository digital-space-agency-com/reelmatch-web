import type { Faq } from "./faq";
import { listGuidesEn } from "./guidesListEn";

export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  ordered?: boolean;
  /** A comparison table, rendered after the paragraphs and list. The first
   *  column is treated as the row header. */
  table?: { caption: string; columns: string[]; rows: string[][] };
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
    metaTitle: "What to Watch With Your Partner: 7 Methods That Work",
    description:
      "Seven practical ways to stop the nightly what-should-we-watch argument with your partner, from the two-list method to swipe-matching apps like ReelMatch.",
    published: "2026-08-18",
    updated: "2026-09-23",
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
          "An unbounded catalog is what makes the decision hard. Narrow it before anyone starts choosing:",
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
          "By the time Friday arrives the work is already done. You are picking from a list you both built rather than searching a catalog from scratch.",
        ],
      },
      {
        heading: "7. Use a movie matching app",
        paragraphs: [
          "A movie matching app, sometimes called a movie picker for couples, automates the two-list method. You each swipe through trailers on your own phone, whenever you have a spare few minutes, and the app tells you where your yeses overlap.",
          "ReelMatch works this way: say yes to a trailer to add it to your watchlist, connect with your partner, and any title you both said yes to becomes a match. Because the swiping happens ahead of time, the decision on the night is just picking from a list you have both already approved. ReelMatch is free on iOS and Android.",
        ],
      },
      {
        heading: "What to do when you genuinely have opposite taste",
        paragraphs: [
          "Opposite taste is a smaller problem than it looks, because overlap almost always exists at the edges of both people's preferences rather than in the middle. Someone who loves horror and someone who does not will usually still agree on a tense thriller.",
          "Look for the shared adjacent genre rather than a compromise between two favorites. And accept that some things are watched alone — protecting one or two shows as solo viewing takes the pressure off the ones you watch together.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long should choosing a film actually take?",
        answer:
          "Under five minutes. If it regularly takes longer, the problem is the method rather than the catalog — you are almost certainly proposing titles one at a time instead of comparing two lists of pre-approved options.",
      },
      {
        question: "What is the best app for couples to decide what movie to watch?",
        answer:
          "The most useful apps are the ones that collect both people's preferences separately and then show only the overlap, rather than the ones that simply recommend popular titles. ReelMatch does this with trailers: you each swipe on your own phone, and titles you both said yes to appear as matches. It is free on iOS and Android and works across streaming services.",
      },
      {
        question: "Does taking turns to choose actually work?",
        answer:
          "Yes, provided the turn is genuinely unappealable. Alternating works because it replaces a compromise nobody wanted with two choices each person actually made. It fails when the person not choosing keeps negotiating.",
      },
    ],
    related: ["movies-to-watch-as-a-couple", "best-movie-matching-apps", "how-movie-matching-apps-work", "how-to-pick-a-movie-for-a-group"],
  },

  {
    slug: "how-movie-matching-apps-work",
    title: "How movie matching apps work",
    metaTitle: "How Do Movie Matching Apps Work? A Plain-English Explanation",
    description:
      "How movie matching apps work: the swipe mechanics, how matches are calculated, how accurate they are when tastes differ, and what to look for in one.",
    published: "2026-08-18",
    updated: "2026-10-14",
    answer:
      "A movie matching app records each person's yes-or-no swipes on films and TV series, then compares those swipes between connected users. When two or more people have said yes to the same title, the app reports it as a match — a title everyone has independently approved, so no negotiation is needed.",
    intro: [
      "Movie matching apps are easy to describe by their swipe interface, but that explains the input, not the mechanism. The swipe is just a quick way to say yes or no. What makes these apps useful is what happens to the swipes afterwards.",
      "This is what is actually going on under the hood, and what it means for whether one will help you.",
    ],
    sections: [
      {
        heading: "The core mechanism: intersection, not recommendation",
        paragraphs: [
          "A recommendation engine predicts what one person will like. A matching app does something simpler and more reliable: it finds the intersection of what several people have already said they like.",
          "There is no prediction involved in a match. If you said yes to a film and your partner said yes to the same film, the app is not guessing that you will both enjoy it — you have both already stated it. That is why matches feel more trustworthy than algorithmic suggestions, and it is the whole reason the format works for groups.",
        ],
      },
      {
        heading: "Step by step, what happens when you use one",
        ordered: true,
        list: [
          "The app shows you a deck of films and series, one at a time, usually with a trailer or poster.",
          "You swipe to say yes if you would watch it, or skip it. Your yeses typically go onto a personal watchlist.",
          "You connect with friends, a partner or family members inside the app.",
          "The app compares your yeses against theirs.",
          "Any title with a yes from everyone in the group is surfaced as a match.",
          "You pick from the match list — every option on it is already agreed.",
        ],
      },
      {
        heading: "Why trailers change the outcome",
        paragraphs: [
          "Apps that show a trailer rather than a poster and synopsis get better swipe data, because a trailer communicates tone and pace in a way text cannot. People say yes to films they would have skipped on a list, and no to films whose premise sounded better than the execution.",
          "The practical effect is a larger and more honest set of yeses, which means more overlap and more matches.",
        ],
      },
      {
        heading: "Where the film data comes from",
        paragraphs: [
          "Almost no matching app maintains its own film database. The catalog, artwork, cast and synopsis data typically comes from a shared source such as The Movie Database (TMDB), and trailers are usually streamed from YouTube.",
          "Streaming availability — which service a title is on in your country — comes from a separate availability dataset, which is why availability is sometimes slightly behind reality and varies by region.",
        ],
      },
      {
        heading: "How recommendations improve as you swipe",
        paragraphs: [
          "Most apps use your swipe history to shape the deck they show you next, weighting toward genres, eras and styles you have said yes to. This is a personalization layer sitting on top of the matching, not a replacement for it.",
          "It matters more than it sounds: a deck full of titles you would obviously reject produces very few yeses, and few yeses means few matches. The apps that feel good to use are the ones where the deck gets relevant quickly.",
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
        heading: "How accurate are matches when everyone has different tastes?",
        paragraphs: [
          "A match itself can't be wrong in the way a recommendation can, because it isn't a prediction. Every person in the group has already said yes to that title. What changes with very different tastes is how many matches you get, not how good they are.",
          "Two people with opposite taste will still overlap, usually at the edges: a horror fan and someone who avoids horror often both say yes to a tense thriller or a mystery. To get more matches, swipe a bit more each, keep the deck broad at first rather than filtering to one genre, and judge by trailers, which show tone better than a title.",
          "Where accuracy does matter is the deck the app shows you. Most apps learn from your swipes and show more of what you say yes to. That part is a prediction, and it gets better the more each person swipes.",
        ],
      },
      {
        heading: "What to look for in a movie matching app for a group",
        list: [
          "Everyone swipes privately on their own phone, so nobody is swayed by the first person to speak.",
          "It supports three or more people, not just pairs.",
          "It works on everyone's phone. Mixed iPhone and Android groups need an app with both, or one that runs in a browser.",
          "It can limit the deck to the streaming services the group actually has.",
          "Trailers or enough detail to judge the tone before saying yes.",
          "A free plan that works for everyone, because everyone in the group needs the app.",
          "TV series as well as movies, if your group watches shows.",
          "A shared list of matches you can come back to on the next movie night.",
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
          "By intersection. The app stores each user's yeses and compares those sets between connected users. A title present in every connected user's yes list is reported as a match. There is no scoring or prediction involved — a match means everyone has explicitly said yes to that title.",
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
          "The core functionality usually is. ReelMatch is free to download and use on iOS and Android, with 15 swipes a day on the free plan and an optional Pro subscription that removes the limit and adds provider filters, genre filters and instant TV launch.",
      },
      {
        question: "How accurate are movie matching apps when everyone has different tastes?",
        answer:
          "A match is not a guess: it only appears when every person has said yes to the title, so it can't be wrong in the way a recommendation can. Very different tastes mean fewer matches rather than worse ones. Swiping a little more each and judging by trailers usually finds overlap, often in thrillers, mysteries and comedies.",
      },
    ],
    related: [
      "best-movie-matching-apps",
      "how-to-decide-what-to-watch-with-your-partner",
      "how-to-pick-a-movie-for-a-group",
    ],
  },

  {
    slug: "best-movie-matching-apps",
    title: "The best movie matching apps for couples, friends and families (2026)",
    metaTitle: "Best Movie Matching Apps (2026): 8 Compared Honestly",
    description:
      "Eight movie matching apps compared: which work on iPhone and Android, group size, trailers, streaming filters and what's free. From the makers of ReelMatch.",
    published: "2026-10-14",
    updated: "2026-10-24",
    answer:
      "The best movie matching app depends on who is watching. For a mixed iPhone and Android group that wants to judge by trailers, ReelMatch; for no install at all, Match a Movie; for a free family app with a kids filter, MatchWatch; for two iPhone users, Swyf; and for a couple who wants taste learning, Matched.",
    intro: [
      "A movie matching app lets two or more people say yes or no to movies and shows on their own phones, then shows only the titles everyone said yes to. There are now a lot of them, and they differ in ways that matter on the night: whether everyone's phone is supported, how many people can join, what's free and whether you can limit it to the streaming services you actually have.",
      "Full disclosure: we make ReelMatch, one of the apps below. To keep this fair, every detail about the other apps comes from their own website or app store listing, checked on October 14, 2026 (FlickPicker, October 24, 2026), and we say where another app is the better choice. If anything here is out of date, email hey@reelmatch.app and we'll fix it.",
    ],
    sections: [
      {
        heading: "Quick picks",
        list: [
          "Mixed iPhone and Android group, and you want to judge by trailers: ReelMatch.",
          "Nobody wants to install anything or create an account: Match a Movie, which runs in a web browser.",
          "A free app for a family of up to six, with a G and PG kids mode: MatchWatch.",
          "Two iPhone users who want movies and shows, trailers and no ads: Swyf.",
          "A couple who wants an app that learns their taste over time: Matched.",
          "Partner matching plus a party mode for groups, on iPhone or Android: Filmatch.",
          "Partner or group sessions with mood suggestions and streaming filters, on iPhone: FlickPicker.",
        ],
      },
      {
        heading: "Comparison table",
        paragraphs: [
          "\"Not stated\" means the app's own website or store listing doesn't say, not that the feature is missing. Prices are from the US App Store unless marked.",
        ],
        table: {
          caption: "Movie matching apps compared (checked October 14, 2026; FlickPicker October 24, 2026)",
          columns: ["App", "Works on", "Group size", "Trailers", "Streaming service filter", "TV shows", "Price"],
          rows: [
            ["ReelMatch (ours)", "iPhone, iPad, Android", "2 or more", "Yes, you swipe on trailers", "Yes, in Pro", "Yes", "Free with 15 swipes a day (plus bonus swipes for inviting friends); optional Pro subscription removes the limit"],
            ["Matched", "iPhone, Android", "2 (made for couples)", "Not stated", "Yes", "Yes", "Free; Premium $2.99 a month or $19.99 a year"],
            ["Match a Movie", "Any web browser, no download", "2 or more, no fixed limit", "Not stated", "Netflix, Prime Video and Disney+", "Not stated (describes films)", "Free, no account needed"],
            ["MatchWatch", "Web, iPhone, iPad, Android", "Up to 6", "Not stated", "Yes, plus a G/PG kids mode", "Listed as \"Movies & TV\"", "Free, no paid tier"],
            ["Swyf", "iPhone only", "Groups; one group of your own on the free plan", "Yes", "Yes", "Yes", "Free, no ads; Pro £1.99 a month, £17.99 a year or £24.99 once (UK App Store)"],
            ["Filmatch", "iPhone, Android", "2, plus Party Mode for groups", "Not stated", "Yes", "Not stated (describes films)", "Free to download"],
            ["FlickPicker", "iPhone (App Store link on its site)", "2 (partner up) or a group session", "Not stated", "Yes", "\"Movies and shows\"", "Not stated"],
            ["Movie Night (MWM)", "iPhone, iPad", "Group (\"everyone\")", "Yes", "Shows where to watch", "\"Film & TV\" in the name", "Free with optional premium subscriptions"],
          ],
        },
      },
      {
        heading: "ReelMatch: best for mixed iPhone and Android groups",
        paragraphs: [
          "Everyone swipes through trailers on their own phone and ReelMatch shows the movies and shows you all said yes to. It works for two people or a whole group, and iPhone and Android users can use it together. Trailers instead of posters help most when tastes are very different, because 30 seconds of trailer shows the tone faster than a title and a synopsis.",
          "Where it's not the best choice: the free plan has 15 swipes a day (inviting friends adds bonus swipes), filtering by streaming service is a Pro feature, and the app is in English only. If you want something entirely free with a service filter, MatchWatch or Match a Movie fit better.",
        ],
      },
      {
        heading: "Match a Movie: best if nobody wants to install an app",
        paragraphs: [
          "Match a Movie runs in any web browser. You pick a nickname, choose any mix of Netflix, Prime Video and Disney+, and everyone swipes until you find a movie you all like. There's no account, no download and no cost, and it covers 12 regions. Its own pages describe films rather than shows, and it doesn't cover services beyond those three.",
        ],
      },
      {
        heading: "MatchWatch: best free option for families",
        paragraphs: [
          "MatchWatch works on the web, iPhone, iPad and Android. A group can have up to six people, you set the streaming services the group has, and a Kids mood limits the deck to G and PG titles. It says there is no subscription, paid tier or swipe limit. Everyone needs an account (Apple, Google or email), and it lists the US, UK, Australia and New Zealand as regions.",
        ],
      },
      {
        heading: "Swyf: best for two iPhone users",
        paragraphs: [
          "Swyf is iPhone only. It covers movies and shows, each card has the poster, rating, runtime and a trailer, and swiping, watchlists, genres and streaming services are free and unlimited with no ads. The free plan includes one group of your own, and Swyf Pro adds unlimited groups, more filters and widgets. It's a good fit when everyone involved has an iPhone.",
        ],
      },
      {
        heading: "Matched: best for couples who want taste learning",
        paragraphs: [
          "Matched calls itself a movie app made just for couples. You rate movies and shows you've already seen, swipe on suggestions, and when you both swipe yes it's a match. It learns your taste over time, suggests titles that similar couples liked, and lets you filter matches by mood and streaming service. It's on iPhone and Android, with an optional Premium subscription. It's built for two people, and its iOS app was last updated in November 2024.",
        ],
      },
      {
        heading: "Filmatch and Movie Night",
        paragraphs: [
          "Filmatch, on iPhone and Android, connects you with a partner by code and has a Party Mode where the whole room swipes and it finds the films everyone agrees on. It filters by the services you have, plus genre, year, rating and runtime.",
          "Movie Night by MWM, on iPhone and iPad, is a swipe-and-match app with trailers that shows where to watch each title and can launch it directly. It's free with a range of optional premium subscriptions.",
        ],
      },
      {
        heading: "How to choose",
        list: [
          "Check everyone's phone first. An app is only useful if every person in the group can use it, so iPhone-only apps rule themselves out for mixed groups.",
          "Count the people. Some apps are built for two; for three or more, pick one that supports groups.",
          "Decide whether you need a streaming filter. If you only have one or two services, an app that limits the deck to them saves a lot of swiping.",
          "Look at the free plan, since everyone needs the app. Check swipe limits and what is behind a subscription.",
          "If your tastes are very different, prefer trailers. Tone is usually what people disagree on, and a trailer shows it faster than a poster.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best movie matching app for couples with different tastes?",
        answer:
          "Pick one where you each swipe privately and only the overlap is shown, so nobody has to argue for their choice. With very different tastes, trailers help, because tone is usually what you disagree on. ReelMatch (trailers, iPhone and Android), Swyf (trailers, iPhone only) and Matched (learns your taste, made for couples) all work this way.",
      },
      {
        question: "Is there a movie matcher that works across Netflix, Prime Video and Disney+?",
        answer:
          "Yes. Match a Movie limits the deck to any mix of Netflix, Prime Video and Disney+ in a web browser. MatchWatch, Swyf, Filmatch and Matched let you choose your streaming services. ReelMatch covers titles across Netflix, Prime Video, Disney+, Hulu, Apple TV+ and Max and shows where each is streaming; limiting the deck to your services is part of ReelMatch Pro.",
      },
      {
        question: "Are there free movie matching apps for families?",
        answer:
          "Yes. MatchWatch says it has no paid tier, supports up to six people and has a G and PG kids mode. Match a Movie is free with no account. ReelMatch is free on iPhone and Android with 15 swipes a day per person, and works for groups of three or more.",
      },
      {
        question: "Which movie matching apps work on both iPhone and Android?",
        answer:
          "ReelMatch, Matched, MatchWatch and Filmatch have apps for both, so iPhone and Android users can use them together. Match a Movie runs in any phone's web browser. Swyf and Movie Night are iPhone only.",
      },
    ],
    related: [
      "how-movie-matching-apps-work",
      "how-to-decide-what-to-watch-with-your-partner",
      "how-to-pick-a-movie-for-a-group",
    ],
  },

  {
    slug: "how-to-pick-a-movie-for-a-group",
    title: "How to pick a movie for a group",
    metaTitle: "How to Pick a Movie for a Group (Without the Argument)",
    description:
      "How to choose a movie for a group without endless scrolling: a 5-minute method, the veto and shortlist methods, and group matching apps.",
    published: "2026-08-18",
    updated: "2026-10-14",
    answer:
      "To pick a film for a group, never open the decision to the whole room. Collect everyone's preferences privately first, build a shortlist of titles nobody objects to, and then choose from that shortlist by vote or at random. Group matching apps automate exactly this, which is why they scale better than group chat.",
    intro: [
      "Choosing a film for two people is awkward. Choosing for four is genuinely hard, and the difficulty grows much faster than the group does. Two people have one relationship to manage; four people have six.",
      "Group film choice fails for a structural reason, not a social one — and once you see the structure, the fixes are obvious.",
    ],
    sections: [
      {
        heading: "The 5-minute version",
        ordered: true,
        list: [
          "Set two or three limits before anyone names a movie: which streaming service, how long, and roughly what mood.",
          "Everyone privately suggests up to three titles that fit, sent to one person or added to a shared list without names.",
          "Keep the shortlist to four to six titles, so you don't recreate the scrolling problem.",
          "Everyone gets one silent veto.",
          "Pick from what's left by vote or at random, and agree that nobody adds new suggestions once voting starts.",
        ],
      },
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
          "Each person privately sends three titles that fit those constraints to one organizer.",
          "The organizer removes duplicates and reads out the combined list — with no attribution of who suggested what.",
          "Each person gets one veto, used silently by message to the organizer.",
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
          "A group matching app runs the shortlist method automatically and asynchronously. Everyone swipes through trailers on their own phone during the week; the app keeps only the titles the whole group said yes to.",
          "The advantages over group chat are real: preferences are private, no one anchors anyone else, there is no organizer doing admin, and the shortlist is ready before people arrive rather than being built while everyone sits waiting.",
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
          "Yes. ReelMatch supports matching across a group of connected friends or family, surfacing titles everyone has said yes to rather than only pairwise matches. Group matching is the case where this approach saves the most time.",
      },
    ],
    related: [
      "movies-to-watch-with-friends",
      "best-movie-matching-apps",
      "how-to-decide-what-to-watch-with-your-partner",
      "how-movie-matching-apps-work",
    ],
  },
  ...listGuidesEn,
];

export const guideBySlug = (slug: string) =>
  guides.find((guide) => guide.slug === slug);
