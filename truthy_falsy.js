// AND operator (&&)
const fristname = "Vivek";
const nickname = "ds";

const username = fristname && nickname && "Guest"; // short-circuiting
console.log(`Name : ${username}`);

// OR operator (||)
const Firstname = "Vivek";
const Nickname = "ds";

const Username = Firstname || Nickname || "Guest"; // short-circuiting
console.log(`Name : ${Username}`);
