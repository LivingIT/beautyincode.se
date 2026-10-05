#!/usr/bin/env bash
# PostToolUse: format the file an agent just edited.
file=$(node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>console.log(JSON.parse(s).tool_input?.file_path??""))')
[ -n "$file" ] && [ -f "$file" ] || exit 0
cd "$CLAUDE_PROJECT_DIR" && pnpm exec prettier --write --ignore-unknown --log-level warn "$file" >&2
exit 0
