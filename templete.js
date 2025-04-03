const name = "Akash";
const age = 23;
const job = "developer";

const worker = `Worker name: ${name}. his Age: ${age}. his Job: ${job}`;
console.log(worker);

const myInfo = {
  name: "Akash",
  age: 23,
  address: "dhaka",
  fatherName: "belal",
  fatherHome: "dhaka",
  subject: ["bangla", "english", "math"],
};

const student = `amar name:
 ${myInfo.name}, amar subject gulo: 
 ${myInfo.subject.map((sub) => sub)}`;

console.log(student);
