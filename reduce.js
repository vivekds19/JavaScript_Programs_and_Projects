const arr=[1,2,3,4,5]

const product=(prev,curr)=>
{
  return prev*curr;
}

const result=arr.reduce(product)

console.log(result)