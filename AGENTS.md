# Beauty in Code

Website for the Beauty in Code conference: SvelteKit (Svelte 5 runes) on Cloudflare, mostly static content.

## Ground rules

- `pnpm` only: `npm`/`yarn` are blocked by a preinstall hook.
- Merging to `master` deploys to production. Work on a branch and open a PR.
- Commits and PR titles use Conventional Commits with an optional scope: `feat(videos): …`, `chore: add Linda's brief`, `fix(deps): …`.
- Copy `.env.example` to `.env` before building. All config is `PUBLIC_*` env vars, read through `src/lib/config.ts`. They are strings: `PUBLIC_TICKET_SALES_CLOSED=false` is the string `"false"`.

## Done means green

A change is done when `pnpm lint` and `pnpm check` both pass, and `pnpm build` succeeds when you touched routes, config or dependencies. CI runs all three on every PR.

## Content

Most changes are content edits in `src/lib/data/`:

- **Speakers**: `speakers.ts`, keyed by slug (kebab-case full name). The bio is an HTML string. The photo lives at `static/images/speakers/<slug>.webp`.
- **Schedule**: `schedule.ts`. A talk sets `speakerSlug` to a key in `speakers.ts`; that slug also picks the photo and the `/speakers/#<slug>` link. Non-talk slots (breaks, opening) set `image` instead.
- **Videos**: `videos.ts`, grouped by conference year, newest year first. `videoId` is the YouTube ID; title format is `Speaker Name: "Talk Title"`.

Images are `.webp` under `static/images/`.

## Agent skills

### Issue tracker

GitHub Issues on LivingIT/beautyincode.se, via `gh`. See `docs/agents/issue-tracker.md`.

### Triage labels

Default vocabulary: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: root `CONTEXT.md` + `docs/adr/`. See `docs/agents/domain.md`.
