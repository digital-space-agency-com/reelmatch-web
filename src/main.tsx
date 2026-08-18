import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// The build writes each route as both /foo/index.html and /foo.html so that any
// static host resolves /foo without a redirect hop. If someone lands on the
// .html form directly (an old bookmark, an external link to /download.html),
// normalise the URL before React reads it — otherwise the router resolves
// "/download.html", matches nothing, and renders NotFound over markup that was
// prerendered for "/download".
const { pathname, search, hash } = window.location;
if (pathname.endsWith('.html')) {
  const clean = pathname === '/index.html' ? '/' : pathname.slice(0, -'.html'.length);
  window.history.replaceState(null, '', clean + search + hash);
}

const container = document.getElementById("root")!;

// The build prerenders every route to static HTML, so in production there is
// already markup to hydrate. Fall back to a fresh render in dev.
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
