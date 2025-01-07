// constants.js

export const API_URL = "https://api.truejustice.com";
export const CASE_TYPES = {
  CRIMINAL: "Criminal",
  CIVIL: "Civil",
  FAMILY: "Family",
  CORPORATE: "Corporate",
};

export const STATUS = {
  OPEN: "Open",
  CLOSED: "Closed",
  IN_PROGRESS: "In Progress",
};

export const ERROR_MESSAGES = {
  NETWORK_ERROR: "Network error, please try again later.",
  CASE_NOT_FOUND: "Case not found.",
  UNAUTHORIZED_ACCESS: "You are not authorized to perform this action.",
};

export const SUCCESS_MESSAGES = {
  CASE_REPORTED: "Case successfully reported.",
  CASE_UPDATED: "Case successfully updated.",
  CASE_DELETED: "Case successfully deleted.",
};
