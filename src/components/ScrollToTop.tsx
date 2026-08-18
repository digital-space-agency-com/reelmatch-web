import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router keeps the window scroll position across route changes, so
 * following a link from halfway down a guide lands halfway down the next page.
 * Reset on every navigation, except when the URL carries a hash — those are
 * in-page anchors that do their own scrolling.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
