# Skills

The skills in this folder, where they come from and how they are maintained. When to use them is
in [Agent skills](../../AGENTS.md#agent-skills).

Claude Code reads them through the `.claude/skills` symlink; on Windows, enable Git symlinks
(`core.symlinks`) before checkout. To run a skill, follow its `SKILL.md`.

The repo carries a skill only when its workflow invokes it, a skill it carries calls it, or
maintaining the repo's own skills and agent instructions needs it. General development tools, such
as prototyping or debugging, are each developer's own. All skills here are ours: the repo changes
them like any other file.

## Written here

- `work-ticket`: works one ticket from pick to pull request.
- `pr-description`: the pull request body template.

Both are adapted from the LivingIT/livingit-intelligence repository's skills of the same name,
without its test suite, design canvas and deployment scripts.

## Adapted from mattpocock/skills

Taken from https://github.com/mattpocock/skills, by way of LivingIT/livingit-intelligence. License:
MIT, full notice in [LICENSE-mattpocock](LICENSE-mattpocock).

- Reviewing: `code-review`.
- Maintaining skills and agent instructions: `writing-for-agents`.
- Issue intake and specs: `triage`, `grilling`, which `triage` calls, `to-spec` and `to-tickets`.
  They carry this repo's rules directly: its label names, its contract, content tickets and its
  search before publishing. There is no test suite, so tickets and specs name no test seams.
- Domain docs: `domain-modeling`, which `triage` calls.

Upstream's `tdd` and `codebase-design` are not carried, since the repo has no tests. A personal
mattpocock-skills plugin shows its own copies with a `mattpocock-skills:` prefix; this repo's
skills are the unprefixed ones.

## Maintenance

Upstream is a source of ideas, not of updates. When upstream changes a skill we adapted, review
the change and take what we want, like any other edit.
