import { test, expect } from '@playwright/test';

test.describe('Navigatie en Routing', () => {
  test('moet alle hoofd pagina\'s kunnen bereiken via de desktop navigatie', async ({ page }, testInfo) => {
    // Sla deze test over als we op een mobiel toestel testen
    test.skip(testInfo.project.name.includes('mobile'), 'Dit is een desktop-only test');

    await page.goto('/');
    
    await expect(page.getByRole('heading', { name: 'Het internet is voor iedereen.' })).toBeVisible();

    // LET OP: exact: true toevoegen zodat hij niet de grote knop op de homepage pakt
    await page.getByRole('link', { name: 'Kennisbank', exact: true }).click();
    await expect(page).toHaveURL(/.*\/kennisbank/);
    await expect(page.getByRole('heading', { name: 'Kennisbank' })).toBeVisible();

    await page.getByRole('link', { name: 'Quiz', exact: true }).click();
    await expect(page).toHaveURL(/.*\/quiz/);
    await expect(page.getByRole('heading', { name: 'Test je Digitale Kennis' })).toBeVisible();
  });

  test('moet het mobiele menu (hamburger) correct openen en sluiten', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const mobileMenuButton = page.getByRole('button', { name: 'Open menu' });
    await expect(mobileMenuButton).toBeVisible();
    await mobileMenuButton.click();

    const contactLink = page.getByRole('link', { name: 'Contact' }).last(); 
    await expect(contactLink).toBeVisible();
    await contactLink.click();
    
    await expect(page).toHaveURL(/.*\/contact/);
  });
});