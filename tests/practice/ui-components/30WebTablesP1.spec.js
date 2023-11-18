import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto(('http://localhost:4200'))
})

test.describe('Smart Table page', () => {
    test.beforeEach(async ({ page }) => {
        await page.getByText('Tables & Data').click()
        await page.getByText('Smart Table').click()
    })

    test('Web Tables P1 Test', async ({ page }) => {
        //1. Get the row by any test in this row

        const targetRow = page.getByRole('row', { name: "twitter@outlook.com" })
        await targetRow.locator('.nb-edit').click()
        await page.locator('input-editor').getByPlaceholder('Age').clear()
        await page.locator('input-editor').getByPlaceholder('Age').fill('35')
        await page.locator('.nb-checkmark').click()

        //2. Get the row based on the value in the specific column
        await page.pause()
        await page.locator('.ng2-smart-pagination-nav').getByText('2').click()
        const targetRowById = page.getByRole('row', {name:"11"}).nth(0)
        await targetRowById.click()
        await targetRowById.locator('.nb-edit').click()
        await page.locator('input-editor').getByPlaceholder('E-mail').clear()
        await page.locator('input-editor').getByPlaceholder('E-mail').fill('test@test.com')
        await page.locator('.nb-checkmark').click()
        // getByRole('row', {name:"11"}).nth(0).locator('td').nth(5)
        await expect(page.locator('(//tr[contains(.,"11")])[1]/td[6]')).toHaveText('test@test.com')

    })
})
