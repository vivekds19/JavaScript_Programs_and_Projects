const person = {
  name: "vivek",
  age: 22,
  greet: () => {
    return this.name
  },
};

console.log(person.greet())
