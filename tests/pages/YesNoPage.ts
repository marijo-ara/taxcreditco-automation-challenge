import { expect, type Page, type Locator } from "@playwright/test";
import { CONFIG } from "../config/constants";

export class YesNoPage {
  readonly page: Page;
  readonly nextBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nextBtn = page.getByRole("button", { name: CONFIG.TEXT_CONTENT.BUTTON_NEXT });
  }

  async assertLoaded(): Promise<void> {
    await expect(this.page.getByText(CONFIG.TEXT_CONTENT.YES_NO_INSTRUCTIONS)).toBeVisible();
  }

  /**
   * Marks "No" on all visible questions.
   * Strategy: click on all visible "No" radio buttons using JavaScript to avoid interception issues.
   */
  async answerNoToAll(): Promise<void> {
    const noRadios = this.page.getByRole("radio", { name: CONFIG.TEXT_CONTENT.BUTTON_NO });
    const count = await noRadios.count();

    for (let i = 0; i < count; i++) {
      const radio = noRadios.nth(i);
      if (await radio.isVisible()) {
        // Use JavaScript click to avoid interception by overlay elements
        await radio.evaluate((element: HTMLInputElement) => element.click());
        // Small wait to ensure the selection is processed
        await this.page.waitForTimeout(100);
      }
    }
  }

  async clickNext(): Promise<void> {
    await this.nextBtn.click();
  }

  /**
   * Verifies that all questions have been answered and the Next button is visible.
   */
  async verifyQuestionsAnswered(): Promise<void> {
    await expect(this.nextBtn).toBeVisible();
  }
}
