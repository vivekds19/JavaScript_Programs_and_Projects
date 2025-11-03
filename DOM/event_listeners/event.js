let startButton = document.querySelector(".start");
let CountBtn = document.querySelector(".count");
let stopButton = document.querySelector(".stop");
let count = 0;

startButton.addEventListener("click", () => {
  if (startButton.innerText === "Start") {
    startButton.innerText = "Stop";
    console.log("started");
  } else {
    startButton.innerText = "Start";
    console.log("stopped");
  }
});

CountBtn.addEventListener("click", () => {
  CountBtn.innerText = "Increase Count";
  count++;
  console.log(count);
});

stopButton.addEventListener("click", () => {
  //stopButton.classList.add("btn-red");
  stopButton.classList.toggle("btn-red");
});
