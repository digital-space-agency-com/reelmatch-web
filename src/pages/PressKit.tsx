import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { APP_STORE_URL, DEMO_VIDEO, INSTAGRAM_URL, PLAY_STORE_URL, YOUTUBE_URL } from "@/seo/site";

/**
 * Press kit for journalists, roundup writers and bloggers. Every fact here must
 * be something the stores or the product actually back up: no ratings, no user
 * counts beyond Play's public "10K+ downloads".
 */
const shortDescription =
  "ReelMatch is a free app for iPhone and Android that helps couples, friends and families agree on what to watch. Everyone swipes through movie and TV trailers on their own phone, and the app shows the titles they all said yes to.";

const longDescription = [
  "Most households know the routine: two people, one evening, and forty minutes of scrolling before anyone presses play. ReelMatch replaces that negotiation. Each person swipes through trailers on their own phone, saying yes to what they'd watch and skipping the rest. Any title two or more connected people say yes to becomes a match, so the decision on the night is simply picking from a list everyone has already approved.",
  "ReelMatch leads with trailers rather than posters, because most disagreements about what to watch are really about tone, and thirty seconds of trailer settles that faster than a synopsis. It works for couples, friend groups of three or more, and families, and iPhone and Android users can use it together.",
  "The app covers titles across Netflix, Prime Video, Disney+, Hulu, Apple TV+, Max and many regional services, and shows where each title is streaming. ReelMatch is free; ReelMatch Pro adds streaming-service and genre filters and instant launch on a smart TV. Title data comes from TMDB and trailers from YouTube.",
];

const facts: [string, React.ReactNode][] = [
  ["Name", "ReelMatch"],
  ["Developer", "Digital Space Agency UG"],
  ["Platforms", "iPhone, iPad and Android"],
  ["Price", "Free. Optional ReelMatch Pro subscription"],
  ["Availability", "On the App Store since 2023; launched on Product Hunt in May 2025"],
  ["Downloads", "10K+ on Google Play"],
  ["Languages", "App in English. Website in English and Spanish"],
  ["Streaming coverage", "Netflix, Prime Video, Disney+, Hulu, Apple TV+, Max and many regional services"],
  ["Data sources", "TMDB for titles and availability, YouTube for trailers"],
  ["Website", <a href="https://reelmatch.app" className="underline underline-offset-4">reelmatch.app</a>],
];

const screenshots = [
  { src: "/images/press/reelmatch-swipe-trailers.jpg", alt: "ReelMatch swipe card showing a movie with its trailer, genres and rating", caption: "Swipe through trailers" },
  { src: "/images/press/reelmatch-where-to-watch.jpg", alt: "ReelMatch card flipped to show cast and the streaming services where the title is available", caption: "Cast and where to watch" },
  { src: "/images/press/reelmatch-swipe-card.jpg", alt: "ReelMatch swipe card with like, skip and hide buttons", caption: "Say yes or skip" },
];

const logos = [
  { href: "/images/press/reelmatch-logo-wordmark.png", preview: "/images/press/reelmatch-logo-wordmark.png", label: "Logo with wordmark and tagline (PNG, transparent, 2363×1182)" },
  { href: "/images/press/reelmatch-app-icon.png", preview: "/images/press/reelmatch-app-icon.png", label: "App icon (PNG, 500×500)" },
];

const angles = [
  "Couples with different tastes: why most \"we can't agree\" moments are about tone, not genre.",
  "Picking a movie for a group of three or more, where deciding out loud breaks down.",
  "Family movie night across ages, and using trailers to check what's right for kids.",
  "An independent app taking on streaming's choice overload, now reaching Spanish-speaking audiences.",
];

const PressKit = () => (
  <PageLayout path="/press">
    <article className="container mx-auto px-4 max-w-4xl">
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Press kit" }]} />
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-5">ReelMatch press kit</h1>
      <p className="text-lg text-reelmatch-gray mb-10 max-w-3xl">
        Everything you need to write about ReelMatch: descriptions, key facts,
        logos and screenshots. Free to use in coverage of ReelMatch. For
        interviews, review access or anything else, email{" "}
        <span className="font-medium text-reelmatch-dark select-all">hey@reelmatch.app</span>.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-display font-bold mb-3">In one sentence</h2>
        <p className="text-lg leading-relaxed border-l-4 border-reelmatch-primary pl-5">{shortDescription}</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-display font-bold mb-3">About ReelMatch</h2>
        <div className="space-y-4 text-reelmatch-gray leading-relaxed max-w-3xl">
          {longDescription.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-display font-bold mb-4">Fact sheet</h2>
        <dl className="divide-y divide-gray-200 border-y border-gray-200">
          {facts.map(([label, value]) => (
            <div key={label} className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 py-3">
              <dt className="font-medium text-reelmatch-dark">{label}</dt>
              <dd className="sm:col-span-2 text-reelmatch-gray">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-display font-bold mb-4">Screenshots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {screenshots.map((shot) => (
            <figure key={shot.src}>
              <a href={shot.src} target="_blank" rel="noopener noreferrer">
                <img src={shot.src} alt={shot.alt} loading="lazy" className="w-full rounded-xl shadow-subtle bg-reelmatch-black" />
              </a>
              <figcaption className="text-sm text-reelmatch-gray mt-2">{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
        <p className="text-sm text-reelmatch-gray mt-4">
          Open an image to save it at full size. Screenshots show third-party
          movie and TV artwork, which belongs to its respective owners.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-display font-bold mb-4">Logos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {logos.map((logo) => (
            <a key={logo.href} href={logo.href} target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-gray-200 p-6 hover:border-reelmatch-primary transition-colors">
              <img src={logo.preview} alt="" loading="lazy" className="h-28 w-auto mx-auto object-contain mb-4" />
              <span className="block text-sm text-center text-reelmatch-dark">{logo.label}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-display font-bold mb-4">Video</h2>
        <p className="text-reelmatch-gray max-w-3xl">
          A 26-second demo is on YouTube:{" "}
          <a href={`https://www.youtube.com/watch?v=${DEMO_VIDEO.id}`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
            {DEMO_VIDEO.name}
          </a>
          . A longer walkthrough of every feature is available on request.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-display font-bold mb-4">Story ideas</h2>
        <ul className="list-disc pl-6 space-y-2 text-reelmatch-gray max-w-3xl">
          {angles.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
        <p className="text-reelmatch-gray mt-4">
          Background reading:{" "}
          <Link to="/guides/movies-to-watch-as-a-couple" className="underline underline-offset-4">movies to watch as a couple</Link>,{" "}
          <Link to="/guides/family-movies-to-watch" className="underline underline-offset-4">family movies to watch</Link> and{" "}
          <Link to="/guides/how-movie-matching-apps-work" className="underline underline-offset-4">how movie matching apps work</Link>.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-display font-bold mb-4">Links and contact</h2>
        <ul className="space-y-2 text-reelmatch-gray">
          <li>Press and interviews: <span className="font-medium text-reelmatch-dark select-all">hey@reelmatch.app</span></li>
          <li><a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">App Store</a> · <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Google Play</a></li>
          <li><a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">YouTube</a> · <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Instagram</a></li>
          <li>Spanish-language site: <Link to="/es" hrefLang="es" className="underline underline-offset-4">reelmatch.app/es</Link></li>
        </ul>
      </section>
    </article>
  </PageLayout>
);

export default PressKit;
