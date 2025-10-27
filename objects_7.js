const user = {
  name: "vivek",
  age: 25,
  /*address: {
    city: "bengaluru",
    state: "ka",
  },*/
  job: "software developer",
  DisplayMessage: function () {
    console.log("displayed message");
  },
};

user.DisplayMessage();

console.log(user.address?.city)