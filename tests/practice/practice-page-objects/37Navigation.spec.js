import { expect, test } from '@playwright/test';
import { PageManager } from '../../../page-objects/pageManager'

test.beforeEach(async ({ page }) => {
    await page.goto(('http://localhost:4200'))
})

test('navigation test', async({page}) => {
    const pm = new PageManager(page)
    await pm.navigateTo().selectFromMenuItem('Form Layouts')
    await pm.navigateTo().selectFromMenuItem('Datepicker')
    await pm.navigateTo().selectFromMenuItem('Toastr')
    await pm.navigateTo().selectFromMenuItem('Tooltip')
    await pm.navigateTo().selectFromMenuItem('Smart Table')
    await pm.navigateTo().selectFromMenuItem('Tree Grid')
})
