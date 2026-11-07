import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Toegankelijkheid (WCAG 2.1 AA)', () => {
  const routes = [
    '/',
    '/kennisbank',
    '/quiz',
    '/contact',
    '/over-ons',
    '/nieuws',
    '/downloads',
  ];

  for (const route of routes) {
    test(`Pagina ${route} mag geen WCAG fouten bevatten`, async ({ page }) => {
      await page.goto(route);

      // Wacht tot de pagina volledig geladen is
      await page.waitForLoadState('networkidle');

      // Voer de Axe scan uit
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']) // Specifiek voor WCAG 2.1 AA
        .analyze();

      // Als er fouten zijn, laat de test zien wat er mis is
      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }
});