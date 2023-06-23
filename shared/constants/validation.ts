export const DATE_VALIDATION_PATTERN = {
  value: /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/,
  message: "Invalid date format",
};

export const PHONE_NUMBER_VALIDATION = {
  value: /^\+(?:[0-9] ?){6,14}[0-9]$/,
  message: "Invalid phone number format",
};

export const EMAIL_VALIDATION = {
  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  message: "Invalid email format",
};
