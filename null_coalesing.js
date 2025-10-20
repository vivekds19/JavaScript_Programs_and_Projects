// null-coalesing means if the value is null or undefined then only assign the default value

let firstname;

console.log(firstname ?? "HiddenName");

const a=0;
console.log(a ?? 42); // prints 0 because a is neither null nor undefined

const b=null;
console.log(b ?? 42); // prints 42 because b is null

const c=undefined;
console.log(c ?? 2); // prints 42 because c is undefined

const d="";
console.log(d ?? "DefaultString"); // prints "" because d is neither null nor undefined