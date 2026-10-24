// Claude Code PreToolUse hook for Bash: blocks Git commands that skip the
// repository's Git hooks (--no-verify, -n on git commit, or a -c override
// of core.hooksPath), so AGENTS.md#git-workflow stays enforced. Configured
// in .claude/settings.json.
import { readFileSync } from 'node:fs';

const { tool_input } = JSON.parse(readFileSync(0, 'utf8'));
const command = tool_input?.command ?? '';

// Splits a command into simple commands of words, with shell quotes removed.
function simpleCommands(text) {
  const commands = [[]];
  const pattern = /(&&|\|\||[;|&\n])|(?:'[^']*'|"(?:\\.|[^"\\])*"|[^\s;&|'"])+/g;
  for (const [token, separator] of text.matchAll(pattern)) {
    if (separator) commands.push([]);
    else commands.at(-1).push(unquote(token));
  }
  return commands;
}

function unquote(word) {
  return word.replace(
    /'([^']*)'|"((?:\\.|[^"\\])*)"/g,
    (_, single, double) => single ?? double.replace(/\\(.)/g, '$1'),
  );
}

// Global git options that take the next word as their value.
const GIT_VALUE_OPTIONS = ['-C', '-c', '--git-dir', '--work-tree', '--namespace', '--config-env'];
// git commit options that take the next word, or the rest of a short
// option cluster, as their value.
const COMMIT_SHORT_VALUE_OPTIONS = 'mFCcSt';
const COMMIT_LONG_VALUE_OPTIONS = [
  '--message',
  '--file',
  '--reuse-message',
  '--reedit-message',
  '--template',
  '--author',
  '--date',
  '--fixup',
  '--squash',
  '--trailer',
];

function skipsHooks(words) {
  const program = words.findIndex((word) => /(^|\/)git$/.test(word));
  if (program === -1) return shellCommandSkipsHooks(words);

  let index = program + 1;
  for (; index < words.length && words[index].startsWith('-'); index++) {
    const option = words[index];
    if (option === '-c' && /^core\.hookspath=/i.test(words[index + 1] ?? '')) return true;
    if (GIT_VALUE_OPTIONS.includes(option)) index++;
  }
  const subcommand = words[index];
  const args = words.slice(index + 1);
  if (subcommand !== 'commit') return args.includes('--no-verify');

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--') return false;
    if (arg === '--no-verify') return true;
    if (COMMIT_LONG_VALUE_OPTIONS.includes(arg)) i++;
    if (!/^-[^-]/.test(arg)) continue;
    for (const [position, flag] of [...arg.slice(1)].entries()) {
      if (flag === 'n') return true;
      if (COMMIT_SHORT_VALUE_OPTIONS.includes(flag)) {
        if (position === arg.length - 2) i++;
        break;
      }
    }
  }
  return false;
}

// Checks the script of `sh -c`, `bash -c` or `zsh -c`.
function shellCommandSkipsHooks(words) {
  if (!/(^|\/)(ba|z)?sh$/.test(words[0] ?? '')) return false;
  const script = words[words.indexOf('-c') + 1];
  return words.includes('-c') && script !== undefined && simpleCommands(script).some(skipsHooks);
}

if (simpleCommands(command).some(skipsHooks)) {
  console.error(
    "Blocked: this Git command skips the repository's Git hooks (--no-verify, -n on git commit, or a core.hooksPath override), which enforce AGENTS.md#git-workflow. Run it without that option.",
  );
  process.exit(2);
}
