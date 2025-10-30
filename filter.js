const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrow = (number) => {
  return number > 5;
}

const result = array.filter(arrow);

console.log(result);