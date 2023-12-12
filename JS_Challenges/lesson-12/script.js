function allowedInThePub(age) {
  return age >= 18;
}

const formElement = document.querySelector("form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const ageInput = document.querySelector("#ageInput");
  const parsedAge = parseInt(ageInput.value);

  const button = document.querySelector("#submitInput");
  const isAllowedInPub = allowedInThePub(parsedAge);

  button.classList.remove("red");
  button.classList.remove("green");

  const buttonClass = isAllowedInPub ? "green" : "red";

  button.classList.add(buttonClass);
});
