import type { Guide } from "./guides";

/**
 * English list guides, the counterparts of the Spanish /es/guias pages.
 *
 * US demand for this space is mostly list intent, far above the app-intent
 * queries the Sep 2026 audit measured (~700/mo): "movies to watch with family"
 * and "family movies to watch" 14.8k/mo each, "movies to watch with boyfriend"
 * 5.4k, "movies to watch with friends" 4.4k, "movie night ideas" 2.9k (OpenSEO,
 * 25 Sep 2026). Each guide pairs well-known titles with the choose-together
 * method. Never claim a title is on a specific service: catalogs change.
 */
export const listGuidesEn: Guide[] = [
  {
    slug: "movies-to-watch-as-a-couple",
    title: "Movies to watch as a couple (and how to pick one you'll both enjoy)",
    metaTitle: "Movies to Watch as a Couple: 15 Picks for Different Tastes",
    description:
      "15 movies to watch as a couple, grouped by the kind of night you want, from comedies to thrillers, plus a five-minute way to pick one without arguing.",
    published: "2026-09-25",
    updated: "2026-09-25",
    answer:
      "To pick a movie as a couple, each of you writes down three titles you'd actually watch tonight, you only choose from what overlaps, and you decide by mood rather than genre. Below are 15 picks grouped by the kind of night you want, and not all of them are romances.",
    intro: [
      "The problem is rarely that there's nothing to watch. It's that there's too much, and every suggestion starts a small negotiation: \"seen it\", \"too heavy for tonight\", \"what about something else?\". Forty minutes later you're still scrolling.",
      "This guide has two parts: a quick way to decide together, and a list of movies grouped by the kind of night you're after. They work just as well whether you're watching with a boyfriend, a girlfriend, a husband or a wife.",
    ],
    sections: [
      {
        heading: "How to pick in five minutes",
        ordered: true,
        list: [
          "Each of you writes down three movies or shows you'd actually watch tonight, without showing the other.",
          "Compare lists. If anything appears on both, that's your pick.",
          "If nothing overlaps, each person crosses one title off the other's list, no explanation needed.",
          "From what's left, choose by mood (funny, tense, easy) rather than genre.",
          "Still tied? Whoever didn't choose last time decides.",
        ],
      },
      {
        heading: "To laugh together",
        list: [
          "Crazy, Stupid, Love (2011): a sharp comedy with a great cast and a twist you won't see coming.",
          "Palm Springs (2020): two people stuck in the same repeating day. Light and genuinely original.",
          "Little Miss Sunshine (2006): a disastrous family road trip that's funny and warm in equal measure.",
        ],
      },
      {
        heading: "Thrillers you'll both get hooked on",
        list: [
          "Gone Girl (2014): a thriller about a marriage that gives you plenty to talk about afterward.",
          "Knives Out (2019): a classic whodunit with a lot of humor. Great for guessing together.",
          "Parasite (2019): starts as a comedy and turns into something else. Best watched knowing nothing.",
        ],
      },
      {
        heading: "Romance that isn't too sweet",
        list: [
          "Before Sunrise (1995): two strangers, one night in Vienna, and nothing but conversation.",
          "La La Land (2016): a modern musical with an ending you'll both have opinions about.",
          "Past Lives (2023): quiet, beautiful and easy to get lost in.",
        ],
      },
      {
        heading: "Adventure and sci-fi",
        list: [
          "Interstellar (2014): a space epic with real emotional pull. Save it for a night with no rush.",
          "Mad Max: Fury Road (2015): two hours of action with barely a pause.",
          "Dune (2021): sci-fi on a huge scale, and there's a sequel if you're hooked.",
        ],
      },
      {
        heading: "Animation that works for adults",
        list: [
          "Inside Out (2015): funny, and much deeper than it looks.",
          "Spider-Man: Into the Spider-Verse (2018): visually unlike anything else, even if superheroes aren't your thing.",
          "Spirited Away (2001): the Studio Ghibli classic worth seeing at least once.",
        ],
      },
      {
        heading: "Shows to watch as a couple",
        paragraphs: [
          "If you'd rather have something for several nights, a series saves you deciding every time. A few that tend to work across different tastes: The Office (2005), a comedy in short episodes; Ted Lasso (2020), upbeat and funny; Stranger Things (2016), adventure with 80s nostalgia; and Dark (2017), for anyone who likes piecing together a puzzle.",
          "Where each title is streaming changes by country and service, so check before you settle on one.",
        ],
      },
      {
        heading: "When your tastes are opposites",
        paragraphs: [
          "There's almost always overlap at the edges. Someone who loves horror and someone who can't stand it will usually both enjoy a good thriller. Someone who wants action and someone who wants drama tend to meet in a heist movie or a mystery.",
          "Taking turns works too: one night each of you picks, with the single rule that you can't choose something the other has already said they hate.",
        ],
      },
      {
        heading: "An app for picking movies as a couple",
        paragraphs: [
          "ReelMatch automates the two-list method. You each swipe through trailers on your own phone whenever you have a spare minute: say yes to what you'd watch and skip the rest. When you both say yes to the same title, it shows up in your list of matches.",
          "Because the deciding happens ahead of time, movie night is just picking from a list you've both already approved. ReelMatch is free on iPhone and Android.",
        ],
      },
    ],
    faqs: [
      {
        question: "What's a good movie to watch as a couple that isn't a romance?",
        answer:
          "A good mystery or comedy usually works better than a romance when your tastes differ. Knives Out (2019), Parasite (2019) and Palm Springs (2020) are picks most people enjoy, and they give you something to talk about afterward.",
      },
      {
        question: "What movies are good to watch with a boyfriend or girlfriend?",
        answer:
          "Pick by the mood you both want rather than the genre. For a light night, try Crazy, Stupid, Love (2011) or Palm Springs (2020). For something gripping, Gone Girl (2014) or Knives Out (2019). If you can't agree, each write down three options and choose from what overlaps.",
      },
      {
        question: "How do we choose when our tastes are completely different?",
        answer:
          "Each suggest three titles separately and keep the ones that overlap. If nothing does, each cross off one of the other's picks and decide by mood instead of genre. Thrillers and mysteries are usually common ground.",
      },
      {
        question: "Is there an app for picking a movie as a couple?",
        answer:
          "Yes. ReelMatch is a free app for iPhone and Android where you each swipe through trailers on your own phone, and it shows only the titles you both said yes to.",
      },
    ],
    related: [
      "how-to-decide-what-to-watch-with-your-partner",
      "movies-to-watch-with-friends",
      "family-movies-to-watch",
    ],
  },

  {
    slug: "family-movies-to-watch",
    title: "Family movies to watch: picks by age, and how to choose without a fight",
    metaTitle: "Family Movies to Watch: Picks by Age and How to Choose",
    description:
      "Family movies to watch, organized by age from little kids to teens, plus a simple way to choose one the whole family will enjoy without an argument.",
    published: "2026-09-25",
    updated: "2026-09-25",
    answer:
      "To choose a family movie, start from the youngest viewer's age, let everyone suggest one title, and pick the one nobody vetoes. Below are 16 family movies organized by age, plus classics that work for everyone.",
    intro: [
      "Choosing a family movie has an extra layer of difficulty: it's not just different tastes, it's different ages. What keeps a six-year-old happy bores a fourteen-year-old, and what the fourteen-year-old wants may not be right for the six-year-old.",
      "The good news is that plenty of movies work for everyone. Here's how to choose, and a list to start family movie night with.",
    ],
    sections: [
      {
        heading: "How to choose without anyone getting upset",
        ordered: true,
        list: [
          "Start from the youngest viewer's age. That decides which options are on the table.",
          "Everyone suggests one movie, kids included.",
          "Everyone gets one veto, no explanation needed.",
          "If more than one is left, pick the shortest. A 90-minute movie usually ends better than a three-hour one.",
          "Keep track of who chose, so next time it's someone else's turn.",
        ],
      },
      {
        heading: "For little kids",
        list: [
          "Toy Story (1995): the Pixar classic that still works at every age.",
          "Coco (2017): music, color and a story that moves kids and adults alike.",
          "My Neighbor Totoro (1988): gentle and magical, ideal for young children.",
          "Finding Nemo (2003): adventure, humor and an ending that leaves everyone happy.",
        ],
      },
      {
        heading: "Ages 8 to 12",
        list: [
          "Paddington 2 (2017): funny and kind, with humor adults enjoy just as much.",
          "Encanto (2021): a musical with songs that stick.",
          "How to Train Your Dragon (2010): dragons, adventure and a lot of heart.",
          "Harry Potter and the Sorcerer's Stone (2001): the perfect start to a family series.",
        ],
      },
      {
        heading: "With teens",
        list: [
          "Back to the Future (1985): a sci-fi comedy that never gets old.",
          "Jurassic Park (1993): adventure with real suspense. Some scenes may scare younger kids.",
          "The Hunger Games (2012): action and tension for teens and adults.",
          "Spider-Man: Into the Spider-Verse (2018): animation with a style teens love.",
        ],
      },
      {
        heading: "Classics that work for everyone",
        list: [
          "Up (2009): the first ten minutes get to everyone.",
          "The Incredibles (2004): superheroes, humor and a very recognizable family.",
          "WALL-E (2008): almost no dialogue at first, so it works even for the youngest.",
          "Inside Out (2015): fun for kids and eye-opening for adults.",
        ],
      },
      {
        heading: "Family movie night ideas",
        list: [
          "Pick the movie before dinner, not once everyone is on the couch.",
          "Pair the movie with a snack that fits it, like popcorn for a classic or tacos for Coco.",
          "Let the kids hand out the vetoes and keep score of who chose last.",
          "Keep a running list of movies everyone wants to see, so next time starts with options.",
        ],
      },
      {
        heading: "Check the age rating",
        paragraphs: [
          "Before choosing something for kids, check the rating and, if you're unsure, watch the trailer first. Two minutes of trailer tells you a lot about the tone and whether anything might scare them.",
        ],
      },
      {
        heading: "Choosing as a family with ReelMatch",
        paragraphs: [
          "In ReelMatch, each person swipes through trailers on their own phone and the app shows the titles everyone said yes to. It works with groups of three or more, so it suits families where several people have a phone.",
          "Seeing the trailer before deciding helps a lot with kids: you can tell quickly whether something will scare or bore them. ReelMatch is free on iPhone and Android.",
        ],
      },
    ],
    faqs: [
      {
        question: "What are good family movies to watch with young kids?",
        answer:
          "Animated movies with simple stories and little suspense are the safest bet: Toy Story (1995), Finding Nemo (2003) and My Neighbor Totoro (1988) work from a very young age and keep adults entertained too.",
      },
      {
        question: "How do I know if a movie is right for my kids?",
        answer:
          "Check the age rating, which usually appears on the service you're watching on, and watch the trailer first. A two-minute trailer shows the tone well and whether there are scenes that might scare them.",
      },
      {
        question: "What are some family movie night ideas?",
        answer:
          "Choose the movie before dinner, give everyone one suggestion and one veto, match a snack to the movie, and keep a running list of movies everyone wants to see so the next movie night starts with options.",
      },
      {
        question: "Can ReelMatch help a family choose a movie?",
        answer:
          "Yes, if several people in the family have a phone. Each person swipes through trailers on their own phone and the app shows the titles everyone said yes to. It's free on iPhone and Android.",
      },
    ],
    related: [
      "movies-to-watch-with-friends",
      "movies-to-watch-as-a-couple",
      "how-to-pick-a-movie-for-a-group",
    ],
  },

  {
    slug: "movies-to-watch-with-friends",
    title: "Movies to watch with friends: movie night ideas by genre",
    metaTitle: "Movies to Watch With Friends: Movie Night Ideas by Genre",
    description:
      "How to pick movies to watch with friends without an endless debate, plus 15 movie night ideas by genre, from comedies and horror to mysteries.",
    published: "2026-09-25",
    updated: "2026-09-25",
    answer:
      "To pick a movie with friends, don't open the decision to everyone at once: collect suggestions privately, build a shortlist nobody objects to, and vote from there. Below are 15 movies to watch with friends, from comedies to horror.",
    intro: [
      "Picking between two people is hard enough. With four or five, the debate can outlast the movie. It's not really about taste: the more people weigh in out loud, the easier it is for someone to say no.",
      "This guide covers how to decide quickly as a group, with ideas for different kinds of movie night.",
    ],
    sections: [
      {
        heading: "How to pick as a group without the endless debate",
        ordered: true,
        list: [
          "Before you meet up, everyone messages three titles they'd actually watch.",
          "One person collects them and removes duplicates. Anything suggested twice is already a favorite.",
          "Everyone gets one veto, used privately.",
          "Vote on what's left. If it's a tie, pick at random.",
          "Agree on a maximum length before you start. On a weeknight, under two hours is safer.",
        ],
      },
      {
        heading: "Funny movies to watch with friends",
        list: [
          "Superbad (2007): the definitive friends comedy.",
          "The Hangover (2009): a bachelor party that goes very wrong. Better in a group.",
          "Bridesmaids (2011): a comedy with scenes people quote for years.",
          "Wild Tales (2014): six darkly funny Argentine stories. Great for talking between segments.",
        ],
      },
      {
        heading: "Horror movies to watch with friends",
        list: [
          "Get Out (2017): horror with social commentary that sparks a lot of conversation afterward.",
          "The Conjuring (2013): classic scares, perfect for a group with the lights off.",
          "A Quiet Place (2018): constant tension. Even the group goes quiet.",
        ],
      },
      {
        heading: "Non-stop action",
        list: [
          "John Wick (2014): straightforward action, and several sequels if it lands.",
          "Mission: Impossible – Fallout (2018): some of the most spectacular action scenes around.",
          "Mad Max: Fury Road (2015): two hours of chase that nobody gets bored of.",
        ],
      },
      {
        heading: "Mysteries to solve together",
        list: [
          "Knives Out (2019): perfect for betting on who did it.",
          "Nine Queens (2000): con artists in Buenos Aires and an ending that surprises.",
          "The Invisible Guest (2016): a Spanish thriller full of twists. Don't read anything first.",
          "Gone Girl (2014): everyone comes away with their own theory.",
          "Parasite (2019): works just as well with a group as with two people.",
        ],
      },
      {
        heading: "Movie night ideas",
        list: [
          "Pick the movie before everyone arrives, not once you're all on the couch.",
          "Check where it's streaming and that someone has the account.",
          "Set a start time and stick to it. Latecomers can catch up.",
          "Get the snacks ready before you press play so you're not pausing every ten minutes.",
          "Try a theme night: a double feature, a director's best, or one movie from each person's childhood.",
        ],
      },
      {
        heading: "Picking as a group with ReelMatch",
        paragraphs: [
          "ReelMatch runs the shortlist method for you. During the week, everyone swipes through trailers on their own phone and the app keeps only the titles the whole group said yes to. By movie night, the list is ready.",
          "It works with groups of three or more, and iPhone and Android users can use it together. It's free.",
        ],
      },
    ],
    faqs: [
      {
        question: "What's a good movie to watch with friends?",
        answer:
          "It depends on the night, but comedies and mysteries tend to work best in a group because everyone gets involved: laughing together or trying to guess the ending. Superbad (2007), Knives Out (2019) and Wild Tales (2014) are safe bets.",
      },
      {
        question: "What are good horror movies to watch with friends?",
        answer:
          "Pick horror that's fun to react to together. Get Out (2017) gives you plenty to talk about afterward, The Conjuring (2013) delivers classic jump scares, and A Quiet Place (2018) keeps the whole room tense.",
      },
      {
        question: "How do you choose a movie with a big group?",
        answer:
          "Collect suggestions privately before you meet, build a shortlist with no duplicates, give each person one veto and vote on what's left. Nobody has to say no out loud, and the decision takes minutes.",
      },
      {
        question: "Is there an app for choosing a movie as a group?",
        answer:
          "Yes. In ReelMatch everyone swipes through trailers on their own phone and the app shows the titles the whole group said yes to. It's free on iPhone and Android.",
      },
    ],
    related: [
      "how-to-pick-a-movie-for-a-group",
      "movies-to-watch-as-a-couple",
      "family-movies-to-watch",
    ],
  },
];
