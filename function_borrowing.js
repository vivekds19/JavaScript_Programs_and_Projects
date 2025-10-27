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

sayHi.call(user1, "BE-CSE", 2015);
sayHi.call(user2, "BE-AI", 2016);
sayHi.call(user3, "BE-ISE", 2017);
