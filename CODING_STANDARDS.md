# Coding standards

The rules for writing and reviewing code and documentation in this repository. The `code-review`
Standards axis checks changes against this file. Code and documentation follow the
[Simple and lean](AGENTS.md#principle) principle.

Rules `pnpm lint` enforces (Prettier, ESLint and remark's link check) are not repeated here.

## Writing

Write documentation, issues, code, commits and pull requests in English. The site is in English
(`lang="en"`). Preserve the facts of the source when rewriting or summarising text, and never
invent content: a speaker bio, talk abstract, time or link comes from the ticket.

## Documentation

Each topic has one owner; see [Where rules live](WAY_OF_WORKING.md#where-rules-live). An owner
states the current answer. When the answer changes, rewrite the owner in place, without a change
log; Git history keeps the earlier text. Other documents link to the owner instead of repeating it.
Refer to a section by an anchor link to its heading, so lint catches a renamed heading.

## Technology and code

- SvelteKit with the Cloudflare adapter, Svelte 5 runes and TypeScript. Pages render on the
  server; do not turn off SSR.
- Styles are plain CSS: component styles in the component's `<style>` block, global styles and
  design tokens as custom properties in `src/styles/`. Use the tokens in `variables.css` for
  colours; do not add Tailwind, Sass or a component library.
- Read configuration only through `src/lib/config.ts`; add a new setting there and to
  `.env.example`.
- Keep content in `src/lib/data/` as typed data, not in components. Components and routes render
  it.
- Name component files in camelCase (`speakersList.svelte`), as the existing ones are.
- Type component props with an `interface Props` and `$props()`.
- Follow Svelte's [best practices](https://svelte.dev/docs/svelte/best-practices). Prefer `$state`
  and `$derived`; use `$effect` only to sync with something outside Svelte, never to derive state.
  Listen on `window` and `document` with `<svelte:window>` and `<svelte:document>`, and on media
  queries with `MediaQuery` from `svelte/reactivity`.
- Do not add a dependency for what a few lines of code can do.

## Interface and accessibility

Use semantic HTML and native controls first. Account for keyboard operation, visible focus,
headings in order, accessible names, alt text on meaningful images, contrast in both the light and
dark colour scheme, and `prefers-reduced-motion` for animation. Layouts work from 320 pixels wide
without horizontal scrolling.

## Images

Images live under `static/images/`. Photos and other raster images are `.webp`, logos and icons
are `.svg`, and the Open Graph image is `og-image.jpg`, kept as JPEG because not every social
crawler reads WebP. A speaker photo is 400 by 400 pixels at `static/images/speakers/<slug>.webp`.
Crop a source image square around the face, then convert it with
`cwebp -q 80 -resize 400 400 <source> -o <target>`; the result stays well under 50 kB.
