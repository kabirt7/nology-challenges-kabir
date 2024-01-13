/* This challenge build upon previous knowledge and introduces the use of objects */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function that takes a furniture object from the catalogue and returns its price
 *
 * furniture = {
 *  name: "lack",
 *  price: 6
 * }
 *
 * @param {{name: string, price: number}} furniture - A piece of furniture from the catalogue
 * @return {number} The price of the piece of furniture
 */
export const getFurniturePrice = (furniture) => {
  return furniture.price;
};

/**
 * A function to attach a store location to a furniture object from the catalogue
 *
 * @param {{name: string, price: number}} furniture - A piece of furniture from the catalogue
 * @param {string} location - A store location to attach to a piece of furniture
 * @returns {{name: string, price: number, location: string}} furniture - A furniture object from the catalogue
 */
export const setFurnitureStoreLocation = (furniture, location) => {
  // const newObj = { ...furniture, location: location };
  // return newObj;
  return { ...furniture, location };
  // if key and value are same, can use shorthand

  // furniture.location = location;
  // return furniture;
  // ^ THIS METHOD MODIFIES THE ORIGINAL OBJECT

  // let obj = {};
  // obj.name = furniture.name;
  // obj.price = furniture.price;
  // obj.location = location;
  // return obj;
  // ^ along with mine, this method does not alter the original object
  // i think it would if the data was in an array
};

/**
 * A function which takes a selection of arguments relating to a space ship and uses them
 * to create a space ship object
 *
 * @param {string} name The name of the space ship
 * @param {number} noOfSeats The number of seat of the space ship
 * @param {string} engineType The type of engine in the space ship
 * @param {boolean} canTravelSolarSystems The ability for the space ship to travel to different solar systems
 * @returns {{name: string, noOfSeats: number, engineType: string, canTravelSolarSystems: boolean}} spaceship - The space ship object
 */
export const makeSpaceship = (
  name,
  noOfSeats,
  engineType,
  canTravelSolarSystems
) => {
  const obj = {
    name: name,
    noOfSeats: noOfSeats,
    engineType: engineType,
    canTravelSolarSystems: canTravelSolarSystems,
  };
  return obj;
};

/* Intermediate Challenges */

/**
 * A function that will attach a username to a user but only if the user doesn't already have one
 *
 * @param {{name: string, username?: string}} user - A user object, ? means optional parameter
 * @param {string} username - A username to attach
 * @returns {{name: string, username: string}} User - The user object with the same username or a new one
 */
export const setUserName = (user, username) => {
  // if (!user.username && username) {
  //   let newObj = { ...user, username: username };
  //   return newObj;
  // }
  // return user;

  // if (!("username" in user)) {
  //   user.username = username;
  // }
  // return user;

  // user.username = user.username ? user.username : username;
  // return user;

  user.username ||= username;
  return user;
};

/**
 * A function which takes a customer object from the database and returns the same object where the name has been
 * split into first and last name and reattached to the object
 *
 * @param {{fullName: string,}} customer A customer object from the database
 * @returns {{fullName: string, firstName: string, lastName: string}} A customer object from the database with the name separated into first and last
 */
export const splitFullNameToFirstAndLast = (customer) => {
  // let name = customer.fullName;
  // let [firstName, lastName] = name.split(" ");
  // let newObj = { ...customer, firstName, lastName };
  // return newObj;

  let splitName = customer.fullName.split(" ");
  customer.firstName = splitName[0];
  customer.lastName = splitName[1];
  return customer;

  // let tempSubStringOne = customer["fullName"].substring(
  //   0,
  //   customer["fullName"].indexOf(" ")
  // );
  // let tempSubStringTwo = customer["fullName"].substring(
  //   customer["fullName"].indexOf(" ") + 1
  // );
  // customer["firstName"] = tempSubStringOne;
  // customer["lastName"] = tempSubStringTwo;
  // return customer;
};

/**
 * A function which has access to a given key on an object
 *
 * HELPFUL RESOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
 *
 * @param {object} object An object with some key value pairs (Not important what they are)
 * @param {string} key A key to access on the object
 * @returns {any} value - The value you have accessed on the object
 */
export const accessGivenKey = (object, key) => {
  const value = object[key];
  return value;
};

/* Advanced Challenges */

/**
 * A function which takes a user object, accesses it's address and returns it as a string to print onto a shipping label
 * "4 Privet Drive Little Whinging Surrey CR3 0AA"
 *
 * @param {{id: number, name: string, address: {line1: string, line2: string, city: string, postcode: string}}} user - A user object from the database
 * @returns {string} An address string for a shipping label
 */
export const getUserAddress = (user) => {
  const { address } = user;

  const addressString =
    address.line1 +
    " " +
    address.line2 +
    " " +
    address.city +
    " " +
    address.postcode;

  return addressString;
};

/**
 * A function that given a customer for the restaurant with a list of known allergies and a list of allergens in an array,
 * will attach an array of allergens safe for the customer to eat to the customer object and return it
 *
 * @param {{id: number, name: string, allergies: string[]}} customer - A customer for the restaurant
 * @param {string[]} allergenList - A list of all known allergens
 * @return {{id: number, name: string, allergies: string[], safeAllergens: string[]}} customer
 */
export const setSafeAllergens = (customer, allergenList) => {
  const { allergies } = customer; // the destructuring assignment, the allergies constant holds the array ["peanuts", "dairy"] that was originally part of the customer object
  let safeAllergens = [];

  for (let i = 0; i < allergenList.length; i++) {
    if (!allergies.includes(allergenList[i])) {
      safeAllergens.push(allergenList[i]);
    } else {
      continue;
    }
  }

  customer.safeAllergens = safeAllergens;

  return customer;
};

/* Expert Challenge */

/**
 * A function which takes two objects which hold different information about the same piece of furniture, merges them
 * and returns it. You should do this WITHOUT modifying the original pieces of data
 *
 * @param {{id: number, location: string, sku: string}} furnitureLocationData - All of the data about the furnitures location in the store
 * @param {{id: number, name: string, price: number, isAvailable: boolean}} furnitureProductData - All of the data about the furniture product
 * @returns {{id: number, location: string, sku: string, name: string, price: number, isAvailable: boolean}}
 */
export const mergeFurniture = (furnitureLocationData, furnitureProductData) => {
  const mergedFurniture = { ...furnitureLocationData, ...furnitureProductData };
  return mergedFurniture;
};
