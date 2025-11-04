let allButton = document.querySelector("#btn");

allButton.addEventListener("click", (event) => {
  let btncolor = event.target.innerText;
  if (btncolor === "RED") {
    event.target.classList.toggle("btn-red");
  }
});
