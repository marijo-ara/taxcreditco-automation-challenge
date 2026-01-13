import { test as base } from "@playwright/test";
import { BasicInfoPage } from "../pages/BasicInfoPage";
import { YesNoPage } from "../pages/YesNoPage";
import { ConfirmNamePage } from "../pages/ConfirmNamePage";

type PagesFixture = {
  basicInfoPage: BasicInfoPage;
  yesNoPage: YesNoPage;
  confirmNamePage: ConfirmNamePage;
};

export const test = base.extend<PagesFixture>({
  basicInfoPage: async ({ page }, use) => {
    await use(new BasicInfoPage(page));
  },
  yesNoPage: async ({ page }, use) => {
    await use(new YesNoPage(page));
  },
  confirmNamePage: async ({ page }, use) => {
    await use(new ConfirmNamePage(page));
  },
});

export { expect } from "@playwright/test";
