// 1. globall scope     // var
// 2. block scope       // let and const
// 3. functional scope  // var

// 1. globall scope
const x = 4;
console.log(x)

if (true) {
    console.log(x)
};

function fun() {
    console.log(x)
}
fun()

// block scope
{
    let x = 2;
    console.log(x)
}
console.log(x) // ReferenceError: x is not defined

// re declare varalbe const sem name

const x = 33;
{
  const x = 17;
  console.log(x); //17
}
console.log(x); //33

const c = 23;
console.log(c);
