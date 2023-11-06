// Iteration 5: Store the player score and display it on the game over screen
let s = localStorage.getItem("s");
console.log(s);

var finalscore = document.getElementById("score-board");

var playAgainButton = document.getElementById("play-again-button");

finalscore.innerHTML = s;
playAgainButton.onclick = (evt) => {
  location.href = "./game.html";
};
