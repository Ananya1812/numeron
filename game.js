// Iteration 2: Generate 2 random number and display it on the screen
var n1 = Math.round(Math.random() * 100);
let numbox1 = document.getElementById("number1");
numbox1.innerHTML = n1;

var n2 = Math.round(Math.random() * 100);
let numbox2 = document.getElementById("number2");
numbox2.innerHTML = n2;

// Iteration 3: Make the options button functional
const greater = document.getElementById("greater-than");
const same = document.getElementById("equal-to");
const lesser = document.getElementById("lesser-than");

var score = 0;

greater.onclick = () => {
  if (n1 > n2) {
    score++;
    resetTime(timerId);
  } else {
    location.href = "./gameover.html";
  }

  n1 = Math.round(Math.random() * 100);
  numbox1.innerHTML = n1;
  n2 = Math.round(Math.random() * 100);
  numbox2.innerHTML = n2;
};

lesser.onclick = () => {
  if (n1 < n2) {
    score++;
    resetTime(timerId);
  } else {
    location.href = "./gameover.html";
  }

  n1 = Math.round(Math.random() * 100);
  numbox1.innerHTML = n1;
  n2 = Math.round(Math.random() * 100);
  numbox2.innerHTML = n2;
};

same.onclick = () => {
  if (n1 == n2) {
    score++;
    resetTime(timerId);
  } else {
    window.location.href = "./gameover.html";
  }

  n1 = Math.round(Math.random() * 100);
  numbox1.innerHTML = n1;
  n2 = Math.round(Math.random() * 100);
  numbox2.innerHTML = n2;
};

// Iteration 4: Build a timer for the game
var time = 10;
var timer = document.getElementById("timer");
var timerId;

function startTimer() {
  time = 10;
  timer.innerHTML = time;
  timerId = setInterval(() => {
    time--;
    if (time == 0) {
      location.href = "./gameover.html";
    }
    timer.innerHTML = time;
  }, 1000);
  localStorage.setItem("score", score);
}

function resetTime(intervalId) {
  clearInterval(intervalId);
  startTimer();
}

startTimer();
