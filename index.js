//generate random number
let num = Math.trunc(Math.random() * 10 + 1);
// call elements in html
let submitButton = document.querySelector(".submit");
let input = document.querySelector(".input");
let result = document.querySelector(".result");
let guessNum = document.querySelector(".guess-num");
let overlay = document.querySelector(".over-lay");

// function
submitButton.addEventListener("click", showResult);
function showResult() {
  let newInput = Number(input.value);
  if (newInput === num) {
    result.textContent = `well done :)`;
    showColor();
    overlay.style.display = "block";
    guessNum.textContent--;
  } else {
    result.textContent = `Try again :]`;
    showColor();
    guessNum.textContent--;
  }
  showOverLay();
}

console.log(num)
//for backgroundcolor
function showColor() {
  result.classList.add("active");
}
//for show overlay
function showOverLay() {
  if (guessNum.textContent === "0") {
    result.textContent = `Game Over`;
    overlay.style.display = "block";
  }
}
