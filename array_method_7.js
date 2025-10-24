// split and join

const text = "vivek";

console.log(text);

const palindrome = text.split("");

console.log(palindrome.reverse());

const reversed = palindrome.join("");

console.log(reversed);

const ispalindrome = () =>
  reversed === text ? "string is palindrome" : "Not a palindrome";

console.log(ispalindrome());
