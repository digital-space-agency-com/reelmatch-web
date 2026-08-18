import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppShell } from "./App";

export { pages } from "./seo/pages";
export { guides } from "./data/guides";
export { allFaqs, homepageFaqs } from "./data/faq";

export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppShell />
    </StaticRouter>,
  );
}
