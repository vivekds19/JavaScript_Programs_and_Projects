const arr = [1, 2, 3, 4, 5];

function square(number) {
  return number ** 2;
}

function cube(number) {
  return number ** 3;
}

function calculatePower(wrapper, arr) {
  let tempArr = [];
  for (let number of arr) {
    tempArr.push(wrapper(number));
  }
  return tempArr;
}

const squaredOfNUmber = calculatePower(square, arr);
const cubedOfNumber = calculatePower(cube, arr);

console.log(squaredOfNUmber);
console.log(cubedOfNumber);
