# Beauty in Code

## 👨‍💻 Developing

Install packages.

⚠️ _**Note!** This project uses `pnpm`, not `npm`._

```bash
pnpm install
cp .env.example .env
```

`pnpm install` also enables the Git hooks in `.githooks/`, which refuse commits and pushes to
`master`.

Run the dev server

```bash
pnpm run dev
```

## 🛠️ Building

Create a production version of the site:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview` after running the build command.

## 🤖 Working with agents

Work flows from issue to pull request through agent skills: `/triage` shapes an idea or issue into
a ticket, `/work-ticket <N>` builds it on its own branch and opens a pull request. Start with
[WAY_OF_WORKING.md](WAY_OF_WORKING.md); agent instructions are in [AGENTS.md](AGENTS.md).

## 🚀 Deploy to production

Cloudflare Pages deploys automatically: merging to `master` deploys to production, and every pull
request gets a branch preview.
