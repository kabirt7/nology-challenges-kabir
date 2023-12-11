// // Challenge: Odds & Evens
// // MVP:
// // Check if a number is odd or even

// // Create variable n
// // Write an if / else block
// // If the number passed in is even return a string "n is even"
// // If the number is odd return a string "n is odd"

// let n = 5.5;

// if (n % 2 === 0) {
//   console.log("n is even");
// } else if (n % 2 === 1) {
//   console.log("n is odd");
// } else {
//   console.log("please enter an integer");
// }

// // Challenge: Comparing Numbers
// // MVP:
// // Check for the smallest value
// // Create two variables x & y
// // Write an if / else block
// // It should compare a number x to another number y
// // It should print ("x is greater than y") in the console
// // Or "x is smaller than y"
// // Or "x is equal to y"
// // Depending on the value of x and y

// let x = 6;
// let y = 6;

// if (x > y) {
//   console.log(`${x} is greater than ${y}`);
// } else if (x < y) {
//   console.log(`${x} is smaller than ${y}`);
// } else {
//   console.log(`${x} is equal to ${y}`);
// }

// // Challenge: User Input Type
// // MVP:
// // Console log the user's input depending on the data type
// // Create a variable userInput
// // Write an if / else block
// // If the input is a number, it should console log that number but squared
// // If the input is a string, it should console log that input
// // If the input is anything else, the console should say "invalid input"

// let userInput = true;

// if (typeof userInput == "number") {
//   console.log(userInput ** 2);
// } else if (typeof userInput == "string") {
//   console.log(userInput);
// } else {
//   console.log("invalid input");
// }

// // Create a switch block that will log a string for each day of the week.
// // Create a variable called day
// // The switch will be given a number and return the matching days of the week
// // e.g. if day = 2, the switch should print Today is Tuesday in the console.
// // Your switch block should also handle numbers out of range

// let dayOfWeek = 1;

// switch (dayOfWeek) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Time is not real");
// }

// // Challenge: Eye Colour (Check the attached image)
// // MVP:
// // Tell the user what eye colour their child would have.

// // Create two variables parent1 and parent2
// // Given the eye colour of each parent, it should console log the probability of their child having different eye colours, for example: Your eye colours are brown and blue, the chances of your child having blue eyes is --%, brown is --% and green is --%
// // Use the following image as a reference
// // Bonus:
// // Store the value of the child’s eye colour and write a switch statement - depending on the child’s eye colour consol log if it's your favourite eye colour, your least favourite eye colour or the mediocre colour

// let parent1 = "brown";
// let parent2 = "blue";

// switch (parent1) {
//   case "brown":
//     switch (parent2) {
//       case "brown":
//         console.log("brown: 75%, green: 6.25%, blue: 18.75%");
//         break;
//       case "blue":
//         console.log("brown: 50%, green: 0%, blue: 50%");
//         break;
//       case "green":
//         console.log("brown: 50%, green: 37.5%, blue: 12.5%");
//         break;
//     }
//     break;
//   case "blue":
//     switch (parent2) {
//       case "brown":
//         console.log("brown: 50%, green: 0%, blue: 50%");
//         break;
//       case "blue":
//         console.log("brown: 0%, green: 1%, blue: 99%");
//         break;
//       case "green":
//         console.log("brown: 0%, green: 50%, blue: 50%");
//         break;
//     }
//     break;
//   case "green":
//     switch (parent2) {
//       case "brown":
//         console.log("brown: 50%, green: 37.5%, blue: 12.5%");
//         break;
//       case "blue":
//         console.log("brown: 50%, green: 0%, blue: 50%");
//         break;
//       case "green":
//         console.log("brown: <1%, green: 75%, blue: 25%");
//         break;
//     }
//     break;
// }

// // Bonus:
// // Store the value of the child’s eye colour and write a switch statement - depending on the child’s eye colour consol log if it's your favourite eye colour, your least favourite eye colour or the mediocre colour

// let childEyeColor = "brown";

// switch (childEyeColor) {
//   case "green":
//     console.log("this is my favourite eye colour");
//   case "brown":
//     console.log("this is my second favourite eye colour");
//   case "blue":
//     console.log("this is my least favourite eye colour");
// }

// FUNCTIONS

// MVP
// 1. Write a function that takes in a number of earth days, and returns the number of orbits the moon can perform given days.
// moonOrbits(54) => 2
// moonOrbits(365) => 13.359

function moonOrbitCalculator(earthDays) {
  const moonOrbits = earthDays * (13.359 / 365);
  return moonOrbits;
}

console.log(moonOrbitCalculator(23));

// MVP
// 1. Write a function that takes the radius of a circle and return its area.
// 2. Write a function that takes the radius of a circle and return its perimeter.
// circleArea(10) => 314.16
// circlePerimeter(10) => 62.83

function circleAreaCalculator(radius) {
  const circleArea = radius ** 2 * Math.PI;
  return circleArea;
}

console.log(circleAreaCalculator(20));

function circlePerimeterCalculator(radius) {
  const circlePerimeter = 2 * Math.PI * radius;
  return circlePerimeter;
}

console.log(circlePerimeterCalculator(20));

// MVP
// 1. Create a function that takes your age in years and returns your age in days.
// 2. Create a function that takes your age in years and returns your age in seconds.
// ageInDays(32) => 11680
// ageInSeconds(32) => 1009152000

function ageInDaysCalculate(ageInYears) {
  // const ageInDays = ageInYears * 365.25;
  return ageInDays * 365.25;
}

console.log(ageInDaysCalculate(20));

function ageInSecondsCalculate(ageInYears) {
  const ageInSeconds = ageInYears * 365.25 * 24 * 60 * 60;
  return ageInSeconds;
}

console.log(ageInSecondsCalculate(12));

// MVP
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
// remainder(1, 3) ➞ 1

// remainder(3, 4) ➞ 3

// remainder(-9, 45) ➞ -9

// remainder(5, 5) ➞ 0

function remainderReturn(numb1, numb2) {
  const remainder = numb1 % numb2;
  return remainder;
}

console.log(remainderReturn(5, 3));

// MVP
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

function scoreCalculator(twoPointer, threePointer) {
  const finalPoints = twoPointer * 2 + threePointer * 3;
  return finalPoints;
}

console.log(scoreCalculator(7, 1));

// Challenge: Less Than 100?

// MVP
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117

// lessThan100(3, 77) ➞ true

// function thresholdCalculator(numb1, numb2) {
//   if (numb1 + numb2 > 100) {
//     return true;
//   } else return false;
// }

function thresholdCalculator(numb1, numb2) {
  return numb1 + numb2 > 100;
}

console.log(thresholdCalculator(2, 3));
