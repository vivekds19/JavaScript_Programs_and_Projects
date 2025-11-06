function greet(name, sayBye) {
  console.log("Hello, " + name);
  sayBye();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Vivek", sayBye);
