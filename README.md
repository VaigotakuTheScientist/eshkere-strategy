# Eshkere Strategy

Eshkere Strategy is Vadym Sulzhenko's persistent personal strategy for building and deploying the resources needed to contribute more effectively to AI safety.

This repository contains two deliberately separate surfaces:

- `docs/` contains the working strategy context used across Codex sessions.
- `web/` contains the manually curated public website. It does not publish the strategy documents automatically.

The website product scope and publication boundary are defined in [`docs/WEBSITE.md`](docs/WEBSITE.md).

## Website development

The website uses Astro, TypeScript, and plain CSS.

```sh
cd web
npm install
npm run dev
```

Validate and build it with:

```sh
npm run check
npm run build
```

The static output is written to `web/dist/`. Pushes to `main` deploy that output to GitHub Pages through the repository workflow.
