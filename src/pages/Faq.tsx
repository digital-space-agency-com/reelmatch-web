import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqList from "@/components/FaqList";
import StoreCTA from "@/components/StoreCTA";
import { extendedFaqs, homepageFaqs } from "@/data/faq";
import { guides } from "@/data/guides";

const FaqPage = () => (
  <PageLayout path="/faq">
    <div className="container mx-auto px-4 max-w-3xl">
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "FAQ" }]} />

      <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
        ReelMatch FAQ
      </h1>
      <p className="text-xl text-reelmatch-gray mb-10">
        Everything people ask before downloading ReelMatch — what it costs, what
        it covers, how matching works, and what happens to your data.
      </p>

      <h2 className="text-2xl font-display font-bold mb-6">The basics</h2>
      <FaqList faqs={homepageFaqs} />

      <h2 className="text-2xl font-display font-bold mt-12 mb-6">
        Matching, groups and Pro
      </h2>
      <FaqList faqs={extendedFaqs} />

      <StoreCTA />

      <h2 className="text-2xl font-display font-bold mb-4">Related guides</h2>
      <ul className="space-y-3">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link
              to={`/guides/${guide.slug}`}
              className="text-reelmatch-dark font-medium underline underline-offset-4 hover:text-reelmatch-primary transition-colors"
            >
              {guide.title}
            </Link>
            <p className="text-sm text-reelmatch-gray">{guide.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </PageLayout>
);

export default FaqPage;
