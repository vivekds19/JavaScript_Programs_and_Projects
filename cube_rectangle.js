const cube = (a) => {
  return a * a * a;
};

const rectangle = (l, b, h) => {
  return l * b * h;
};

const cubic = cube(3);

const rect = rectangle(2, 3, 4);

console.log(cubic);
console.log(rect);
