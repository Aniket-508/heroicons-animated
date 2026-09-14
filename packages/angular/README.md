# Heroicons Animated Angular Demo (Analog)

This demo website runs on [Analog](https://analogjs.org/) with Angular and file-based routing.

## Scripts

- `pnpm dev`: Start local development server.
- `pnpm build`: Build client + SSR bundles.
- `pnpm serve:ssr`: Run the built SSR server from `dist/analog/server/index.mjs`.
- `pnpm build:lib`: Build the Angular icon library package.

## SSR Notes

- Server entry is `src/main.server.ts`.
- Page routes live under `src/app/pages/**/*.page.ts`.
- The site uses Analog file router via `provideFileRouter(...)`.

## Code Quality

- Check: `pnpm dlx ultracite check`
- Fix: `pnpm dlx ultracite fix`
