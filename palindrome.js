const readlinesync = require("readline-sync");

let rl = readlinesync.question("Enter the string to check the palindrome: ");

rl = rl.toLowerCase();

let right = rl.length - 1;
let left = 0;

let ispalindrome = true;

while (left < right) {
  if (rl[left] !== rl[right]) {
    ispalindrome = false;
    break;
  }
  right--;
  left++;
}
if (ispalindrome) {
  console.log("The given string is a palindrome");
} else {
  console.log("The given string is not a palindrome");
}
