const sum = (a) => {
  let total = 0;
  for (let i = 1; i <= a; i++) {
    total += i;
  }
  return total;
};
console.log(sum(20));
