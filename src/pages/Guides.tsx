import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import StoreCTA from "@/components/StoreCTA";
import { guides } from "@/data/guides";

const GuidesIndex = () => (
  <PageLayout path="/guides">
    <div className="container mx-auto px-4 max-w-3xl">
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Guides" }]} />

      <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
        Guides to deciding what to watch
      </h1>
      <p className="text-xl text-reelmatch-gray mb-10">
        Choosing a film with other people is a solvable problem. These guides
        cover what actually works — with a partner, with a group, and with an
        app doing the work for you.
      </p>

      <div className="space-y-6">
        {guides.map((guide) => (
          <article
            key={guide.slug}
            className="bg-white rounded-xl p-6 shadow-subtle border border-gray-100"
          >
            <h2 className="text-xl font-semibold mb-2">
              <Link
                to={`/guides/${guide.slug}`}
                className="hover:text-reelmatch-primary transition-colors"
              >
                {guide.title}
              </Link>
            </h2>
            <p className="text-reelmatch-gray mb-3">{guide.description}</p>
            <Link
              to={`/guides/${guide.slug}`}
              className="text-sm font-medium underline underline-offset-4"
            >
              Read the guide
            </Link>
          </article>
        ))}
      </div>

      <StoreCTA />
    </div>
  </PageLayout>
);

export default GuidesIndex;
