const yeapLear = 2024;

if (yeapLear % 4 === 0 && yeapLear % 100 !== 0 || yeapLear % 400 === 0) {
  console.log("leap year");
} else {
  console.log("Not a leap year");
}
