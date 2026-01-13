/**
 * Application URLs and endpoints
 */
export const URLs = {
  AUTOMATION_CHALLENGE: "https://uat-survey.taxcreditco.com/automation-challenge",
  EXPERIAN_EMPLOYER_SERVICES: "https://www.experian.com/employer-services",
} as const;

/**
 * Timeout values in milliseconds
 */
export const TIMEOUTS = {
  NAVIGATION: 30_000,
  DEFAULT: 5_000,
} as const;

/**
 * Text content used in the application (for assertions and selectors)
 */
export const TEXT_CONTENT = {
  BASIC_INFO_HEADING: /Let's begin by getting some basic information!/i,
  YES_NO_INSTRUCTIONS: /At this time, please answer Yes or No/i,
  BUTTON_NEXT: /^Next$/i,
  BUTTON_NO: /^No$/i,
  BUTTON_SUBMIT_FORM: /Submit form/i,
} as const;

/**
 * Regex patterns for URL matching
 */
export const URL_PATTERNS = {
  EXPERIAN_EMPLOYER_SERVICES: /^https:\/\/www\.experian\.com\/employer-services\/?$/,
  EXPERIAN_EMPLOYER_SERVICES_PARTIAL: /https:\/\/www\.experian\.com\/employer-services\/?/,
} as const;

/**
 * Application configuration constants
 */
export const CONFIG = {
  URLs,
  TIMEOUTS,
  TEXT_CONTENT,
  URL_PATTERNS,
} as const;
