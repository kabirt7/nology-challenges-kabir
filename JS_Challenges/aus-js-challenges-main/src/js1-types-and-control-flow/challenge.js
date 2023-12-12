/* This challenge is designed to test you knowledge of Types and Control Flow (If and Switch Statements) */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function that programmatically concatenates two strings together with a space in between them.
 * This means if the string were different it would still add them together.
 *
 * @returns {string} John Smith
 */
const firstName = "John";
const lastName = "Smith";

export const createFullName = () => {
  const fullName = `${firstName} ${lastName}`;
  return fullName;
};

/**
 * A function that programmatically returns the largest number.
 * This means if the numbers were different it would still return the largest one.
 *
 * @returns {number} the largest number
 */
const largeNumber1 = 100;
const largeNumber2 = 200;

export const findLargestNumber = () => {
  if (largeNumber1 > largeNumber2) {
    return largeNumber1;
  } else {
    return largeNumber2;
  }
};

/**
 * A function that programmatically adds two numbers together.
 * This means if the numbers were different it would still add them together.
 *
 * @returns {number} the sum of both numbers
 */
const addNumber1 = 12;
const addNumber2 = 24;

export const addNumbers = () => {
  const sum = addNumber1 + addNumber2;
  return sum;
};

/* Intermediate Challenges */

/**
 * A function to programmatically find the length of a string.
 * This means if the string was different it would still find the length.
 *
 * @returns {number} the length of the string
 */
const password = "thisIsMyVeryLongPassword123456789";

export const findLengthOfPassword = () => {
  const passwordLength = password.length;
  return passwordLength;
};

/**
 * A function that programmatically tells you what the type of the variable is.
 * This variable was still one of the accepted types it would still output a string.
 * If the variable is a string output "This is a string"
 * If the variable is a number output "This is a number"
 * If the variable is a boolean output "This is a boolean"
 * If the variable is not any of those types output "I don't know what this thing is"
 *
 * @returns {string} This is a string
 */
const thing = "I am a thing";

export const findType = () => {
  const type = typeof thing;
  if (type === "string") {
    return "This is a string";
  } else if (type === "number") {
    return "This is a number";
  } else if (type === "boolean") {
    return "This is a boolean";
  } else {
    return "I don't know what this string is";
  }
};

/**
 * A function to programmatically decide if a name is suitable for a name tag.
 * This means it must still work even if the name is different and return something if name provided is incorrect.
 * Name tag rules are: The name must be less than or equal to 8 characters and begin with a capital letter.
 *
 * @returns {boolean} true || false
 */
const nameTagOption = "Timothy";

export const getIsValidOnNameTag = () => {
  const nametagLength = nameTagOption.length;
  const firstLetter = nameTagOption.charAt(0);
  if (nametagLength <= 8 && firstLetter === firstLetter.toUpperCase()) {
    return true;
  } else {
    return false;
  }
};

/* Advanced Challenges */

/**
 * A function that programmatically converts a number stored as a string to a number type.
 * This means if the string was different it would still convert it to a number.
 *
 * @returns {number} The number converted from the string "32.87" -> 32.87
 */
const stringToConvert = "14.45";

export const convertStringToNumber = () => {
  const convertedString = stringToConvert * "1";
  return convertedString;
};

/**
 * A function that uses regex to programmatically test if a string contains uppercase letters.
 * This means if the string was different it would still accurately return true or false.
 *
 * !!NOTE!! You should use regex to solve this problem!
 *
 * @returns {boolean} true || false
 */
const stringWithUppercaseLetters = "I Am A String With Uppercase Letters";

export const getHasUppercaseLetters = () => {
  const hasUpperCase = /[A-Z]/.test(stringWithUppercaseLetters);
  if (hasUpperCase) {
    return true;
  } else {
    return false;
  }
};

// function hasUpperCase(str) {
//   return /[A-Z]/.test(str);
// }

// // Example usage:
// const myString = "Hello, World!";
// if (hasUpperCase(myString)) {
//   console.log("String contains uppercase letters.");
// } else {
//   console.log("String does not contain uppercase letters.");
// }

/* Expert Challenge */

/**
 * A function that programmatically converts a string written in PascalCase to a string written in snake_case (lowercase with underscores).
 * This means if the PascalCase string changes then the function should still convert it.
 *
 * @returns {string} i_want_to_be_snake_case
 */
const pascalCaseVariableName = "IWantToBeSnakeCase";

export const convertPascalCaseToSnakeCase = () => {
  // Insert underscore before each uppercase letter and convert to lowercase
  const snakeCaseString = pascalCaseVariableName.replace(
    /[A-Z]/g,
    (match) => `_${match.toLowerCase()}`
  );

  // Remove first underscore
  return snakeCaseString.replace(/^_/, "");
};
