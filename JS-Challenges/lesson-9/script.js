const pets = ["pixie", "claude", "sebastian", "bug"];
// -> 1. ['claude', 'sebastian', 'bug', 'pixie']
const loopOnePartOne = pets.shift();
pets.push(loopOnePartOne);
console.log(pets);
// -> 2. ['pixie', 'bug', 'sebastian', 'claude']
pets.reverse();
console.log(pets);
// -> 3. ['bug', 'sebastian', 'pixie']
const pixieArray = pets.shift();
pets.pop();
pets.push(pixieArray);
console.log(pets);
// -> 4. ['Bug', 'Sebastian', 'Pixie]
const capitalisedArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].slice(1);
  }
  return array;
};

// ## Challenge: Generating Unique Random Numbers

// ### MVP

// -   Using a `while` loop generate a list of 10 random unique numbers
// -   Each number must be between 0 and 15

// ### Tips

// -   You may need to google how to generate, you can use the `Math.random()` API

let i = 0;
let numberList = [];
while (i < 10) {
  randomNumber = Math.floor(Math.random() * 15) + 1;
  numberList.push(randomNumber);
  i++;
}
console.log(numberList);

// ## Challenge: `generateNumbers` function

// ### MVP

// Create a function that returns a list of random whole numbers given a range

// -   Create a function called `generateNumbers`
// -   This function should take in 2 numbers
//     -   `n` being the number of numbers to be generated
//     -   `r` being the max range
//     -   E.g: `n: 10, r: 20:` function will generate 10 random numbers between 0
//         and 20
// -   Function should return `n` numbers in range `0 <= n < r`

function generateNumbers(n, r, isUnique) {
  i = n;
  if (n < 0 || r < 0) {
    return;
  } else {
    let numberListArray = [];
    while (i < r) {
      randomNumberTwo = Math.floor(Math.random() * r) + 1;
      if (
        isUnique === true &&
        !numberListArray.includes(randomNumberTwo) &&
        n < r
      ) {
        numberListArray.push(randomNumberTwo);
        i++;
      } else if (isUnique === false) {
        numberListArray.push(randomNumberTwo);
        i++;
      } else {
        continue;
      }
    }
    return numberListArray;
  }
}

console.log(generateNumbers(0, 20, false));

// ### Bonus

// -   Add an argument to your function called `isUnique`
// -   If this is set to true, there should be not duplicate numbers in the output

// ### Bonus

// -   Add validation to your function to prevent negative values for `n` and `r`
// -   Add validation to ensure `n < r` when `isUnique` is true
