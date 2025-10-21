let s = "Hello";
let p = "Hello";
let result = -1;

for (let i = 0; i <= s.length - p.length; i++) {
  let match = true;
  for (let j = 0; j < p.length; j++) {
    if (s[i + j] !== p[j]) {
      match = false;
      break;
    }
  }
  if (match) {
    result = i;
  }
}
console.log(result);