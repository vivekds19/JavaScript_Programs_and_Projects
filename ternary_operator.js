const readlinesync = require("readline-sync");

const marks = readlinesync.question("Enter your marks: ");

const result = marks >= 35 ? "Pass" : "Fail";

console.log(`${result}`);
