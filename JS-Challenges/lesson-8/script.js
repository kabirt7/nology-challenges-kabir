// // ## Challenge: Listing Hobbies

// // ### MVP

// // 1. Create an array with 3 of your hobbies
// // 1. Print in the console the first hobby in the array
// // 1. Remove that first hobby from the array and store that hobby in a variable
// // 1. Store the length of the array in a variable
// // 1. Add another hobby at the end of the array
// // 1. Print that last hobby in the console

// // Bonus:

// // 1. Join all your hobbies in a single string each hobby being comma separated
// //    (i.e. "My hobbies are: hobby1, hobby2, hobby2")

// // ## Challenge: Grocery Lists

// // ### MVP

// // 1. Create an array containing 5 grocery items you often buy
// // 2. Log this list to the console, make sure the output is pipe delimited

// // ```js
// // ['apple', 'pear', 'papaya', 'mango'] => 'apple|pear|papaya|mango'
// // ```

// const arrayKabirHobbies = ["language learning", "making jewellery", "cooking"];
// console.log(arrayKabirHobbies[0]);

// const poppedHobby = arrayKabirHobbies.shift();
// console.log(poppedHobby);

// const hobbyArrayLength = arrayKabirHobbies.length;
// console.log(hobbyArrayLength);

// arrayKabirHobbies.push("embroidering");
// console.log(arrayKabirHobbies);

// console.log(arrayKabirHobbies[arrayKabirHobbies.length - 1]);

// const hobbyString = arrayKabirHobbies.join(", ");
// console.log(hobbyString);

// const groceryItems = ["mango", "tomato", "bread", "chickpeas", "mayo"];

// console.log(groceryItems.join("|"));

// ## Challenge: Sum of `n`

// ### MVP:

// Create a function with a for loop that will add all the numbers up to n

// 1. You should create a variable to set the upper limit of your loop

givenNumber = 10;

function loopEnact(n) {
  let sum = 0;
  for (let i = 0; i <= n; ++i) {
    sum += i;
  }
  return sum;
}

console.log(loopEnact(givenNumber));

// 2. Your loop should increment by 1 on each iteration
// 3. Your loop should print the final result

// ```js
// sum(10) => 55
// ```

// ### Bonus:

// Try writing the function again with the same inputs and outputs **Without**
// using a loop. (You may need to google some formulas!)

function loopEnact(n) {
  let sum = 0;
  for (let i = 0; i <= n; ++i) {
    sum += i;
  }
  return sum;
}
