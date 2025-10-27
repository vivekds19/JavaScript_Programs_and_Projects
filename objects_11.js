const user = {
  name: "vivek",
  showName: function () {
    console.log("here-", this.name);
    function showMessage() {
      console.log(this); // -- it refers to windows object
    }
    showMessage();
  },
};
user.showName();
