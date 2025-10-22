const text = "GeeksForGeeks";

const pt = "gor";

/*const index = text.indexOf(pt);

console.log(index);
*/

const m = text.length;
const n = pt.length;
let found = false;

for (let i = 0; i <= m - n; i++) {
  found = true; 
  for (let j = 0; j < n; j++) {
    if (text[i + j] !== pt[j]) {
      found = false;
      break;
    }
  }
  if (found==true) {
    console.log(i);
    break; 
  }
}

if (!found) {
  console.log(-1);
}


