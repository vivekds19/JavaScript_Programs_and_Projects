function findSum(A, N) {
  if (N <= 0) return 0;

  return A[N - 1] + findSum(A, N - 1);
}
let A = [1, 2, 3, 4, 5];

let N = A.length;
console.log(findSum(A, N));
