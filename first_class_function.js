//01

const greetmessage = function () {
  return "hello welcome to js course";
};

console.log(greetmessage());

//02

function wrapper() {
  return "welcome to js course";
}

function greet(inner, name) {
  const input = inner();
  console.log(name, input);
}
greet(wrapper, "vivek");

//03

function message() {
  function inner() {
    let name = "vds";
    console.log(name, "weclome to js course");
  }
  return inner;
}

message()();