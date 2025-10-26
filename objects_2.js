const readLineSync = require("readline-sync");

let key = readLineSync.question("Enter the key(name/city/age/state) ");

let  course = readLineSync.question("the courses are(html/css/js/reactjs) ");

const obj = {
  name: "vivek",
  age: 25,
  [course]: "Not available",
};

obj.city="bengaluru";

obj.state="Ka"

console.log(obj)

console.log(obj[key])
console.log(obj[course])