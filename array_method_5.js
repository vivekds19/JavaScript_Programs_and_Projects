const readlineSync = require("readline-sync");

const availableSize = ["S", "M", "L", "XL"];

const userSize = readlineSync.question("Which size do you want (S/M/L/XL): ");

console.log(availableSize.includes(userSize));
