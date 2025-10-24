// array splice modifies the original array by removing or replacing existing elements and/or adding new elements in place. It returns an array containing the deleted elements.
let arr = ["html", "css", "react.js", "jquery"];

let updatedCourses = arr.splice(0, 3);

//console.log(updatedCourses)

// string slice - it extracts a section of a string and returns it as a new string, without modifying the original string.

let username = "vivek";

let firstChar = username[0].toUpperCase();

let capitalized = firstChar + username.slice(1);

console.log(capitalized);

console.log(username);

