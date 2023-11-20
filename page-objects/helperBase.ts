import { Page } from "@playwright/test"

export class HelperBase{

    readonly page:Page

    constructor(page:Page){
        this.page = page
    }
    // https://prnt.sc/rAPGkqV5A_Qc
    // For example:
    async waitForNumberOfSeconds(timeInSeconds: number){
        await this.page.waitForTimeout(timeInSeconds * 1000)
    }
}
