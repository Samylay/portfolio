# Portfolio — samylayaida.com (public site, Vercel auto-deploys from main)

- Pushing to `main` deploys to production immediately — verify locally (`npm run build`) before any push.
- PUBLIC repo: never commit secrets or personal data.
- Read @ROADMAP.md for the task queue.

## Interaction & motion (house doctrine, locked 2026-07-10)

- All UI work follows the `interaction-craft` skill (`~/.agents/skills/interaction-craft/SKILL.md` — Emil Kowalski doctrine).
- This is the rare-visit showcase → DELIGHT ALLOWED: scroll reveals (`whileInView`, once), framer-motion `layoutId` shared-element transitions, hover lift, staggered enters. framer-motion is already installed; `components/section.tsx` has the `Reveal` + `useReducedMotion` pattern — extend it, don't reinvent.
- Hard floor: animate only `transform`/`opacity`/`clip-path`/`filter`; ≤500ms for page-level reveals, ≤300ms for micro-interactions; custom easings (never default `ease`); nothing infinite/looping; nothing that delays reading content; reduced-motion respected everywhere.
