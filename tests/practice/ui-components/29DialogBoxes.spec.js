import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto(('http://localhost:4200'))
})

test.describe('Smart Table page', () => {
    test.beforeEach(async ({ page }) => {
        await page.getByText('Tables & Data').click()
        await page.getByText('Smart Table').click()
    })

    test('Dialog box Test', async ({ page }) => {
        // Example of an event listener for dialog boxes
        page.on('dialog', async (dialog) => {
            console.log(`Діалогове вікно: ${dialog.message()}`);
            await dialog.accept();
        });

        await page.getByRole('table').locator('tr', { hasText: "mdo@gmail.com" }).locator('.nb-trash').click()
        await expect(page.locator('table tr').first()).not.toHaveText('mdo@gmail.com')
    })
})
