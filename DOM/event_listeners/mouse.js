let input = document.querySelector(".input");

//input.addEventListener("mousedown", (event) => {
// console.log(event.button);
//});

document.body.addEventListener("mousedown", (event) => {
  let x = event.pageX;
  let y = event.pageY;
  const result = `the x cors ${x} , and the y cors ${y}`;

  console.log(result);
});
