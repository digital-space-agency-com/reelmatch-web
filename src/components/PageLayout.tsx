import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import EsFooter from "./EsFooter";
import { useDocumentMeta } from "@/seo/useDocumentMeta";

type PageLayoutProps = {
  /** Route path — used to look up this page's title and description. */
  path: string;
  lang?: "en" | "es";
  children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ path, lang = "en", children }) => {
  useDocumentMeta(path);

  return (
    <div className="min-h-screen bg-white" lang={lang}>
      <Header lang={lang} />
      <main className="pt-28 pb-20">{children}</main>
      {lang === "es" ? <EsFooter /> : <Footer />}
    </div>
  );
};

export default PageLayout;
