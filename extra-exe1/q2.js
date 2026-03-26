/**
 * Sanitizes the username input.
 * @param {string} input - The raw string from the user.
 * @returns {string} - The "safe" username.
 */
function sanitizeUsername(input) {
  if (typeof input !== "string") return "";

  let result = input.replace(/[^A-Za-z0-9_-]/g, "_");
  return result.substring(0, 20);
}
