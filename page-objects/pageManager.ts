import { Page } from "@playwright/test"
import { FormLayoutsPage } from "../page-objects/formLayotsPage"
import { NavigationPage } from '../page-objects/navigationPage'
import { DatePickerPage } from '../page-objects/datePickerPage'

export class PageManager{

    private readonly page: Page
    private readonly formLayoutsPage: FormLayoutsPage
    private readonly navigationPage: NavigationPage
    private readonly datePickerPage: DatePickerPage

    constructor(page: Page) {
        this.page = page
        this.formLayoutsPage = new FormLayoutsPage(this.page)
        this.navigationPage = new NavigationPage(this.page)
        this.datePickerPage = new DatePickerPage(this.page)
    }

    onFormLayoutsPage() {
        return this.formLayoutsPage
    }

    navigateTo(){
        return this.navigationPage
    }
    onDatepickerPage() {
        return this.datePickerPage
    }

}
