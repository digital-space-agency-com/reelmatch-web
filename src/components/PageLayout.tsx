import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useDocumentMeta } from "@/seo/useDocumentMeta";

type PageLayoutProps = {
  /** Route path — used to look up this page's title and description. */
  path: string;
  children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ path, children }) => {
  useDocumentMeta(path);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28 pb-20">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
