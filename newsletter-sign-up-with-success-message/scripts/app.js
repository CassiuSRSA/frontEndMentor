const subscribeElement = document.querySelector("#subscribe");
const subscribeBtn = subscribeElement.querySelector("button");

const inputElement = document.querySelector("input");

const successElement = document.querySelector("#success");
const successBtn = successElement.querySelector("button");

const handleSubmit = (e) => {
  e.preventDefault();
  if (
    inputElement.value.trim().length === 0 ||
    !inputElement.value.includes("@")
  ) {
    alert("Please enter valid email");
    return;
  }
  inputElement.value = "";
  subscribeElement.classList.toggle("hide");
  successElement.classList.toggle("hide");
};

const handleDismiss = (e) => {
  subscribeElement.classList.toggle("hide");
  successElement.classList.toggle("hide");
};

subscribeBtn.addEventListener("click", handleSubmit);
successBtn.addEventListener("click", handleDismiss);
