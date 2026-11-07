# Online Mee

## 1. Naam van de applicatie
Online Mee

## 2. Korte beschrijving
Online Mee is een maatschappelijk webplatform rond digitale inclusie. Het helpt mensen die digitaal kwetsbaar zijn (ouderen, mensen met een beperking, nieuwkomers) om wegwijs te worden in digitale diensten. De site biedt een kennisbank, een quiz, nieuws, downloads en contactinformatie — allemaal in B1-taal, met hoog contrast en volledige toetsenbordnavigatie.

## 3. Belangrijkste functionaliteiten
- **Kennisbank** met 12+ items, zoekveld en categoriefilter (TanStack Query + fetch naar lokale JSON)
- **Quiz** met 5 vragen, voortgang, feedback per antwoord en eindscore
- **Contactformulier** met client-validatie, honeypot-spamfilter en B1-foutmeldingen
- **Nieuws & Actualiteiten** met 4 artikelen
- **Downloads** met 3 items (infographic, whitepaper, lespakket)
- **Over ons & Transparantie** met team, adres, KBO-nummer en privacyverklaring
- **Licht/donker thema** via React Context
- Volledig responsive (320px–1280px) en WCAG AA

## 4. Hoe je de applicatie gebruikt
Live site: https://onlinemee.netlify.app/

1. Navigeer via het menu (of het mobiele menu) naar Kennisbank, Quiz, Contact, Nieuws, Downloads of Over ons.
2. Gebruik in de Kennisbank het zoekveld en de categoriefilter om items te vinden.
3. Start de quiz en beantwoord de vragen; je ziet je score aan het eind.
4. Vul het contactformulier in — validatie blokkeert onvolledige inzendingen.

Lokaal draaien:

```bash
cd project
pnpm install
pnpm dev
```

Open http://localhost:5173/.

## 5. Gebruikte technologieën
- React 19 + TypeScript + Vite
- React Router (SPA-navigatie)
- TanStack Query (data fetching uit lokale JSON)
- Mantine (UI-componenten)
- React Context (thema)
- Biome (linting + formatting)
- Playwright + @axe-core/playwright (tests + WCAG-scan)
- Netlify (deployment)

## 6. Gebruikte AI-tool(s)
ChatGPT / Claude (via de chatinterface).

## 7. Waarvoor ik AI heb gebruikt
- Structuur van de mappenopzet (`project/` voor code, docs in de root)
- Eerste opzet van componenten (Header, Footer, pagina's)
- Schrijven van de JSON-databestanden (knowledge.json, quiz.json)
- Uitleg bij fouten (TanStack Query, React Router, Netlify-configuratie)
- Formuleren van de AGENTS.md en ROADMAP.md

## 8. Lijst van problemen en hoe ik ze heb opgelost
- **`index.html` ontbrak** na het herstructureren → opnieuw aangemaakt in `project/`, server herstart.
- **404 op localhost:5173** → bleek dat ik in de verkeerde map stond (`OnlineMee` i.p.v. `OnlineMee\project`).
- **Git push rejected (non-fast-forward)** → `git pull origin main --rebase`, conflict in `OverOns.tsx` opgelost door de root-versie te verwijderen en de `project/`-versie te houden.
- **Vim-editor werkte niet** bij rebase → `git config --global core.editor "notepad"` en `git commit -m` gebruikt.
- **Netlify build** → base directory `project`, build `pnpm run build`, publish `dist`.

## 9. Moeilijkste onderdeel
Het opzetten van de TanStack Query-hook voor de Kennisbank, gecombineerd met zoek- en categoriefilter. Ik moest leren hoe `useQuery` werkt, hoe je data uit een lokaal JSON-bestand fetcht, en hoe je de gefilterde resultaten in de UI toont met een `aria-live`-aantal.

## 10. Welke onderdelen van AI-code ik zelf heb aangepast
- De styling van de Kennisbank-kaarten (Mantine `Card` + `Accordion`) heb ik zelf herschikt.
- De quiz-logica (score bijhouden, herstart) heb ik zelf uitgewerkt op basis van een AI-skelet.
- De honeypot in het contactformulier heb ik zelf toegevoegd en getest.
- De `ThemeContext` heb ik zelf gekoppeld aan de Mantine `MantineProvider`.

## 11. Wat ik nog zou verbeteren met meer tijd
- Meer dan 12 kennisbank-items en een echte backend/API in plaats van lokale JSON.
- Meer Playwright-tests (o.a. quiz-flow en thema-toggle).
- Een zoekfunctie die ook in de content zoekt, niet alleen titel/samenvatting.
- Branch protection op `main` met verplichte PR + approval.