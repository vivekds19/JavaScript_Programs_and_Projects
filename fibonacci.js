const readLineSync = require("readline-sync");
const number = readLineSync.question("Enter the number: ");

let a = 0;
let b = 1;

for (let i = 0; i < number; i++) {
  console.log(a);
  let c = a + b;
  a = b;
  b = c;
}
