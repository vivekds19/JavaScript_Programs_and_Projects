const primefactorization = (n) => {
  {
    let factors = [];
    for (let i = 2; i <= n; i++) {
      while (n % i == 0) {
        factors.push(i);
        n = n / i;
      }
    }
    return factors;
  }
};
console.log(primefactorization(100));
