// JavaScript code
let startTime;
let timerInterval;

function updateClock() {
  //Getting current Date
  const now = new Date();

  const timeElapsed = now.getTime() - startTime.getTime();

  //Hours, minutes, seconds beign Calculated
  let hours = Math.floor(timeElapsed / 3600000);
  let minutes = Math.floor((timeElapsed % 3600000) / 60000);
  let seconds = Math.floor((timeElapsed % 60000) / 1000);

  // Add a leading zero for single-digit minutes and seconds
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // Update the text of the span elements with the current time
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
  
}

//Start Timer Function
function startTimer() {
  if (!startTime) {
    startTime = new Date();
  }
  if (!timerInterval) {
    //Using setInternal provided by Vanilla Javascript
    document.getElementById("timerStatus").textContent = "Timer Started Successfully!!";
    timerInterval = setInterval(updateClock, 1000);
  }
}

//Stop Timer Function
function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  document.getElementById("timerStatus").textContent = "Timer Stopped Successfully!!";
}

//Reset Timer Function
function resetTimer() {
  startTime = null;
  stopTimer();
  document.getElementById("hours").textContent = "00";
  document.getElementById("minutes").textContent = "00";
  document.getElementById("seconds").textContent = "00";
  document.getElementById("timerStatus").textContent = "Timer Reset Successfully!!";
}

// Adding click event listener to all three buttons
document.getElementById("startButton").addEventListener("click", startTimer);
document.getElementById("stopButton").addEventListener("click", stopTimer);
document.getElementById("resetButton").addEventListener("click", resetTimer);
