# Checks

How to run this repository's checks, the rendered check, task worktrees and branch previews. Which
checks a change needs is in [Verification and handoff](../../AGENTS.md#verification-and-handoff);
first-time setup is in the [README](../../README.md#-developing).

## Worktrees

Each task works in a sibling worktree, `../beautyincode.se-<N>`, created by
[`work-ticket`](../../.agents/skills/work-ticket/SKILL.md#4-worktree). A new worktree has no
`.env` and no `node_modules`: copy the main checkout's `.env` (or `.env.example` when there is
none) into it and run `pnpm install --frozen-lockfile` there before any check.

## Checks and commands

| Command       | What it does                                                               |
| ------------- | -------------------------------------------------------------------------- |
| `pnpm test`   | Vitest, once: the data checks on `src/lib/data/` and the config tests.     |
| `pnpm lint`   | remark's link and anchor check on Markdown, Prettier's check, then ESLint. |
| `pnpm check`  | `svelte-kit sync` and `svelte-check`: types and Svelte diagnostics.        |
| `pnpm build`  | Production build with the Cloudflare adapter.                              |
| `pnpm format` | Fixes Prettier formatting.                                                 |

In Claude Code, a `PostToolUse` hook formats each edited file and a `Stop` hook runs `pnpm check`
and `pnpm lint` before a turn ends with uncommitted changes (`.claude/hooks/`).

## Rendered check

A change to what a page shows gets looked at in a browser before its pull request opens.

1. Start the dev server from the worktree with `pnpm dev` (port 9009), in the background, and wait
   until `http://localhost:9009/` responds. Leave a server that is already running alone, and stop
   the one you started when done.
2. Open each changed page with the browser tool you have. With Claude in Chrome, load its tools in
   one ToolSearch call and work in a new tab.
3. Check each page at 360 and 1280 pixels wide, in the light and the dark colour scheme: the change
   is there, nothing overflows or overlaps, images load, and links go where they should. For a
   speaker, check both `/speakers/#<slug>` and their slot on `/schedule/`.
4. Without a browser tool, fetch the page with `curl` to confirm the content renders, and say in
   the pull request that the visual check moved to the reviewer.

## Branch previews

Cloudflare Pages deploys every pull request's branch and comments its URLs on the pull request.
The Branch Preview URL stays the same across pushes; read it with:

```sh
gh pr view <PR> --json comments --jq '.comments[].body' | grep -o "https://[a-z0-9-]*\.beautyincode-se\.pages\.dev" | tail -1
```

Production is <https://beautyincode.se>, deployed from `master`.
