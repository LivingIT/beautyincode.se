# Beauty in Code

Website for the Beauty in Code conference: SvelteKit (Svelte 5 runes) on Cloudflare Pages, mostly
static content. These instructions apply to every coding agent in this repository. CLAUDE.md
imports this file; keep the instructions here.

## Principle

**Simple and lean.** Choose the simplest solution that meets the need: the fewest parts a reader
must understand. Every rule, step, file, dependency and abstraction earns its place by current
use; prefer removing or merging over adding. A change to the way of working says what it removes
or merges, or why nothing can go.

## Start here

Read only the documentation your task needs:

- Working a ticket: run `/work-ticket <N>`; the [skill](.agents/skills/work-ticket/SKILL.md) is
  self-contained.
- Choosing, filing or planning work: read the [overview](WAY_OF_WORKING.md), then only the owners
  it links to.
- Writing or reviewing code or documentation: read [CODING_STANDARDS.md](CODING_STANDARDS.md)
  first.
- Editing content: read [Content](#content).

## Ground rules

- `pnpm` only: `npm`/`yarn` are blocked by a preinstall hook.
- Merging to `master` deploys to production.
- Commits and PR titles use Conventional Commits with an optional scope: `feat(videos): …`,
  `chore: add Linda's brief`, `fix(deps): …`.
- Copy `.env.example` to `.env` before building. All config is `PUBLIC_*` env vars, read through
  `src/lib/config.ts`. They are strings: `PUBLIC_TICKET_SALES_CLOSED=false` is the string
  `"false"`.

## Way-of-working check

Check each request against the workflow before changing repository files. A request deviates when
it asks for a file change that does not come from a skill the developer started, such as
`/work-ticket` or `/triage`, and is not a trivial content fix as
[Choosing a route](WAY_OF_WORKING.md#choosing-a-route) allows. During `/work-ticket`, a change the ticket's current
[contract](docs/agents/issue-tracker.md#contract) does not cover also deviates. Questions and
read-only investigation never deviate.

When a request deviates, reply with one line before acting and wait for the developer:

`> ⚠️ **WoW:** <what the workflow expects>. <suggested route>. Proceed anyway?`

Take the route from [Choosing a route](WAY_OF_WORKING.md#choosing-a-route). Warn once per request.
Proceeding skips only the suggested route; the [Git workflow](#git-workflow) still applies.

## Content

Most changes are content edits in `src/lib/data/`:

- **Speakers**: `speakers.ts`, keyed by slug (kebab-case full name). The bio is an HTML string.
  The photo lives at `static/images/speakers/<slug>.webp`.
- **Schedule**: `schedule.ts`. A talk sets `speakerSlug` to a key in `speakers.ts`; that slug also
  picks the photo and the `/speakers/#<slug>` link. Non-talk slots (breaks, opening) set `image`
  instead.
- **Videos**: `videos.ts`, grouped by conference year, newest year first. `videoId` is the YouTube
  ID; title format is `Speaker Name: "Talk Title"`.

Images are `.webp` under `static/images/`. Content comes from the ticket: never write a bio, talk
title, time or link the ticket does not give.

## Verification and handoff

A change is done when `pnpm test`, `pnpm lint` and `pnpm check` pass, and `pnpm build` succeeds
when you touched routes, components, styles, config or dependencies. A change to what a page
shows, content included, also needs the
[rendered check](docs/development/checks.md#rendered-check). CI runs tests, lint, check and build
on every pull request.

Report what changed, the checks performed and any remaining limitations. Distinguish a pull
request ready for review from merged work.

## Git workflow

Use a separate Git worktree and an `agent/` branch for every change. Commit and push only to that
branch, as fast-forwards; changes reach `master` through a pull request. The repository's Git
hooks in `.githooks/` enforce this, enabled by `pnpm install`, and Claude Code blocks skipping
them.

Authorized under this workflow:

- Local commits on an `agent/` branch in its own worktree.
- Assigning a ticket to the developer who started it, on their request.
- Pushing a task branch and opening its pull request, written with the `pr-description` skill and
  linking the ticket with `Closes #N`.
- Filing issues in `needs-triage`, never `ready-for-agent`, as `work-ticket` defines them.
- Giving up as `work-ticket` defines it: pushing the task branch, commenting, and replacing
  `ready-for-agent` with `needs-info`.
- An update run on your own open task pull request: merging `origin/master` into the task branch
  and pushing it, never rebasing or force-pushing.

Merging needs separate authorization: it deploys to production.

## Agent skills

Skills are versioned in `.agents/skills/`; the [skills README](.agents/skills/README.md) lists
them. A skill with `disable-model-invocation` is started by the developer, directly or by agreeing
to an outcome that a skill they started hands over to it, as `triage` hands larger work to
`to-spec`.

Claude Code subagents are versioned in `.claude/agents/`. `checks-runner` runs the test, check,
lint and build commands its caller selects, or reads a failed CI run, and reports only the
failures.
`ux-reviewer` reviews a page or piece of copy and recommends prioritized fixes without editing
files.

Explicit developer instructions override upstream workflow defaults. Reuse decisions and approvals
already given; ask only for unresolved choices the task requires.

### Issue tracker

GitHub Issues on LivingIT/beautyincode.se, via `gh`. Labels, the contract and the queries live in
[the issue tracker doc](docs/agents/issue-tracker.md).

### Domain docs

One root `GLOSSARY.md` for terminology and `docs/adr/` for product and architecture decisions,
both created when first needed. Before working in an area, read them if they exist, use the
glossary's terms, and surface a conflict with an ADR rather than override it. The
[`domain-modeling`](.agents/skills/domain-modeling/SKILL.md) skill holds the rules for writing
them.
