Promise.race([
  new Promise((resolve) => setTimeout(() => resolve("Task 1 finished"), 1000)),
  new Promise((_, reject) => setTimeout(() => reject("Task 2 finished"), 500)),
])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
