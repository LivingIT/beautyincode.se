---
name: work-ticket
description: 'Work one ticket from pick to pull request, or bring your own conflicting pull request back to mergeable with an update run. Argument: the issue number; without one, list the tickets that can be started.'
disable-model-invocation: true
---

Work one ticket to an open pull request, or [give up](#giving-up) on it with a question on the
ticket. Labels, the [contract](../../../docs/agents/issue-tracker.md#contract) and the
[qualifying rules](../../../docs/agents/issue-tracker.md#qualifying-tickets) are in the
[issue tracker doc](../../../docs/agents/issue-tracker.md). Permissions and checks are in
[AGENTS.md](../../../AGENTS.md).

Choose implementation details yourself, within the contract and the docs that govern the area. Ask
the developer when a choice would change the contract or conflict with a governing doc.

## 1. Clean up

From the main checkout, run `git fetch --prune origin`. If it is on `master` with a clean status,
run `git merge --ff-only origin/master`; otherwise tell the developer why it was left alone. Never
reset, stash or switch branches.

For each other worktree on an `agent/` branch, read its merged pull request with
`gh pr list --head <branch> --state merged --json headRefOid`. When there is one, the worktree has
no local changes and its `HEAD` equals `headRefOid`, remove it with `git worktree remove --force`
(its `.env` and `node_modules` are untracked), then `git branch -D`. Report each worktree you keep,
and why.

Done when `master` is fast-forwarded or reported, and every `agent/` worktree is removed or
reported.

## 2. Pick

Without a number, run the [query](../../../docs/agents/issue-tracker.md#qualifying-tickets), check
each result's body rules, and also list open `ready-for-agent` tickets assigned only to you
(`--assignee @me`). When none qualifies, say so, naming any ticket held up by an open blocker.
Stop; the developer chooses.

With a number, read the issue and its comments. A `spec` is never worked: refuse, and offer
`/to-tickets` on it. Check each qualifying rule; if one fails, name it and stop. When the ticket is
already assigned only to you and has an open pull request on a branch starting `agent/<N>-`, read
`gh pr view <PR> --json mergeable`, again after a few seconds while it is UNKNOWN. On CONFLICTING
do an [update run](#update-run) instead of the steps below; on MERGEABLE report that there is
nothing to update. Then stop.

Done when one ticket is chosen, an update run is due, or you have said why nothing can start.

## 3. Claim

Skip this when the ticket is already assigned only to you. Otherwise get your login with
`gh api user --jq .login`, run `gh issue edit N --add-assignee <login>` and re-read the assignees.
If the command fails or anyone else is also assigned, name them and stop.

Done when you are the ticket's only assignee.

## 4. Worktree

Reuse a clean worktree on a branch starting `agent/<N>-`. Otherwise fetch `origin`. If `origin` has
such a branch, from an earlier give-up, run `git worktree add ../beautyincode.se-<N> <branch>`. If
not, run `git worktree add -b agent/<N>-<slug> ../beautyincode.se-<N> origin/master`, where the
slug is two to four words from the title, then `git branch --unset-upstream` in it. Prepare it as
[Worktrees](../../../docs/development/checks.md#worktrees) says. Work from the worktree from here
on.

Done when the working directory is the worktree, on the ticket's branch, with `.env` and installed
dependencies.

## 5. Build

The ticket's contract is the work.

A content ticket: edit `src/lib/data/` and `static/images/` as [Content](../../../AGENTS.md#content)
and [Images](../../../CODING_STANDARDS.md#images) say, using exactly the content the contract
gives. Download each attached image with `curl -L` into a scratch folder outside the repository
before converting it. If anything the change needs is missing, [give up](#giving-up) with a
question for it.

A documentation ticket: edit the files against its acceptance criteria.

Any other ticket: in Claude Code, first send the `Explore` subagent the contract and ask for a
**pattern map**, under 300 words: for each acceptance criterion, the existing code to follow, as
`file:line` with one line on what to copy, and every other file a change of this kind touches
(such as `sitemap.xml`, navigation or `config.ts`). Then read the files you will change, and build
with the [`tdd`](../tdd/SKILL.md) skill at the contract's test seams. A contract with
`No automated test: <reason>` gets no new test.

Commit to the current branch with Conventional Commit messages. Done when each acceptance
criterion is met by a commit, or noted for the pull request as one only a human can verify.

## 6. Review

Run `code-review` against `origin/master`, with the ticket as the spec. Fix the findings within
the contract and commit; a finding whose fix needs behaviour the contract excludes stands. Run the
checks [AGENTS.md requires](../../../AGENTS.md#verification-and-handoff), in Claude Code through
the `checks-runner` subagent with the worktree's path, and fix from its report. Run the
[rendered check](../../../docs/development/checks.md#rendered-check) when the change affects what a
page shows. Any later commit except review fixes, including a merge, needs another `code-review`
against a freshly fetched `origin/master`.

List each other concrete defect you saw in material read for the ticket and ask the developer once
which to fix here (after [changing the contract](../../../docs/agents/issue-tracker.md#contract)
with their approval) and which to file. File with
[a search first](../../../docs/agents/issue-tracker.md#searching-before-publishing), then
`gh issue create --label needs-triage --label <kind> --body-file -`, starting the body with "Found
while working #N." and giving evidence.

Done when the checks pass, every finding is fixed or stands, each other defect is fixed or filed,
and no commit since the last review needs another.

## 7. Submit

Run `git push -u origin <branch>` and `gh pr create --base master` with a Conventional Commit
title and a body written with `pr-description`: `Closes #N`, the criteria only a human can verify,
any standing findings and any issues filed. When the Cloudflare Pages comment appears, fill in the
[branch preview](../../../docs/development/checks.md#branch-previews) links with
`gh pr edit <PR> --body-file -`. Report the pull request's URL and stop: merging deploys to
production and belongs to a maintainer.

## Update run

In the worktree on the pull request's branch (create it from `origin` if missing; it must be clean
and contain the pull request's `headRefOid`), run `git fetch origin` and `git merge origin/master`.
Resolve each conflict so both sides' intent survives, commit the merge, do step 6, and run
`git push origin <branch>`. Never rebase or force-push; if the push is rejected, tell the developer
and stop.

Done when the push succeeds and the pull request's URL is reported.

## Giving up

Give up instead of opening a pull request when the acceptance criteria are unclear or contradict
the code, content is missing, the checks cannot be made green, or a conflict needs a judgement, and
the developer cannot settle it in the session. Commit any work in progress and push the branch; in
an update run, abort an unfinished merge and push nothing. Comment the specific question, what was
tried and a link to any pushed branch with `gh issue comment N --body-file -`, then
`gh issue edit N --remove-label ready-for-agent --add-label needs-info`. Report the comment's URL
and stop.
