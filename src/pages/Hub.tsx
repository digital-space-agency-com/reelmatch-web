import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import StoreCTA from "@/components/StoreCTA";
import FaqList from "@/components/FaqList";
import { hubByPath, hubPages, linkInfo } from "@/data/hubPages";
import NotFound from "./NotFound";

const Hub: React.FC<{ path: string }> = ({ path }) => {
  const hub = hubByPath(path);
  if (!hub) return <NotFound />;
  const others = hubPages.filter((h) => h.path !== path);

  return (
    <PageLayout path={path}>
      <article className="container mx-auto px-4 max-w-3xl">
        <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: hub.name }]} />
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{hub.h1}</h1>
        <p className="text-xl text-reelmatch-gray mb-10">{hub.intro}</p>

        {hub.groups.map((group) => (
          <section key={group.heading} className="mb-10">
            <h2 className="text-2xl font-display font-bold mb-4">{group.heading}</h2>
            <ul className="space-y-3">
              {group.paths.map((p) => {
                const info = linkInfo(p);
                if (!info) return null;
                return (
                  <li key={p}>
                    <Link
                      to={info.to}
                      className="block rounded-xl border border-gray-100 shadow-subtle p-4 hover:border-reelmatch-primary transition-colors"
                    >
                      <span className="font-semibold text-reelmatch-dark">{info.title}</span>
                      <span className="block text-reelmatch-gray text-sm mt-1">{info.blurb}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}

        <StoreCTA />

        <section className="my-12">
          <h2 className="text-2xl font-display font-bold mb-6">Questions</h2>
          <FaqList faqs={hub.faqs} />
        </section>

        <nav aria-label="More topics" className="my-12">
          <h2 className="text-xl font-display font-bold mb-3">More topics</h2>
          <ul className="list-disc pl-6 space-y-1">
            {others.map((h) => (
              <li key={h.path}>
                <Link to={h.path} className="underline">
                  {h.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/guides" className="underline">
                All guides
              </Link>
            </li>
          </ul>
        </nav>
      </article>
    </PageLayout>
  );
};

export default Hub;
