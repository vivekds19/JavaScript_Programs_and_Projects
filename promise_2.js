const isRequestSuccuessFull = false;

const db = [
  {
    id: 1,
    name: "vivek",
  },
  {
    id: 2,
    name: "vik",
  },
];

let promise = new Promise((resolve,reject)=>
{
  if(isRequestSuccuessFull)
  {
    resolve(db)
  }
  else{
    let error=new Error("something went wrong")
    reject(error.message)}
})

promise
.then((data)=>console.log(data))
.catch((error)=>console.log(error))