# Roadmap — Portfolio (samylayaida.com)

> Executor contract: each night an unattended agent (`claude -p`, cwd = this repo) picks the FIRST unchecked task, does ONLY that task, verifies it per the task's Verify note, commits with an `autoloop:` prefix (one logical change per commit, never leave the tree dirty), then ticks the checkbox adding the date and a one-line result, and appends details to ## Log. If verification fails: revert, leave unchecked, add a `BLOCKED:` note.

## Context for the executor

- Next.js (App Router) + NextUI + Tailwind + framer-motion (~11.1, already installed). PUBLIC repo; pushing to `main` auto-deploys to samylayaida.com via Vercel.
- Verify baseline for any change: `npm ci` (first run) then `npx tsc --noEmit 2>/dev/null || true` and `npm run build` must succeed. Do not push if the build fails.
- Motion rules: CLAUDE.md "Interaction & motion" + the `interaction-craft` skill. `components/section.tsx` already has `Reveal` + `useReducedMotion` — the house pattern to extend.
- Never add a dependency unattended (framer-motion/NextUI already cover everything below).

## Tasks — interaction & motion (added 2026-07-10, Samy-approved)

- [x] **T01 — Motion tokens + reveal audit** (S) (2026-07-10: added easing/duration CSS vars + global prefers-reduced-motion block to styles/globals.css; replaced the 2 existing transition-all usages with property-specific transitions) — add the interaction-craft easing/duration CSS vars + `prefers-reduced-motion` block to the global stylesheet; sweep existing transitions: replace any `transition-all` and any default `ease` with property-specific transitions using the vars. Verify: build passes; `grep -rn 'transition-all' app components` empty.
- [ ] **T02 — Scroll reveals on all sections** (M) — apply the existing `Reveal` pattern (whileInView, once, ≤500ms, ease-out, stagger children ~40ms) to every homepage section that lacks it (skills, projects, writing, contact) and to /about. Nothing may delay reading: text must be visible within 500ms of entering the viewport. Verify: build passes; each section wrapped; reduced-motion path renders instantly (Reveal already handles it).
- [ ] **T03 — Project cards: hover lift + press** (S) — hover `translateY(-2px)` + shadow (200ms), `active:scale-[0.97]` press, on project cards and all buttons/links-as-buttons. Verify: build passes; transform/opacity-only (grep touched files for animated width/height/margin — none).
- [ ] **T04 — Micro-detail pass** (M) — animated link underlines (scaleX from 0, origin-aware for hover direction), subtle blur-in (`filter: blur(2px)→0` + opacity) on the hero intro, smooth theme-switch transition (colors only, 200ms). No infinite loops. Verify: build passes; hero renders instantly under reduced-motion.
- [ ] **T05 — Shared-element project detail (GATED: only if a project detail view exists or Samy adds one)** (M) — framer-motion `layoutId` transition from project card → detail. If no detail view exists, leave unchecked with a note — do NOT invent new pages unattended. Verify: build passes; transition works in dev.

## Log
- 2026-07-10: Samy approved unattended autoloop pushes to `main` (= production deploys via Vercel). The build-must-pass verify gate stands.
- 2026-07-10: T01 done — added `--ease-out-custom`, `--ease-in-out-custom`, `--ease-drawer`, `--dur-fast/base/slow` CSS vars and a global `prefers-reduced-motion` block to `styles/globals.css`. Swept `app`/`components` for `transition-all`: found only 2 (`components/BackToTopButton.tsx`, `components/writing.tsx`), replaced both with explicit `transition-[...]` property lists + the new easing vars. No literal default `ease` keyword usage found elsewhere (checked via grep). `npm run build` and `npx tsc --noEmit` pass; `grep -rn 'transition-all' app components` is empty.
