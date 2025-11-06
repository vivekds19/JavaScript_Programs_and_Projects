const c1 = "a";
const c2 = "z";

function alphabets(c1, c2) {
  let result = "";
  let startCode = c1.charCodeAt(0);
  let endCode = c2.charCodeAt(0);

  for (let i = startCode; i <= endCode; i++) {
    let char = String.fromCharCode(i);
    result += char;
    if (i < endCode) {
      result += " ";
    }
  }
  console.log(result);
}
alphabets(c1, c2);
