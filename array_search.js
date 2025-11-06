const arr = [1, 20, 30, 55, 2, 3, 12];

const x = 30;

const search = (arr, x) => {
  // code here
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}
console.log(search(arr, x));
