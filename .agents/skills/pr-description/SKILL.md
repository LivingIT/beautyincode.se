---
name: pr-description
description: 'Use when writing a PR body.'
---

Use this template for the PR body. Keep it short and skip preambles.

```markdown
## TLDR

<What this PR changes, in a few sentences. Name anything not verified.>

Closes #N

## How to test

1. Open [<page> in the branch preview](<branch preview URL>/<path>), and [in production](https://beautyincode.se/<path>) to compare.
2. <One action, using the page's exact labels.>
   - <What the reviewer should see.>
3. <When the change affects what a page shows, the visual check the [rendered check](../../../docs/development/checks.md#rendered-check) describes.>

<The expected visible change, or "No visible change is expected.">

<details>
<summary><b>Solution</b></summary>

<What this PR changes and why this approach, when the diff does not make it obvious.>

</details>

## Notes

<Risks and open questions for reviewers.>

### Standing findings

<Review findings left standing because the contract excludes their fix, each quoting the contract text it conflicts with.>

### Issues filed

<Links to issues filed in `needs-triage`, or commented on, while working the ticket.>
```

Write How to test when a reviewer can see the change in the browser, and cover there the acceptance criteria only a human can verify. The branch preview URL is in the Cloudflare Pages comment on the PR, so fill in the links with `gh pr edit <PR> --body-file -` once it appears; see [Branch previews](../../../docs/development/checks.md#branch-previews). Link production only when the page exists there.

Write one `Closes #N` line per ticket the PR completes. Elsewhere in the body, never put a closing keyword (close, closes, closed, fix, fixes, fixed, resolve, resolves, resolved) directly before an issue reference: GitHub closes that issue on merge. Write "#14 can be closed after merge", not "Close #14".

Drop a section that has nothing to say, and a heading left with nothing under it. Report only what was done and run.
