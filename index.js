(function () {
  const showResult = document.querySelector(".result");
  const userGuesses = document.querySelector(".allGuess");
  const insertNum = document.getElementById("numberInput");
  const form = document.querySelector("form");
  const container = document.querySelector(".container");
  const startButton = document.getElementById("start");
  const submitButton = document.getElementById("submit");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log("Submit btn presses!");
    const userInputValue = parseInt(insertNum.value);
    if (userInputValue === computerGuess) {
      console.log("Correct!");
      winner();
      showResult.innerText = "Congrats. You got it!";
    } else if (userInputValue > computerGuess) {
      console.log("Too high!!");
      showResult.innerText = "Too high!! Try Again.";
    } else if (userInputValue < computerGuess) {
      console.log("Too low!!");
      showResult.innerText = "Too low!! Try Again.";
    }
    array.push(userInputValue);

    form.reset();
    storeInputValue();
  });

  let computerGuess = Math.round(Math.random() * 100);

  let array = [];

  function storeInputValue() {
    console.log(array);
    const guessedNum = array.join(", ");

    userGuesses.innerHTML = "Your Guesses: " + guessedNum;
  }

  function winner() {
    const userInputValue = parseInt(insertNum.value);
    if (computerGuess === userInputValue) {
      startButton.disabled = false;
      submitButton.disabled = true;
    }
  }

  startButton.addEventListener("click", () => {
    array = [];
    showResult.innerText = "";
    userGuesses.innerText = "";
    // form.reset();
    startButton.disabled = true;
    submitButton.disabled = false;
    computerGuess = Math.round(Math.random() * 100);
  });
})();
