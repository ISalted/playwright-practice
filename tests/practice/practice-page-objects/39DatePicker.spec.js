import { expect, test } from '@playwright/test';
import { PageManager } from '../../../page-objects/pageManager'

test.beforeEach(async ({ page }) => {
    await page.goto(('http://localhost:4200'))
})

test.only('datepicker test', async ({ page }) => {
    const pm = new PageManager(page)

    await pm.navigateTo().selectFromMenuItem('Datepicker')
    await pm.onDatepickerPage().selectCommonDatePickerDateFromToday(5)
    await pm.onDatepickerPage().selectDatepickerWithRangeFromToday(6, 8)
})
