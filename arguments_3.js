function total(a = 10) {
  console.log(a);
  console.log(arguments);
  arguments[0] = 9;
  console.log(arguments);
  console.log(a);
}

total(4);
