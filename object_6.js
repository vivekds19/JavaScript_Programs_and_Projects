const person1 = {
  name: "vivek",
  age: 24,
  address: {
    city: "bengaluru",
    state: "ka",
  },
};

const person2 = Object.assign({}, person1);

person2.name = "vik";

person2.address.city = "hyderabad";
console.log(person1);
console.log(person2);
