let promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("the promise1 resolved"), 3000);
});
let promise2 = new Promise((_,reject) => {
  setTimeout(() => reject("the promise2 rejected"), 2000);
});
let promise3 = new Promise((resolve) => {
  setTimeout(() => resolve("the promise2 resolved"), 1000);
});

let arrpromises = [promise1, promise2, promise3];

let promise = Promise.allSettled(arrpromises);
promise.then((data) => console.log(data)).catch((error) => console.log(error));
