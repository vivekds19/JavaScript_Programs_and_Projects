const displayMessage="qrt@123"
const vowels="aeiou"
 let flag=false;
for(char of displayMessage)
{
  if(vowels.includes(char))
  {
    flag=true;
    break;
  }
  else{
    flag=false;
  }
}
if(flag==true)
{
  console.log("string contains vowels")
}
else{
  console.log("String doesn't contains vowels")
}