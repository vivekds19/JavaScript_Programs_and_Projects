function sum(number) {
  let total = 0;
  for(let i=1;i<=number;i++){
    {
      total += i;
    }
  }
  return total;
}

console.log(sum(20));
