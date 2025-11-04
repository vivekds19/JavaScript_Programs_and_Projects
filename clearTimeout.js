console.log("executed");
const timeoutId = setTimeout(() => {
  console.log("This won't execute");
}, 2000);
clearTimeout(timeoutId);
