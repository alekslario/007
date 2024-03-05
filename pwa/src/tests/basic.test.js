const utils = require("../utils/utils.js");

const { formatDate, firstLetterUppercase, getTimeArray, getTime } = utils;

test("First letter - lowercase => uppercase", () => {
  expect(firstLetterUppercase("test")).toBe("Test");
});

// Test for formatDate function
test("formatDate should format milliseconds into date and time", () => {
  const milliseconds = 1613427600000; // A specific date and time in milliseconds
  const [formattedDate, formattedTime] = formatDate(milliseconds);
  expect(formattedDate).toBe("15 Monday");
  expect(formattedTime).toBe("22:20");
});

// Test for getTime function
test("getTime should format milliseconds into time", () => {
  const milliseconds = 1613427600000; // A specific date and time in milliseconds
  const formattedTime = getTime(milliseconds);
  expect(formattedTime).toBe("22:20");
});

// Test for getTimeArray function
test("getTimeArray should return an array of formatted times", () => {
  const size = 3;
  const timesArray = getTimeArray(size);
  expect(timesArray).toHaveLength(size);
  expect(timesArray.every((time) => typeof time === "string")).toBe(true);
});

// Test for firstLetterUppercase function
test("firstLetterUppercase should capitalize the first letter of a string and convert camelCase to space-separated", () => {
  const result = firstLetterUppercase("helloWorld");
  expect(result).toBe("Hello world");
});

// Test for firstLetterUppercase function with one word
test("firstLetterUppercase should handle strings with only one word", () => {
  const result = firstLetterUppercase("hello");
  expect(result).toBe("Hello");
});

// Test for firstLetterUppercase function with empty string
test("firstLetterUppercase should handle empty strings", () => {
  const result = firstLetterUppercase("");
  expect(result).toBe("");
});
