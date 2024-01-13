/* This challenge build upon previous knowledge and introduces the concept of complex data types (arrays of objects) */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function which takes an array of employee objects and returns just an array of their quotes so we can later put
 * them on the website.
 *
 * @param {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} employeeArr - An array of employee objects
 * @returns {string[]} A list of the employees quotes for the website
 */
export const getEmployeeQuotes = (employeeArr) => {
  //let listString = [];

  return employeeArr.map((emp) => emp.quote);
};

//return listString;
/**
 * A function which takes an array of employee objects and returns a new array only containing employees that are managers.
 *
 * @param {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} employeeArr - An array of employee objects
 * @returns {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} An array containing only managers
 */
export const getTheManagers = (employeeArr) => {
  return employeeArr.filter((emp) => emp.isManagement);
  // let managerArr = [];
  // return employeeArr.map((emp) => {
  //   if (emp.isManagement) {
  //     managerArr.push(emp);
  //   }
  // });
  // return managerArr;
};

/**
 * A function which tells you the number of keys on the provided object.
 *
 * @param {object} object - The provided object with an assortment of keys
 * @returns {number} The number of the keys on the object
 */
export const getNumberOfKeys = (object) => {
  return Object.keys(object).length;
};

/* Intermediate Challenges */

/**
 * A function to find the most expensive item in the basket and returns it in order to offer this customer a discount
 * later on down the line.
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {{name: string, price: number, hasFreeShipping: boolean, quantity: number}} The most expensive item in the shopping basket
 */
export const findMostExpensiveItem = (shoppingBasketArr) => {
  // search array for object with the highest price

  // Initialize accumulator with the first item in the array
  return shoppingBasketArr.reduce((acc, value) => {
    // Compare prices to find the most expensive item
    if (value.price > acc.price) {
      return value;
    } else {
      return acc;
    }
  }, shoppingBasketArr[0]);
};

/**
 * A function which adds a new key of totalPrice to each shopping basket item in the array where total cost is
 * the price * the quantity of items ordered i.e.
 * {
 *  name: "jeans",
 *  price: 30,
 *  hasFreeShipping: false,
 *  quantity: 2,
 *  totalPrice: 60
 * }
 * Then returns a new array of objects
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {{name: string, price: number, hasFreeShipping: boolean, quantity: number, totalPrice: number}[]} A new array where each object has had a total price added to it
 */
export const settotalPrice = (shoppingBasketArr) => {
  let newArr = [];
  shoppingBasketArr.map((item) => {
    const newItem = { ...item };
    newItem.totalPrice = newItem.price * newItem.quantity;
    newArr.push(newItem);
  });
  return newArr;

  // return {...item, totalPrice: item.price * item.quantity }:

  // const copy = shoppingBasketArr.map (item => ({...item}));
};

/**
 * A function which sums the total cost of every item in the array and returns it as a single number.
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number, totalPrice: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {number} The total cost of the order
 */
export const totalShoppingBasket = (shoppingBasketArr) => {
  return shoppingBasketArr.reduce((acc, curr) => {
    acc += curr.price * curr.quantity;
    return acc;
  }, 0);
};

/* Advanced Challenges */

/**
 * A function which takes an array of meal objects, removes un-needed keys from the objects and returns a new array of
 * meal objects.
 *
 * @param {{id: number, name: string, ingredients: string[], country: string, timeStamp: number, userCreated: string}[]} mealsArr - An array containing meal objects
 * @returns {{id: number, name: string, ingredients: string[], country: string}[]} An array of cleaned meal objects
 */
export const getImportantKeys = (mealsArr) => {
  let newObjArr = [];
  mealsArr.map((meal) => {
    let newMeal = { ...meal };
    delete newMeal.timeStamp;
    delete newMeal.userCreated;
    newObjArr.push(newMeal);
  });
  return newObjArr;
};

/**
 * A function which takes an array of meal objects and check if every object contains the necessary keys. If a key is
 * missing it adds a default value instead.
 * default values:
 * isVegetarian = false
 * timeToCook = 15
 *
 * @param {{id: number, name: string, ingredients: string[], country: string, isVegetarian?: boolean, timeToCook?: number}[]} mealsArr - An array containing meal objects
 * @returns {{id: number, name: string, ingredients: string[], country: string, isVegetarian: boolean, timeToCook: number}[]}
 */
export const setImportantKeys = (mealsArr) => {
  return mealsArr.map((meal) => {
    let newMeal = { ...meal };
    if (Object.keys(newMeal).indexOf("isVegetarian") > -1) {
    } else {
      newMeal.isVegetarian = false;
    }

    // (!Object.keys (meal). includes ( 'timeToCook))

    if (Object.keys(newMeal).indexOf("timeToCook") > -1) {
    } else {
      newMeal.timeToCook = 15;
    }
    return newMeal;

    // return {
    //   You,
    //   ..item,
    //   isVegetarian:
    //   item.isVegetarian || false,
    //   timeToCook: item.timeToCook | | 15,}

    // const {isVegetarian = false, timeToCook = 15} = item;
    // return {...item, isVegetarian, timeToCook}:
  });
};

/* Expert Challenge */

/**
 * A function that takes a raw response from a cocktail API and turn each object in the response into a cleaner form
 * so that it is easier to work with.
 *
 * @param {{
 *  idDrink: number,
 *  strDrink: string,
 *  strCategory: string,
 *  strAlcoholic: string,
 *  strInstructions: string,
 *  strIngredient1: string | null,
 *  strIngredient2: string | null,
 *  strIngredient3: string | null,
 *  strIngredient4: string | null,
 *  strIngredient5: string | null,
 *  strIngredient6: string | null
 * }[]} cocktailData - The raw response from the cocktail API
 * @returns {{
 *  id: number,
 *  drink: string,
 *  category: string,
 *  alcoholic: string,
 *  instructions: string,
 *  ingredients: string[],
 * }[]} A Cleaned array of cocktail data
 */
export const cleanCocktailResponseData = (cocktailData) => {
  return cocktailData.map((cocktail) => {
    let newDrink = { ...cocktail };
    newDrink.id = newDrink.idDrink;
    newDrink.drink = newDrink.strDrink;
    newDrink.category = newDrink.strCategory;
    newDrink.alcoholic = newDrink.strAlcoholic;
    newDrink.instructions = newDrink.strInstructions;
    newDrink.ingredients = [
      newDrink.strIngredient1,
      newDrink.strIngredient2,
      newDrink.strIngredient3,
      newDrink.strIngredient4,
      newDrink.strIngredient5,
      newDrink.strIngredient6,
    ].filter(Boolean); // this part removes the falsey values from the array
    delete newDrink.idDrink;
    delete newDrink.strDrink;
    delete newDrink.strCategory;
    delete newDrink.strAlcoholic;
    delete newDrink.strInstructions;
    delete newDrink.strIngredient1;
    delete newDrink.strIngredient2;
    delete newDrink.strIngredient3;
    delete newDrink.strIngredient4;
    delete newDrink.strIngredient5;
    delete newDrink.strIngredient6;
    return newDrink;
  });

  // return cocktailData.map((cocktail) => {
  //   Create a new object to avoid modifying the original
  //   let newDrink = {
  //     id: cocktail.idDrink,
  //     drink: cocktail.strDrink,
  //     category: cocktail.strCategory,
  //     alcoholic: cocktail.strAlcoholic,
  //     instructions: cocktail.strInstructions,
  //     ingredients: [
  //       cocktail.strIngredient1,
  //       cocktail.strIngredient2,
  //       cocktail.strIngredient3,
  //       cocktail.strIngredient4,
  //       cocktail.strIngredient5,
  //       cocktail.strIngredient6,
  //     ].filter(Boolean), // Filter out null values
  //   };

  //   return newDrink;
  // });
};
