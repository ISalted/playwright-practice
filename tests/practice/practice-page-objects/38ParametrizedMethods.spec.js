import { expect, test } from '@playwright/test';
import { PageManager } from '../../../page-objects/pageManager'

test.beforeEach(async ({ page }) => {
    await page.goto(('http://localhost:4200'))
})

test('parametrized methods', async ({ page }) => {
    const pm = new PageManager(page)

    await pm.navigateTo().selectFromMenuItem('Form Layouts')
    await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption('test@test.com', 'Test123', 'Option 1')
    await pm.onFormLayoutsPage().submitInLineFormWithNameEmailAndCheckBox('Jon Snow', 'jonsnow@test.com', true)
})
