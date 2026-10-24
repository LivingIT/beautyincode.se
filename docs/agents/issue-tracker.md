# Issue tracker: GitHub

Issues and specs live in LivingIT/beautyincode.se. Use the `gh` CLI from the project worktree, with
`--body-file` for multiline bodies and comments. Renovate's Dependency Dashboard issue and pull
requests are outside this workflow; the queries below leave them out with `-author:app/renovate`.

## Searching before publishing

Before publishing any issue, by a skill or by hand, search for overlap, contradiction and earlier
rejection, then read the likely matches:

```sh
gh issue list --state open --search '<key terms> -author:app/renovate'
gh issue list --state closed --search '<key terms> reason:"not planned"'
```

Report each match with its link before publishing, and link related issues from the new one. Do
not publish an issue that duplicates or contradicts an open one; put the match to a maintainer
instead.

## Labels

Every issue carries a **state**, which drives the workflow, and a **kind**, which is informational.
When publishing an approved issue that needs one of these labels, create the label if it is
missing (`gh label create`). Do not rename or delete other labels.

### State

Every open issue has exactly one state, except a spec, which carries none. An open issue without a
state counts as `needs-triage`.

| Label             | Meaning                                                                    | Set by                                                                                       | Leaves by                                                               |
| ----------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `needs-triage`    | Not yet worked into shape.                                                 | Anyone filing outside `triage` and `to-tickets`, including agents filing defects they found. | `/triage` or a maintainer: to another state, or closed.                 |
| `needs-info`      | Waits on a human answer.                                                   | Triage, when the answer must come from someone absent; `work-ticket` giving up.              | The answer lands in the contract; a maintainer moves it on.             |
| `ready-for-agent` | Fully specified; an agent may take it if unassigned and unblocked.         | Triage, `to-tickets`, or a maintainer filing a ticket that passes the body rules.            | A merged pull request closes it; giving up moves it to `needs-info`.    |
| `ready-for-human` | Specified, but a person must do it (Cloudflare, ticketing, design, admin). | Triage; `to-tickets` when a maintainer says so.                                              | Closed when done; to `ready-for-agent` if an agent can do it after all. |
| `wontfix`         | Will not be done; closed as not planned with the reasoning in a comment.   | A maintainer.                                                                                | Final; a reopened issue goes to `needs-triage`.                         |

There is no blocked state; blocking is a [dependency](#dependencies).

### Kind

| Label           | Meaning                                                                           |
| --------------- | --------------------------------------------------------------------------------- |
| `content`       | Speakers, schedule, videos, images or page copy; no change to how the site works. |
| `bug`           | Something is broken.                                                              |
| `enhancement`   | A new feature or improvement.                                                     |
| `documentation` | Documentation, agent instructions or a recorded decision.                         |
| `spec`          | A spec, split into tickets by `to-tickets` and never worked directly.             |

## Contract

An issue's contract is its latest comment headed `## Agent Brief`; without one, its body. Other
comments are discussion: a decision recorded only there is not part of the contract. To change the
contract, post a new complete Agent Brief, or edit the body while no brief exists. `triage` writes
briefs in the format of its [AGENT-BRIEF.md](../../.agents/skills/triage/AGENT-BRIEF.md).

A contract settles the change's scope, behaviour and acceptance criteria; implementation details
are left to the agent. A fix to a defect in the lines the pull request changes, such as a review
finding, is within the contract unless it needs behaviour the contract excludes.

A content ticket's contract carries the content itself: the exact text, names, times, links and
YouTube IDs, and each image as an attachment or link. The agent publishes what is given and asks
for what is missing.

## Qualifying tickets

A ticket qualifies for `work-ticket` when it is open, labelled `ready-for-agent`, not labelled
`spec`, has no assignee (or only the developer starting it), all its blockers are closed, and its
contract passes the body rules: at least one checkable acceptance criterion, no deferred decision
about scope or behaviour, and, for a content ticket, all the content it publishes.

This query applies every rule except the body rules; check those by reading each result's
contract:

```sh
gh issue list --search 'is:open label:ready-for-agent -label:spec no:assignee -is:blocked sort:created-asc'
```

## Triage

These queries list what waits on triage: open issues in `needs-triage` or with no state, then
those in `needs-info`.

```sh
gh issue list --search 'is:open -author:app/renovate -label:spec -label:needs-info -label:ready-for-agent -label:ready-for-human -label:wontfix sort:created-asc'
gh issue list --search 'is:open label:needs-info sort:created-asc'
```

## Dependencies

A native GitHub issue dependency ("blocked by") is the only record of a blocker. Add one with
`gh issue edit <N> --add-blocked-by <M>`, and list a ticket's blockers with:

```sh
gh api graphql -f query='{ repository(owner: "LivingIT", name: "beautyincode.se") { issue(number: <N>) { blockedBy(first: 20) { nodes { number state labels(first: 10) { nodes { name } } } } } } }'
```

A ticket split from a spec is its sub-issue: `gh issue create --parent <spec> ...`. If the tracker
looks empty or unreachable, check that `gh auth status` shows an account that can read the
repository.
