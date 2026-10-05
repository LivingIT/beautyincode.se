#!/usr/bin/env bash
# Stop: keep the agent working until types and lint are green.
active=$(node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>console.log(JSON.parse(s).stop_hook_active===true))')
[ "$active" = "true" ] && exit 0
cd "$CLAUDE_PROJECT_DIR" || exit 0
[ -z "$(git status --porcelain)" ] && exit 0

if ! out=$(pnpm check 2>&1); then
  printf 'pnpm check failed — fix before finishing:\n%s\n' "$(tail -40 <<<"$out")" >&2
  exit 2
fi
if ! out=$(pnpm lint 2>&1); then
  printf 'pnpm lint failed — fix before finishing (pnpm format fixes style):\n%s\n' "$(tail -40 <<<"$out")" >&2
  exit 2
fi
exit 0
