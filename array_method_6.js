const number=[1,3,2,4,5,7,6,9,10,8]

const Ascending=(a,b)=>
{
    return a-b
}

const Descending=(a,b)=>
{
    return b-a
}

console.log(number.sort(Ascending))
console.log(number.sort(Descending))