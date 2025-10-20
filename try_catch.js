const username = "Arjun reddy";

try {
  somefunction();
  console.log(nameing);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
  console.log(username);
} finally {
  console.log("finally executed");
}
