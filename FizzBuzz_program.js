const readlinesync = require("readline-sync");

const number = readlinesync.questionInt("Enter a number: ");

if (number % 3 === 0 && number % 5 === 0) {
  console.log("FizzBuzz");
} else if (number % 3 === 0) {
  console.log("Fizz");
} else if (number % 5 === 0) {
  console.log("Buzz");
} else {
  console.log("Its is not divisible by 3 or 5");
}
