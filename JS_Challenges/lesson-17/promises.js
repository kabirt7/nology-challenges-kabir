// # Delayed inc/dec

// 1. Create a function called `delayedIncDec(n, mode, timeout)`

// - n: Initial number
// - mode: A string - either "inc" or "dec"
// - timeout: delay time in ms - should have a default time of 2.5 seconds if not provided
//   `delayedIncDec` returns a promise that resolves to the initial number increment or decremented - think about what might cause this promise to reject

// 2. Call this function three times with different values of n, modes, and timeouts
// 3. Log each value to the console.

function delayedIncDec(n, mode, timeout = 2500) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mode === "inc") {
        resolve(n + 1);
      } else if (mode === "dec") {
        resolve(n - 1);
      } else {
        reject(new Error("Invalid mode. Use 'inc' or 'dec'."));
      }
    }, timeout);
  });
}

// Example calls
delayedIncDec(5, "inc", 2000)
  .then((result) => console.log("Result 1:", result))
  .catch((error) => console.error("Error:", error));

// const delayedIncDec = (n, mode, timeout = 2500) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (mode === "inc") {
//         resolve(n + 1);
//       } else if (mode === "dec") {
//         resolve(n - 1);
//       } else {
//         reject(new Error("not an increment or decrement of n"));
//       }
//     }, timeout);
//   });
// };

// # Delayed filter

// 1. Create a function called `delayedFilter(array, callback, timeout)`

// - n: Initial Array
// - callback: a filter function
// - timeout: delay time in ms - should have a default time of 2.5 seconds if not provided
//   `delayedFilter` returns a promise that resolves to the filtered array- think about what might cause this promise to reject

// 2. Call this function three times with different values of array, callback, timeout
// 3. Log each result to the console.

function delayedFilter(array, callback, timeout = 2500) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (array.filter(callback)) {
        const filteredArray = array.filter(callback);
        resolve(filteredArray);
      } else {
        reject(new Error("not a valid callback function"));
      }
    }, timeout);
  });
}

const array = [1, 2, 3, 4, 5];
const callback = (num) => num > 2;
delayedFilter(array, callback, 2000)
  .then((result) => console.log("Result 1:", result))
  .catch((error) => console.error("Error:", error));
