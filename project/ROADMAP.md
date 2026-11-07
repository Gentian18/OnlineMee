# Project Plan & Backlog — Online Mee

Maatschappelijk platform rond digitale inclusie. Voldoet aan de eisen van
Frontend Frameworks (permanente evaluatie) én Digital Impact.

## Fase 0 — Voorbereiding (geen code)
- [x] Concept, naam, doelgroep, vibe bevestigen
- [x] Kleurenpalet + logo (SVG) vastleggen
- [ ] Peer reviewer afspreken (Digital Impact)
- [ ] Netlify-account aangemaakt via "Sign up with GitHub"
- [x] `AGENTS.md` in de root
- [x] `ROADMAP.md` in de root (dit bestand)
- [x] Repo gekloond, `project/` map aangemaakt
- [ ] Branch protection op `main`: PR + 1 approval + Playwright status check

## Fase 1 — Setup & tooling (PR #1 `feature/setup`)
- [x] Vite + React + TypeScript geïnitialiseerd in `project/`
- [x] Mantine geïnstalleerd en geconfigureerd (`MantineProvider`)
- [x] React Router geïnstalleerd
- [x] TanStack Query geïnstalleerd en `QueryClientProvider` opgezet
- [x] Biome geconfigureerd, `pnpm run lint` slaagt
- [x] `pnpm run typecheck` slaagt
- [x] `playwright.config.ts` aangemaakt
- [x] `.gitignore`, `README.md`-skelet

## Fase 2 — Layout & Context (PR #2 `feature/layout-theme`)
- [x] `AppShell` met header (logo + nav) en footer
- [x] React Router routes voor alle 7 pagina's (lege placeholder-componenten)
- [x] SPA-links via `NavLink`, actieve state gemarkeerd
- [x] `ThemeContext` via `React.createContext` (licht/donker toggle in header)
- [x] Thema-keuze visueel zichtbaar (achtergrond/tekstkleur past aan)
- [x] Mobiel menu (Mantine `Burger` + `Drawer`) + toetsenbordnavigatie getest
- [x] Skip-to-content link

## Fase 3 — Home (PR #3 `feature/home-page`)
- [x] Hero met headline, visual (SVG/illustratie) en CTA
- [x] Missie & visie sectie
- [x] Impactdata (3–4 kerncijfers met bron/context)
- [x] CTA's naar Kennisbank, Quiz en Contact

## Fase 4 — Kennisbank met TanStack Query (PR #4 `feature/knowledge-tanstack`)
- [x] `public/data/knowledge.json` met minstens 12 items (titel, categorie, samenvatting, content, bron)
- [x] `useKnowledgeItems` hook met `useQuery` + `fetch`
- [x] Zoekveld (op titel/samenvatting) en categoriefilter (Mantine `Select`/`Chip`)
- [x] Resultaten in `Accordion` of `Card`-grid
- [x] Lege-staat-bericht ("Geen resultaten voor …")
- [x] `aria-live` op het resultaat-aantal

## Fase 5 — Quiz / Gamificatie (PR #5 `feature/quiz`)
- [x] Vragen uit `public/data/quiz.json` (minstens 5 vragen)
- [x] `useQuiz` hook of Context-state voor huidige vraag, gekozen antwoord, score
- [x] Voortgang (`Progress`) en feedback per antwoord
- [x] Eindscore + herstart-knop
- [x] Volledig toetsenbord-bedienbaar

## Fase 6 — Contact & spamfilter (PR #6 `feature/contact-form`)
- [x] Formulier: naam, e-mail, bericht
- [x] Honeypot-veld (visueel verborgen, voor schermlezers onzichtbaar via `aria-hidden` + `tabIndex={-1}`)
- [x] Client-validatie met duidelijke, B1-foutmeldingen
- [x] `aria-describedby` voor foutkoppeling
- [x] Succesmelding met `role="status"`

## Fase 7 — Contentpagina's (PR #7 `feature/content-pages`)
- [x] Over ons & Transparantie: team, adres, e-mail, KBO-nummer, jaarverslag-samenvatting, AVG/privacyverklaring
- [x] Nieuws & Actualiteiten: minstens 4 artikelen
- [x] Downloads: minstens 3 items (infographic, whitepaper, lespakket) met correcte `download`-attributen

## Fase 8 — Playwright & WCAG (PR #8 `feature/playwright-tests`)
- [x] `npx playwright install` uitgevoerd
- [x] `playwright.config.ts` met `webServer` en projecten desktop + mobiel
- [x] `tests/navigation.spec.ts`: routes laden, mobiel menu werkt
- [x] `tests/form.spec.ts`: validatie blokkeert, honeypot blokkeert inzending
- [x] `tests/accessibility.spec.ts`: `@axe-core/playwright` scan op alle 7 pagina's
- [x] Alle testen groen lokaal (17 passed, 1 skipped)

## Fase 9 — CI/CD & deployment (PR #9 `feature/ci-cd-netlify`)
- [ ] `.github/workflows/playwright.yml` aangemaakt (uit opgave)
- [ ] Branch protection: PR + 1 approval + status check "Playwright Tests"
- [ ] Netlify gekoppeld, base `project`, build `pnpm run build`, publish `dist`
- [ ] Live URL in `README.md`
- [ ] Eerste preview-deployment getest via een PR

## Fase 10 — Einddocumentatie
- [ ] `README.md` met alle 11 verplichte punten (zie hieronder)
- [ ] Reflectie op AI-code, moeilijkste onderdeel, zelf aangepaste code, verbeterpunten
- [ ] Alle checkboxes in dit bestand afgevinkt
- [ ] Autograder submission gedaan via GitHub (main branch)

## README verplichte punten (11)
1. Naam van de applicatie
2. Korte beschrijving
3. Belangrijkste functionaliteiten
4. Hoe je de applicatie gebruikt
5. Gebruikte technologieën
6. Gebruikte AI-tool(s)
7. Waarvoor je AI hebt gebruikt
8. Lijst van problemen en hoe je ze hebt opgelost
9. Moeilijkste onderdeel
10. Welke onderdelen van AI-code je zelf hebt aangepast
11. Wat je nog zou verbeteren met meer tijd