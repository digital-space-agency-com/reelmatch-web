import React from "react";
import { Link } from "react-router-dom";

/**
 * A plain, factual summary near the top of the homepage. Search engines and
 * AI answers (Google AI Overviews, ChatGPT) quote short definitional passages
 * like this, so keep every line accurate and specific — no claims the stores
 * don't back up.
 */
const facts: { label: string; value: React.ReactNode }[] = [
  { label: "What it does", value: "Helps couples, friends and families agree on a movie or TV show to watch" },
  { label: "How it works", value: "Everyone swipes through trailers on their own phone; titles two or more people say yes to become matches" },
  { label: "Platforms", value: "iPhone, iPad and Android. iPhone and Android users can use it together" },
  { label: "Price", value: "Free. Optional ReelMatch Pro adds streaming-service and genre filters and instant launch on a smart TV" },
  { label: "Streaming services", value: "Covers titles on Netflix, Prime Video, Disney+, Hulu, Apple TV+ and Max. ReelMatch doesn't stream anything itself" },
  { label: "Data", value: "Movie and TV data from TMDB, trailers from YouTube" },
];

const guideLinks = [
  { to: "/guides/movies-to-watch-as-a-couple", text: "Movies to watch as a couple" },
  { to: "/guides/family-movies-to-watch", text: "Family movies to watch" },
  { to: "/guides/movies-to-watch-with-friends", text: "Movies to watch with friends" },
  { to: "/guides/how-to-decide-what-to-watch-with-your-partner", text: "How to decide what to watch with your partner" },
  { to: "/guides/how-to-pick-a-movie-for-a-group", text: "How to pick a movie for a group" },
  { to: "/guides/how-movie-matching-apps-work", text: "How movie matching apps work" },
];

const AtAGlance: React.FC = () => (
  <section id="what-is-reelmatch" className="section-container">
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
      <div className="lg:col-span-3">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What is ReelMatch?</h2>
        <p className="text-lg text-reelmatch-gray leading-relaxed mb-6">
          ReelMatch is a free movie matcher app for iPhone and Android. You and
          your partner, friends or family each swipe through movie and TV
          trailers on your own phone, and ReelMatch shows the titles you all
          said yes to, so you can stop scrolling and start watching.
        </p>
        <dl className="divide-y divide-gray-200 border-y border-gray-200">
          {facts.map((fact) => (
            <div key={fact.label} className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 py-3">
              <dt className="font-medium text-reelmatch-dark">{fact.label}</dt>
              <dd className="sm:col-span-2 text-reelmatch-gray">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-display font-bold mb-4">Picking something tonight?</h2>
        <ul className="space-y-3">
          {guideLinks.map((guide) => (
            <li key={guide.to}>
              <Link
                to={guide.to}
                className="font-medium underline underline-offset-4 hover:text-reelmatch-primary transition-colors"
              >
                {guide.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default AtAGlance;
