# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/fc98fd37-a019-4c83-b618-618499d6a6d5

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/fc98fd37-a019-4c83-b618-618499d6a6d5) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/fc98fd37-a019-4c83-b618-618499d6a6d5) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)

## SEO / GEO build notes

`npm run build` does more than bundle. In order:

1. `tsc` — typecheck.
2. `vite build` — client bundle into `dist/`.
3. `vite build --ssr src/entry-server.tsx` — SSR bundle into `dist-ssr/`.
4. `node scripts/prerender.mjs` — renders every route to static HTML, then deletes `dist-ssr/`.

Why the prerender step exists: the deployed site is static GitHub Pages. Without
it, `dist/index.html` ships an empty `<div id="root">` and only crawlers that
execute JavaScript ever see the content. Googlebot renders JS; GPTBot,
ClaudeBot, PerplexityBot and CCBot largely do not — which made the AI-crawler
allowlist in `robots.txt` meaningless. After prerendering the homepage serves
~4,900 characters of text instead of ~430.

### Things that are generated, not committed

- `dist/sitemap.xml` — built from `src/seo/pages.ts`. Do not hand-edit a sitemap
  into `public/`; that is how the old one ended up 14 months stale.
- `dist/llms.txt` — built from `src/seo/pages.ts`, `src/data/faq.ts` and
  `src/data/guides.ts`.
- Per-route `<title>`, description, canonical, hreflang, Open Graph and JSON-LD —
  all injected by `scripts/prerender.mjs` from `src/seo/pages.ts`.

### Adding a page

1. Add the route to `src/App.tsx`.
2. Add an entry to `pages` in `src/seo/pages.ts` (title, description, sitemap
   settings, JSON-LD).
3. Call `useDocumentMeta("/your-path")` in the page component so client-side
   navigation updates the head too.

The prerender step picks it up automatically — including sitemap and llms.txt.

### Previewing the build

Open the built site over HTTP, never by double-clicking `dist/index.html`:

```sh
npm run build && npm run serve:dist   # http://localhost:8081
```

Over `file://` every absolute path (`/images/...`, `/assets/...`) resolves
against your filesystem root and 404s, so images and the JS bundle vanish. Since
the build now prerenders real HTML and `index.html` carries inline critical CSS,
the page still *looks* mostly rendered — which makes it read like a broken image
rather than the wrong protocol.

Note `npm run preview` (vite preview) does not resolve `/faq` to
`faq/index.html` the way GitHub Pages does, so it will serve the homepage at
sub-page URLs. Use `serve:dist` when checking routing.

### Duplicate static pages

`public/download.html` was a hand-written duplicate of the `/download` route.
It was deleted: with both it and the prerendered page present, GitHub Pages
resolves `/download` to `download.html` first, which had no site navigation —
so the primary Download link led to a dead end. Both `/download` and
`/download.html` now serve the same React page.

`public/privacy-policy.html` still exists and is the same situation waiting to
happen. It had drifted out of sync with the React page, which was missing a
"Links to Other Sites" section and a third-party disclosure sentence; both have
been ported across verbatim so the two now match. Deleting the static copy is
the next tidy-up, but it is legal text, so that is a call for a human.

### Known issue

`npm run lint` currently fails to start: ESLint 9.39 and the pinned
`typescript-eslint` 8.x disagree about the `no-unused-expressions` rule schema.
This predates the SEO work and needs a dependency bump to fix.
