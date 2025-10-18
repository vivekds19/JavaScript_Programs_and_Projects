const readlinesync = require("readline-sync");

const number = readlinesync.questionInt("Enter a number: ");

if (number % 2 === 0) {
  console.log(`${number} is even`);
  if (number % 4 === 0) {
    console.log(`${number} is also divisible by 4`);
  } else {
    console.log(`${number} is not divisible by 4`);
  }
} else {
  console.log(`${number} is odd`);
}
