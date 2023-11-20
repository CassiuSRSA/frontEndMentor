const formElement = document.querySelector("form");
const errorIconElement = document.querySelector(".error-icon");
const errorMessageElement = document.querySelector(".error-message");
const inputElement = document.querySelector("input");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailEntered = inputElement.value;
  if (
    emailEntered.trim().length === 0 ||
    emailEntered.includes("@") === false
  ) {
    errorIconElement.classList.add("error");
    errorMessageElement.classList.add("error");
    formElement.classList.add("error");
    setTimeout(() => {
      errorIconElement.classList.remove("error");
      errorMessageElement.classList.remove("error");
      formElement.classList.remove("error");
    }, 3000);
  } else {
    errorMessageElement.classList.add("success");
    errorMessageElement.textContent = "Thank you, your email was added!";
    inputElement.value = "";
    errorIconElement.classList.remove("error");
    errorMessageElement.classList.remove("error");
    formElement.classList.remove("error");
    setTimeout(() => {
      errorMessageElement.classList.remove("success");
      errorMessageElement.textContent = "Please provide a valid email";
    }, 3000);
  }
});
