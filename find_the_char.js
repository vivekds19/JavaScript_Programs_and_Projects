const findChar = (displayMessage, char) =>
  displayMessage.indexOf(char) === -1
    ? "Character is not found in the String"
    : "Character is found in the String";
const result = findChar("Hello, welcome to JavaScript programming", "r");
console.log(result);
