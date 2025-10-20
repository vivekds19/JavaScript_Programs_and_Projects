const readlinesync = require("readline-sync");

const marks = readlinesync.question("Enter your marks: ");

const result = marks < 35 ? "Fail" : marks < 45 ? "D Grade" : marks < 60 ? "C Grade" : marks < 75 ? "B Grade" : marks < 90 ? "A Grade" : "A+ Grade";

console.log(`${result}`);
