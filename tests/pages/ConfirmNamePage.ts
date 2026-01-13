import { expect, type Page, type Locator } from "@playwright/test";
import { CONFIG } from "../config/constants";

export class ConfirmNamePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Verifies that the confirmation input has the expected name.
   */
  async expectNameToMatch(expectedFullName: string): Promise<void> {
    const confirmNameInput: Locator = this.page.locator('input[type="text"]').first();
    await expect(confirmNameInput).toHaveValue(expectedFullName);
  }

  /**
   * Submits the form if the submit button is present.
   * Handles both manual submit and automatic redirect scenarios.
   */
  async submitForm(): Promise<void> {
    const submitBtn = this.page.getByRole("button", { name: CONFIG.TEXT_CONTENT.BUTTON_SUBMIT_FORM });

    if (await submitBtn.isVisible()) {
      await Promise.all([
        this.page.waitForURL(CONFIG.URL_PATTERNS.EXPERIAN_EMPLOYER_SERVICES_PARTIAL, {
          timeout: CONFIG.TIMEOUTS.NAVIGATION,
        }),
        submitBtn.click(),
      ]);
    } else {
      // In case the redirect is automatic
      await this.page.waitForURL(CONFIG.URL_PATTERNS.EXPERIAN_EMPLOYER_SERVICES_PARTIAL, {
        timeout: CONFIG.TIMEOUTS.NAVIGATION,
      });
    }
  }

  /**
   * Verifies that the user has been redirected to the Experian employer services page.
   */
  async verifyRedirectToExperian(): Promise<void> {
    await expect(this.page).toHaveURL(CONFIG.URL_PATTERNS.EXPERIAN_EMPLOYER_SERVICES);
  }
}
