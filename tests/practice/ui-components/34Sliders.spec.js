import { expect, test } from '@playwright/test';
import exp from 'constants';

test.beforeEach(async ({ page }) => {
    await page.goto(('http://localhost:4200'))
})

test('Sliders test', async ({ page }) => {
    const tempBox = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger')

    //Update attribute
    await tempBox.locator('circle').evaluate( node => {
        node.setAttribute('cx', '230.86829620066376')
        node.setAttribute('cy', '230.86829620066374')
    })
    await tempBox.click()

    //Mouse movement
    await tempBox.scrollIntoViewIfNeeded()
    await page.pause()
    const box = await tempBox.boundingBox()
    const x = box.x + box.width / 2
    const y = box.y + box.width / 2
    await page.mouse.move(x, y)
    await page.mouse.down()
    await page.mouse.move(x +100, y )
    await page.mouse.move(x + 100, y +100)
    await page.mouse.up()

    await expect(tempBox).toContainText('30')
})

