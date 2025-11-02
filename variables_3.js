var x = 5;// global variable

function hello() {
  var b = 7;
  console.log(x);
  console.log(b);// local variable
}

hello();
console.log(x);
console.log(b);
