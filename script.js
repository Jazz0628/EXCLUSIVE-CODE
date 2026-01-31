const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

const moveButton = () => {
  // Subtracting button size and a small margin (20px) to keep it inside the glass
  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  const newX = Math.max(10, Math.floor(Math.random() * maxX));
  const newY = Math.max(10, Math.floor(Math.random() * maxY));

  noBtn.style.position = "fixed";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
};

noBtn.addEventListener("mouseover", moveButton);

noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // Stop the click from happening
  moveButton();
});

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "block";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "flex";
    gifResult.play();
  }, 3000);
});
