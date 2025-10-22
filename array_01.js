let studentName = ["vivek", "varun", "vishnu", "kriti", "vinay", "dilip"];
/*
for (let i = 0; i < studentName.length; i++) {
  console.log(studentName[i]);
}*/

for(let name of studentName){
    console.log(name);
}

for(let name in studentName)  {
  console.log(name);
}