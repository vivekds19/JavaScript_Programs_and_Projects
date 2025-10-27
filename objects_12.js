function ageVerify() {
  if (this.age > 18) {
    console.log("yes you can drive");
  } else {
    console.log("you cannot drive ");
  }
}
const person1 = {
  age: 20,
};
const person2 = {
  age: 13,
};
ageVerify.call(person1);
ageVerify.apply(person2);
