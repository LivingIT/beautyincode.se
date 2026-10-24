# Checks

How to run this repository's checks, the rendered check, the dev server, task worktrees and branch
previews. Which checks a change needs is in
[Verification and handoff](../../AGENTS.md#verification-and-handoff); first-time setup is in the
[README](../../README.md#-developing).

## Worktrees

Each task works in a sibling worktree, `../beautyincode.se-<N>`, created by
[`work-ticket`](../../.agents/skills/work-ticket/SKILL.md#4-worktree). A new worktree has no
`.env` and no `node_modules`: copy the main checkout's `.env` (or `.env.example` when there is
none) into it and run `pnpm install --frozen-lockfile` there before any check.

## Checks and commands

| Command         | What it does                                                                             |
| --------------- | ---------------------------------------------------------------------------------------- |
| `pnpm test`     | Vitest, once: the data checks on `src/lib/data/` and the config tests.                   |
| `pnpm lint`     | remark's link and anchor check on Markdown, Prettier's check, then ESLint.               |
| `pnpm check`    | `svelte-kit sync` and `svelte-check`: types and Svelte diagnostics.                      |
| `pnpm build`    | Production build with the Cloudflare adapter.                                            |
| `pnpm test:e2e` | Playwright page tests at 360 and 1280 pixels wide, on a fresh build with `.env.example`. |
| `pnpm format`   | Fixes Prettier formatting.                                                               |

In Claude Code, a `PostToolUse` hook formats each edited file and a `Stop` hook runs `pnpm check`,
`pnpm lint` and `pnpm test` before a turn ends with uncommitted changes (`.claude/hooks/`).

## Rendered check

A change to what a page shows gets checked as rendered pages before its pull request opens.

1. Run `pnpm test:e2e`. It builds the site and serves it with `pnpm preview` on port 4173, so
   stop anything else on that port first. A machine without Playwright's Chromium needs
   `pnpm exec playwright install chromium` once.
2. Write the visual check into the pull request's How to test, for the reviewer: each changed page
   at 360 and 1280 pixels wide, in the light and the dark colour scheme, showing the change with
   nothing overflowing or overlapping. For a speaker, cover both `/speakers/#<slug>` and their
   slot on `/schedule/`.

## Dev server

To look at the site, start `pnpm dev` from the worktree in the background (port 9009) and wait
until `http://localhost:9009/` responds. Leave a server that is already running alone, and stop
the one you started when done.

## Branch previews

Cloudflare Pages deploys every pull request's branch and comments its URLs on the pull request.
The Branch Preview URL stays the same across pushes; read it with:

```sh
gh pr view <PR> --json comments --jq '.comments[].body' | grep -o "https://[a-z0-9-]*\.beautyincode-se\.pages\.dev" | tail -1
```

Production is <https://beautyincode.se>, deployed from `master`.
