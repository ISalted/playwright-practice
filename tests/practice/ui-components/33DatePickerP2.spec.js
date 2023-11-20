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

    test('Datepicker P2 Test', async ({ page }) => {
        const calendarInputField = page.getByPlaceholder('Form Picker')
        await calendarInputField.click()

        // await calendarInputField.fill("Nov 14, 2023")
        // await page.locator('.day-cell.ng-star-inserted').getByText(expectDay, { exact: true }).click()

        let date = new Date()
        date.setDate(date.getDate() + 203)
        const expectDay = date.getDate().toString()
        const expectedMonthShort = date.toLocaleString('en-US', { month: 'short' });
        const expectedMonthLong = date.toLocaleString('en-US', { month: 'long' })
        const expectedYear = date.getFullYear()
        const dateToAssert = `${expectedMonthShort} ${expectDay}, ${expectedYear}`

        let calendarMonthAndYear = await page.locator('nb-calendar-view-mode').textContent()
        const expectedMonthAndYear = ` ${expectedMonthLong} ${expectedYear}`
        while (!calendarMonthAndYear.includes(expectedMonthAndYear)){
            await page.locator('.next-month').click()
            calendarMonthAndYear = await page.locator('nb-calendar-view-mode').textContent()
        }
        await page.locator('.day-cell.ng-star-inserted').getByText(expectDay, { exact: true }).click()

        await expect(calendarInputField).toHaveValue(dateToAssert)
    })
})

