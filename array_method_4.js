//splice

let courses = [
  "html",
  "css",
  "javascript",
  "reactjs",
  "node.js",
  "express.js",
  "mongodb",
];

// remove the elements using splice

courses.splice(3, 1);

console.log(courses);

// add elements to the array

courses.splice(3, 0, "vue.js");

console.log(courses);
