const arr = [10, 20, 30, 0, 0, 0, 0, 0, 0, 0];

const countZeroes = (arr) => {
  let count = 0;
  for (let num of arr) {
    if (num === 0) count++;
  }
  return count;
};

console.log(countZeroes(arr));
