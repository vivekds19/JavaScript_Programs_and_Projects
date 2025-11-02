function sum(...rest) {
  let total = 0;
  for (value of rest) {
    total += value;
  }
  console.log(total);
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9)
