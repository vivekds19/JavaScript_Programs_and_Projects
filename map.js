const arr = [1, 2, 3, 4, 5];

const arrow = (number,index) => {
  console.log(index);
  return number ** 2;
};

const result = arr.map(arrow);

console.log(result);
