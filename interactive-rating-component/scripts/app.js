const ratingsCard = document.querySelector(".card.rate");
const thankYouCard = document.querySelector(".card.thank-you");
const ratingsContainerElement = document.querySelector(".ratings-container");
const submitBtn = document.querySelector("button");
const messageElement = document.querySelector(".message p");

console.log(thankYouCard);

let selectedOption;
let selectedDisplay;

ratingsContainerElement.addEventListener("click", (e) => {
  if (selectedOption || selectedOption === 0) {
    ratingsContainerElement.children[selectedOption].classList.remove(
      "selected"
    );
    selectedOption = e.target.dataset.number - 1;
    ratingsContainerElement.children[selectedOption].classList.add("selected");
  } else {
    selectedOption = e.target.dataset.number - 1;
    ratingsContainerElement.children[selectedOption].classList.add("selected");
  }
});

submitBtn.addEventListener("click", () => {
  if (selectedOption || selectedOption === 0) {
    selectedDisplay = selectedOption + 1;
    messageElement.textContent = `You selected ${selectedDisplay} out of 5`;
    ratingsCard.classList.add("hide");
    thankYouCard.classList.remove("hide");
  }
});
