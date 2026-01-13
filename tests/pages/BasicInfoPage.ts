import { expect, type Page, type Locator } from "@playwright/test";
import { CONFIG } from "../config/constants";

export type BasicInfo = {
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  city: string;
  zip: string;
};

export class BasicInfoPage {
  readonly page: Page;
  readonly nextBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nextBtn = page.getByRole("button", { name: CONFIG.TEXT_CONTENT.BUTTON_NEXT });
  }

  async goto(): Promise<void> {
    await this.page.goto(CONFIG.URLs.AUTOMATION_CHALLENGE, {
      waitUntil: "networkidle",
    });
    // Wait for the form to be ready by checking for the First Name field
    await expect(this.page.getByLabel(/First Name/i)).toBeVisible();
  }

  async fillBasicInfo(data: BasicInfo): Promise<void> {
    await this.page.getByLabel(/First Name/i).fill(data.firstName);
    await this.page.getByLabel(/Last Name/i).fill(data.lastName);
    await this.page.getByLabel(/Email Address/i).fill(data.email);
    await this.page.getByLabel(/Street Address/i).fill(data.street);
    await this.page.getByLabel(/City/i).fill(data.city);
    await this.page.getByLabel(/Zip Code/i).fill(data.zip);
  }

  async clickNext(): Promise<void> {
    await this.nextBtn.click();
  }

  /**
   * Verifies that the page is loaded and displays the basic information form.
   */
  async assertPageLoaded(): Promise<void> {
    // Verify the form is ready by checking for the First Name field
    await expect(this.page.getByLabel(/First Name/i)).toBeVisible();
  }

  /**
   * Verifies that all form fields are filled with the provided data.
   */
  async verifyFormFieldsFilled(data: BasicInfo): Promise<void> {
    await expect(this.page.getByLabel(/First Name/i)).toHaveValue(data.firstName);
    await expect(this.page.getByLabel(/Last Name/i)).toHaveValue(data.lastName);
    await expect(this.page.getByLabel(/Email Address/i)).toHaveValue(data.email);
    await expect(this.page.getByLabel(/Street Address/i)).toHaveValue(data.street);
    await expect(this.page.getByLabel(/City/i)).toHaveValue(data.city);
    await expect(this.page.getByLabel(/Zip Code/i)).toHaveValue(data.zip);
  }
}
