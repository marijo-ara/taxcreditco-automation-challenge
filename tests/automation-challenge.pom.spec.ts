import { test } from "./fixtures/pages";
import { TestData } from "./helpers/test-data";
import { getFullName } from "./helpers/utils";

test.describe("Automation Challenge", () => {
  test("completes flow, validates name and redirects to Experian", async ({
    basicInfoPage,
    yesNoPage,
    confirmNamePage,
  }) => {
    const data = TestData.createBasicInfo();

    await test.step("Step : Navigate to automation challenge page", async () => {
      await basicInfoPage.goto();
    });

    await test.step("Expected Behavior : Page loads and displays the basic information form", async () => {
      await basicInfoPage.assertPageLoaded();
    });

    await test.step("Step : Fill basic information form", async () => {
      await basicInfoPage.fillBasicInfo(data);
    });

    await test.step("Expected Behavior : All form fields are filled with the provided data", async () => {
      await basicInfoPage.verifyFormFieldsFilled(data);
    });

    await test.step("Step : Submit basic information form", async () => {
      await basicInfoPage.clickNext();
    });

    await test.step("Expected Behavior : Form is submitted and user is navigated to the Yes/No questions page", async () => {
      await yesNoPage.assertLoaded();
    });

    await test.step("Step : Answer 'No' to all questions", async () => {
      await yesNoPage.answerNoToAll();
    });

    await test.step("Expected Behavior : All 'No' buttons are clicked and questions are answered", async () => {
      await yesNoPage.verifyQuestionsAnswered();
    });

    await test.step("Step : Submit Yes/No answers", async () => {
      await yesNoPage.clickNext();
    });

    await test.step("Expected Behavior : Answers are submitted and user is navigated to the name confirmation page", async () => {
      await confirmNamePage.expectNameToMatch(getFullName(data));
    });

    await test.step("Step : Submit form", async () => {
      await confirmNamePage.submitForm();
    });

    await test.step("Expected Behavior : Form is submitted and user is redirected to Experian employer services page", async () => {
      await confirmNamePage.verifyRedirectToExperian();
    });
  });
});
