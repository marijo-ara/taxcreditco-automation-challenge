import type { BasicInfo } from "../pages/BasicInfoPage";

/**
 * Generates a unique email address for test data.
 * Uses timestamp to ensure uniqueness across test runs.
 */
function generateUniqueEmail(): string {
  return `playwright.${Date.now()}@example.com`;
}

/**
 * Creates test data for basic information form.
 * Returns a valid BasicInfo object with default values.
 */
export function createBasicInfo(overrides?: Partial<BasicInfo>): BasicInfo {
  const defaultData: BasicInfo = {
    firstName: "Joe",
    lastName: "Sample",
    email: generateUniqueEmail(),
    street: "Street line 1",
    city: "Monterey Park",
    zip: "91754",
  };

  return { ...defaultData, ...overrides };
}

/**
 * Test data factory - allows creating test data with custom values.
 * This pattern makes it easy to:
 * - Create valid test data with defaults
 * - Override specific fields for edge cases
 * - Maintain consistency across tests
 * - Generate unique values (like emails) automatically
 */
export const TestData = {
  createBasicInfo,
  generateUniqueEmail,
};
