import type { BasicInfo } from "../pages/BasicInfoPage";

/**
 * Constructs a full name from first and last name.
 * @param data - BasicInfo object containing firstName and lastName
 * @returns Full name string in format "firstName lastName"
 */
export function getFullName(data: BasicInfo): string {
  return `${data.firstName} ${data.lastName}`;
}
