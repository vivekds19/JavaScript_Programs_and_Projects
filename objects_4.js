const getobjects={
    name:'vivek',
    city:"bangaluru"
}

const propertyFound="age" in getobjects;

console.log(propertyFound)

const propertyFound1="name" in getobjects;

console.log(propertyFound1)

for(let key in getobjects)
{
  console.log(key,getobjects[key])
}