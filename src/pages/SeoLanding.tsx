import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import StoreCTA from "@/components/StoreCTA";
import FaqList from "@/components/FaqList";
import { landingPage } from "@/data/landingPages";
import { useWebCheckoutEnabled } from "@/lib/remoteConfig";
import NotFound from "./NotFound";

const SeoLanding: React.FC<{ path: string }> = ({ path }) => {
  const webCheckout = useWebCheckoutEnabled();
  const page = landingPage(path);
  if (!page) return <NotFound />;

  return (
    <PageLayout path={path}>
      <article className="container mx-auto px-4 max-w-3xl">
        <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: page.h1 }]} />
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{page.h1}</h1>
        <p className="text-xl text-reelmatch-gray mb-10">{page.intro}</p>

        <StoreCTA heading="Try it free on iPhone and Android" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">How it works</h2>
          <ol className="space-y-5">
            {page.steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex-none w-9 h-9 rounded-full bg-reelmatch-primary text-reelmatch-dark font-bold flex items-center justify-center">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-reelmatch-gray">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">{page.whyTitle}</h2>
          <div className="space-y-4 text-reelmatch-gray leading-relaxed">
            {page.why.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Questions</h2>
          <FaqList faqs={page.faqs} />
        </section>

        <section className="my-12">
          <h2 className="text-xl font-display font-bold mb-3">Keep reading</h2>
          <ul className="list-disc pl-6 space-y-1">
            {page.related.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="underline">
                  {link.text}
                </Link>
              </li>
            ))}
            {webCheckout && (
              <li>
                <Link to="/pro" className="underline">
                  ReelMatch Pro: unlimited swipes and filters
                </Link>
              </li>
            )}
          </ul>
        </section>
      </article>
    </PageLayout>
  );
};

export default SeoLanding;
