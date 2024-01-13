const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const jokesDisplay = document.querySelector("#renderedJokes");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  jokesDisplay.innerHTML = "";

  const searchTerm = searchInput.value;
  console.log(searchTerm);

  if (searchTerm === "") {
    alert("Please enter a search term.");
  } else {
    searchJokes(searchTerm);
  }
});

async function searchJokes(term) {
  // GET https://icanhazdadjoke.com/search

  const response = await fetch(
    `https://icanhazdadjoke.com/search?term=${term}&limit=30`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  const jsonData = await response.json();
  console.log(response);

  if (response.status === 404) {
    throw jsonData;
  }

  console.log(jsonData);
  console.log(jsonData.results);

  renderJokes(jsonData.results);
}

function renderJokes(arr) {
  arr.forEach((renderedJoke) => {
    const jokeElement = document.createElement("p");
    jokeElement.textContent = renderedJoke.joke;
    jokesDisplay.appendChild(jokeElement);
  });
}
