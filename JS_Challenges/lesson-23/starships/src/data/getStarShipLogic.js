export const getUserData = async () => {
  const fetchedUsers = await fetch("https://swapi.dev/api/starships");
  const userData = await fetchedUsers.json();
  const userResultsArr = userData.results;
  console.log(userData.results[0], "starship data");
  const dataToReturn = userResultsArr.map((user) => {
    const cleanedUser = {
      name: user.name,
      manufacturer: user.manufacturer,
      length: parseFloat(user.length.replace(",", "")),
    };
    return cleanedUser;
  });
  return dataToReturn;
};

export const getUserDataByName = async (name) => {
  console.log(name);
  const fetchedUsers = await fetch(
    `https://swapi.dev/api/starships/?search=${name}`
  );
  const userData = await fetchedUsers.json();
  const userResultsArr = userData.results;
  console.log(userData.results[0], "data");
  const dataToReturn = userResultsArr.map((user) => {
    const cleanedUser = {
      name: user.name,
      manufacturer: user.manufacturer,
      length: parseFloat(user.length.replace(",", "")),
    };
    return cleanedUser;
  });
  return dataToReturn;
};
