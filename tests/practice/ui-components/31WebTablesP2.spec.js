import { expect, test } from '@playwright/test';
import exp from 'constants';

test.beforeEach(async ({ page }) => {
    await page.goto(('http://localhost:4200'))
})

test.describe('Smart Table page', () => {
    test.beforeEach(async ({ page }) => {
        await page.getByText('Tables & Data').click()
        await page.getByText('Smart Table').click()
    })

    test('Web Tables P2 Test', async ({ page }) => {
        //3. Test filter of the table
        const ages = ["20", "30", "40", "200"]

        for ( let age of ages ){
            await page.locator('input-filter').getByPlaceholder('Age').clear()
            await page.locator('input-filter').getByPlaceholder('Age').fill(age)
            await page.waitForTimeout(500)
            const ageRows = page.locator('tbody tr')
            console.log(await ageRows.all())

            for (let row of await ageRows.all()){
                const cellValue = await row.locator('td').last().textContent()

                expect(cellValue).toEqual(age)
            }
        }
    })
})
