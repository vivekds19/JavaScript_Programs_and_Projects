const s1 = "helloh";
const s2 = "hello";

function extraChar(s1, s2) {
  let sortedS1 = s1.split("").sort().join("");
  let sortedS2 = s2.split("").sort().join("");

  for (let i = 0; i < sortedS2.length; i++) {
    if (sortedS1[i] !== sortedS2[i]) {
      return sortedS1[i];
    }
  }
  return sortedS1[sortedS1.length - 1];
}

console.log(extraChar(s1, s2));
