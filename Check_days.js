const readlinesync = require("readline-sync");

const day = readlinesync.question("Enter the day number (1-7): ");

const result = 
day== 1 ? "Monday" :
day== 2 ? "Tuesday" :
day== 3 ? "Wednesday" :
day== 4 ? "Thursday" :
day== 5 ? "Friday" :
day== 6 ? "Saturday" :
day== 7 ? "Sunday" :
"Invalid day number";

console.log(`${result}`);
