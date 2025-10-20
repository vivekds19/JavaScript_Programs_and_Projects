const firstString="apple";
const secondString="banana";
const thirdString="kiwi";

const lenghtofFirst=firstString.length;
const lenghtofSecond=secondString.length;
const lenghtofThird=thirdString.length;

if(lenghtofFirst<lenghtofSecond && lenghtofFirst<lenghtofThird){
  console.log(`${firstString} is the smallest string`);
}
else if(lenghtofSecond<lenghtofFirst && lenghtofSecond<lenghtofThird){
  console.log(`${secondString} is the smallest string`);
}else if(lenghtofThird<lenghtofFirst && lenghtofThird<lenghtofSecond){
  console.log(`${thirdString} is the smallest string`);
}else{
  console.log("Two or more strings are of equal smallest length");
} 