let checkEven = new Promise((resolve, reject) => {
  let number = 4;
  if (number % 2 === 0) resolve("the number is even");
  else reject("the number is odd");
});
checkEven
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
