const person = {
  name: "vivek",
  job: "software developer",
  geet: function () {
    return `hello ${this.name}, i'm a ${this.job}`;
  },
};

console.log(person.geet());
