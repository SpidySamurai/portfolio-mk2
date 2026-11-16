# Portfolio Mk2 (2025)

My 2025 portfolio design, kept live as a snapshot of how my code evolved. Live at [**mk2.javierchiortiz.dev**](https://mk2.javierchiortiz.dev).

Every year I redesign my portfolio, and instead of deleting the old version I keep it running. Each generation is a Mark:

| Mark | Years     | Where                                                                                                                            |
| ---- | --------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Mk1  | 2021-2022 | [mk1.javierchiortiz.dev](https://mk1.javierchiortiz.dev), code in [portfolio-mk1](https://github.com/SpidySamurai/portfolio-mk1) |
| Mk2  | 2025      | [mk2.javierchiortiz.dev](https://mk2.javierchiortiz.dev), this repo                                                              |
| Mk3  | 2026      | [javierchiortiz.dev](https://javierchiortiz.dev), the current site                                                               |

## About this snapshot

This code was extracted from the javierchiortiz.dev repository at commit `a368fa6`, where the design lived at the `/2025` route. Here it is a standalone app that serves the same page at `/es` and `/en`.

It is frozen on purpose. To run without a backend or secrets, three things were left out of the original:

- the Marvel Rivals rank in the gamer card, which needs a private API key
- the PostHog analytics provider
- the WhatsApp link in the hero and the footer

The live Discord presence in the gamer card still works, through the public Lanyard API.

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · next-intl (English and Spanish) · next-themes · Framer Motion · pnpm

## Run it locally

```bash
pnpm install
pnpm dev
```

Then open [localhost:3000](http://localhost:3000). No environment variables are needed.

```bash
pnpm build    # production build
pnpm lint     # ESLint
```

## License

All Rights Reserved. Source available for viewing and reference only. See [LICENSE](LICENSE).

---

Built by [Javier Chi Ortiz](https://javierchiortiz.dev).
