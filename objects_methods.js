const obj = {
  x: 1,
  y: 5,
  z: 12,
};

let values = Object.values(obj);

console.log(values);

let sum = 0;
for (let i = 0; i < values.length; i++) {
  sum += values[i];
}
console.log(sum);
