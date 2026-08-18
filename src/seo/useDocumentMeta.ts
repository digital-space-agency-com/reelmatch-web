import { useEffect } from "react";
import { pageByPath } from "./pages";
import { absoluteUrl } from "./site";

const setTag = (
  selector: string,
  create: () => HTMLElement,
  apply: (el: HTMLElement) => void,
) => {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  apply(el);
};

/**
 * Keeps the document head correct after a client-side route change. The
 * prerendered HTML already carries the right tags on first load; this only
 * matters once react-router takes over navigation.
 */
export function useDocumentMeta(path: string) {
  useEffect(() => {
    const meta = pageByPath(path);
    if (!meta) return;

    const canonical = absoluteUrl(path);
    document.title = meta.title;

    const metaTags: [string, string, string][] = [
      ["name", "description", meta.description],
      ["property", "og:title", meta.title],
      ["property", "og:description", meta.description],
      ["property", "og:url", canonical],
      ["name", "twitter:title", meta.title],
      ["name", "twitter:description", meta.description],
      ["name", "twitter:url", canonical],
    ];

    metaTags.forEach(([attr, key, value]) => {
      setTag(
        `meta[${attr}="${key}"]`,
        () => {
          const el = document.createElement("meta");
          el.setAttribute(attr, key);
          return el;
        },
        (el) => el.setAttribute("content", value),
      );
    });

    setTag(
      'link[rel="canonical"]',
      () => {
        const el = document.createElement("link");
        el.setAttribute("rel", "canonical");
        return el;
      },
      (el) => el.setAttribute("href", canonical),
    );
  }, [path]);
}
