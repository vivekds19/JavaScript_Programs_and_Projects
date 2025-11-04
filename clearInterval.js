let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log(counter);
  if (counter === 5) {
    clearInterval(intervalId);
  }
}, 1000);
