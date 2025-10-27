const employee = {
  engineers: {
    emp1: {
      id: 1,
      name: "vivek",
      job: "software developer",
    },
    emp2: {
      id: 2,
      name: "varun",
      job: "java developer",
    },
  },
  youtube: {
    emp3: {
      id: 2,
      name: "vishnu",
      job: "content creator",
    },
  },
};

let {engineers:{emp1}}=employee
let {engineers:{emp2:{name}}}=employee
let {youtube:{emp3}}=employee

console.log(emp1)
console.log(name)
console.log(emp3)