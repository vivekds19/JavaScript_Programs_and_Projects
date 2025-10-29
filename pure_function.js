function array(arr)
{
  let newarr=[];
  newarr.push(...arr,5,6)
  return newarr;
}

const arr=[1,2,3,4]

console.log(array(arr)) 