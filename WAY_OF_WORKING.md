# Delivery workflow

This document is the process for humans and the owner of what no skill owns: roles, routing,
decisions, where rules live and terms. How each step runs is in its skill; labels, the contract
and the queries are in [the issue tracker doc](docs/agents/issue-tracker.md).

Everything enters through intake: `/triage` turns an idea or an issue into a [contract](#terms),
an issue whose scope, behaviour and acceptance criteria are settled. `/work-ticket` takes a ready
contract to a pull request. A maintainer merges, which deploys to production.

```text
┌─ INTAKE  (maintainer, /triage) ───────────────────────────────────┐
│ an idea, an issue, a defect, content to publish                   │
│ one ticket → /triage writes it                                    │
│ more than one → /to-spec → /to-tickets                            │
│ a question for someone absent → needs-info                        │
└─────────────────────────────────┬─────────────────────────────────┘
                                  │ contract: ready-for-agent
                                  ▼
┌─ /work-ticket N  (agent, for the developer) ──────────────────────┐
│ claim → worktree → build → review → open pull request             │
│ stuck → question on the ticket, needs-info                        │
│ pull request conflicts → update run                               │
└─────────────────────────────────┬─────────────────────────────────┘
                                  │ pull request + branch preview
                                  ▼
┌─ MERGE  (maintainer) ─────────────────────────────────────────────┐
│ CI green, preview reviewed, merge → production                    │
└───────────────────────────────────────────────────────────────────┘
```

Renovate's dependency pull requests bypass this flow: a maintainer reviews and merges them
directly.

## Principles

The principle every route judges against, Simple and lean, is in
[AGENTS.md](AGENTS.md#principle).

1. **The contract is the interface.** Work is defined by an issue whose scope, behaviour and
   checkable acceptance criteria are settled.
2. **Agents decide within the contract, and ask at its edges.** They ask the developer when a
   choice would change the contract or conflict with a governing doc.
3. **Humans own priorities, content, decisions and merges.** Agents own everything between a ready
   ticket and an open pull request.
4. **One place per rule.** Each rule is stated once, in the file that owns it. Other files link to
   it.
5. **Enforce by check what a check can enforce.** Prose is for judgement.

## Roles

Maintainers own priorities, product decisions, content and acceptance. A maintainer is a role, not
a person: anyone with admin rights acting to triage, answer `needs-info`, decide scope or merge.
Developers start the skills and own their tickets. Agents implement and verify assigned work.

## Choosing a route

Work is routed by its size. Triage asks questions until checkable acceptance criteria can be
written without an open decision.

| Scenario                         | Route                                                                                                                    |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| One ticket, clear                | File it as an issue; it enters triage, or a maintainer files it ready (see [State](docs/agents/issue-tracker.md#state)). |
| One ticket, fuzzy                | `/triage` writes the ticket.                                                                                             |
| More than one ticket             | `/triage` → `/to-spec` → `/to-tickets`, in one session.                                                                  |
| A trivial content fix in-session | Ask the agent directly; it still works on an `agent/` branch and opens a pull request.                                   |

## Decisions

Triage, `/to-spec` and `/to-tickets` make no repo edits. Resolved terms and ADR text are written
out in the conversation, and the ticket that builds the decision carries "add glossary entry or ADR
X, with this text" as an acceptance criterion.

## Working a ticket

**Starting.** In a fresh session in the main checkout, run `/work-ticket <N>`, or run it without a
number to see what you can start. As assignee you own the ticket and its pull request until it is
merged.

**When it moves to `needs-info`**, read the ticket's latest comment: it names the question and
links any pushed branch. Get the answer into the [contract](docs/agents/issue-tracker.md#contract),
move the ticket back to `ready-for-agent`, and run `/work-ticket <N>` again.

**When the pull request conflicts** after a merge to `master`, run `/work-ticket <N>` again; it
merges `master` in with an [update run](.agents/skills/work-ticket/SKILL.md#update-run).

**When CI is red or review asks for changes**, fix it in an interactive session on the task
branch. When a fix departs from the contract, change the contract first.

## Where rules live

Each file owns what its name says: the README local setup, the glossary business terms,
CODING_STANDARDS how code and documentation are written, and code and configuration what they do.
The owners that are not obvious from a name:

- The principle, content layout, agent permissions, the way-of-working check and the checks before
  a pull request: [AGENTS.md](AGENTS.md).
- Labels, the contract, qualifying rules, triage queues and dependencies:
  [the issue tracker doc](docs/agents/issue-tracker.md).
- How each step runs: the skill that runs it, listed in [the skills README](.agents/skills/README.md).
- Running checks, the rendered check, the dev server, worktrees and previews:
  [Checks](docs/development/checks.md).

## Terms

- **Contract**: what a ticket asks for; which text that is is in
  [Contract](docs/agents/issue-tracker.md#contract).
- **Agent Brief**: the contract `triage` writes, as a comment headed `## Agent Brief` or as the
  body of an issue it files.
- **Content ticket**: a ticket that changes only speakers, schedule, videos, images or page copy.
- **Branch preview**: the Cloudflare Pages deployment of a pull request's branch.
- **Update run**: bringing your own conflicting pull request back to mergeable by merging `master`
  into it.
- **Giving up**: ending work on a ticket without a pull request because a human must answer a
  question first.
