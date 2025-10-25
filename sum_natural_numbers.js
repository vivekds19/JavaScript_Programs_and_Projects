const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("enter the number: "));

const sum = (n) => {
  return (n * (n + 1)) / 2;
};

console.log(sum(number));
