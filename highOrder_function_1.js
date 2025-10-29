function greetMessage() {
  return function () {
    console.log("hello from the innner function");
  };
}

greetMessage()();