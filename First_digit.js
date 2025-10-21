let n = 12345;

n = Math.abs(n);

while (n >= 10) {
  n = Math.floor(n / 10);
}
console.log(n);
