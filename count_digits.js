let digits = 123456789
let count = 0;

while (digits > 0) {
  digits = Math.floor(digits / 10);
  count++;
}
console.log(count);
