const user1 = {
  name: "vivek",
  age: 30,
};
const user2 = {
  name: "varun",
  age: 35,
};
const user3 = {
  name: "vishnu",
  age: 33,
};

function sayHi(degree, poy) {
  console.log(this.name, degree, poy);
}

const result = sayHi.bind(user1, "BE-CSE");

result(2022);
