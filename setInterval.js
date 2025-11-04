let value = 0;

function counting() {
  value += 1;
  console.log(value);
}
setInterval(counting, 1000);
