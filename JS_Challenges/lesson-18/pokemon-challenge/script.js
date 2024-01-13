const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const cardContainer = document.querySelector("#cardContainer");

function toggleModal(modalElement) {
  modalElement.classList.toggle("hidden");
}

async function fetchData() {
  try {
    console.log("DOM loaded");

    let response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=1025",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    const jsonData = await response.json();
    console.log(response);
    console.log(jsonData);
    console.log(jsonData.length);

    const chosenPokemon = randomise(jsonData.results);
    console.log(chosenPokemon.length);
    addCards(chosenPokemon);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

let randomisedArray = [];
const randomise = (arr) => {
  let newArray = arr.slice();

  for (let i = 0; i < 40; i++) {
    let randomIndex = Math.floor(Math.random() * newArray.length);
    randomisedArray.push(newArray[randomIndex]);
    newArray.splice(randomIndex, 1);
    console.log(newArray);
  }

  return randomisedArray;
};

// Function to add Pokemon cards to the container
async function addCards(arr) {
  const cardPromises = arr.map(async (pokemon) => {
    try {
      let pokemonCard = document.createElement("article");
      let pokemonTitle = document.createElement("h4");
      let pokemonImage = document.createElement("img");
      let pokemonType = document.createElement("h5");
      let pokemonAbility = document.createElement("h3");

      pokemonCard.id = pokemon.name;
      pokemonCard.classList.add("card-outline");
      pokemonTitle.classList.add("card-title");
      pokemonImage.classList.add("card-image");
      pokemonType.classList.add("card-type");
      pokemonAbility.classList.add("modal");
      pokemonAbility.classList.add("hidden");

      pokemonTitle.textContent = pokemon.name;

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      const pokemonData = await response.json();
      console.log(response);

      if (response.status === 404) {
        throw new Error("Pokemon not found");
      }

      console.log(pokemonData);

      let sprite =
        pokemonData.sprites.other.dream_world.front_default ||
        pokemonData.sprites.front_default;

      if (sprite) {
        pokemonImage.src = sprite;
      } else {
        pokemonImage.style.display = "none";
      }

      console.log(pokemonData);

      let pokemonTypeString = "";
      const pokemonTypeList = pokemonData.types;
      console.log(pokemonTypeList);
      for (const typeObject of pokemonTypeList) {
        pokemonTypeString += typeObject.type.name + " ";
      }
      console.log(pokemonTypeString);
      pokemonType.textContent = pokemonTypeString;

      let pokemonAbilityString = "";
      const pokemonAbilityList = pokemonData.abilities;
      console.log(pokemonAbilityList);
      for (const abilityObject of pokemonAbilityList) {
        pokemonAbilityString += abilityObject.ability.name + " ";
      }
      console.log(pokemonAbilityString);
      pokemonAbility.textContent = pokemonAbilityString;

      pokemonTitle.textContent = pokemonData.name;

      pokemonCard.appendChild(pokemonType);
      pokemonCard.appendChild(pokemonImage);
      pokemonCard.appendChild(pokemonTitle);
      pokemonCard.appendChild(pokemonAbility);
      cardContainer.appendChild(pokemonCard);

      pokemonCard.addEventListener("click", () => {
        toggleModal(pokemonAbility);
      });
    } catch (error) {
      console.error("Error adding cards:", error);
    }
  });

  // Use Promise.all to wait for all promises to resolve before continuing
  await Promise.all(cardPromises);
}

// Event listener for search form
searchForm.addEventListener("submit", search);

function search(event) {
  event.type === "submit" ? event.preventDefault() : 0;

  const searchTerm = searchInput.value.trim().toLowerCase();
  console.log(searchTerm);

  if (searchTerm === "") {
    const elements = document.querySelectorAll(".card-outline");
    elements.forEach((element) => {
      element.style.display = "flex";
    });
  } else {
    searchPokemon(searchTerm);
  }
}

function searchPokemon(value) {
  for (const pokemon of randomisedArray) {
    const name = pokemon.name.toLowerCase();
    const element = document.getElementById(name);

    if (name.includes(value)) {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  }
}

console.log(randomisedArray.length);

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Backspace") {
    setTimeout(function () {
      search(event);
    }, 100);
  }
});
