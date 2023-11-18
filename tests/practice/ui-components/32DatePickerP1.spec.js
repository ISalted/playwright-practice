import { expect, test } from '@playwright/test';
import exp from 'constants';

test.beforeEach(async ({ page }) => {
    await page.goto(('http://localhost:4200'))
})

test.describe('Datepicker page', () => {
    test.beforeEach(async ({ page }) => {
        await page.getByText('Forms').click()
        await page.getByText('Datepicker').click()
    })

    test('Datepicker P1 Test', async ({ page }) => {
        const calendarInputField = page.getByPlaceholder('Form Picker')
        await calendarInputField.click()
        await page.pause()
        // await calendarInputField.fill("Nov 14, 2023")
        await page.locator('.day-cell.ng-star-inserted').getByText('3', {exact: true}).click()

        await expect(calendarInputField).toHaveValue('Nov 3, 2023')

    })
})
