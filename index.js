let randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomPath = "/images/dice" + randomNumber1 + ".png";

let dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src", randomPath);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomPath2 = "/images/dice" + randomNumber2 + ".png";

let dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute("src", randomPath2);

// Deciding on Winner

let h1 = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  h1.innerHTML = "Player 1 Won 🏁";
} else if (randomNumber1 === randomNumber2) {
  h1.innerHTML = "It's a tie 🏴‍☠️";
} else {
  h1.innerHTML = "Player 2 Won 🏁";
}
