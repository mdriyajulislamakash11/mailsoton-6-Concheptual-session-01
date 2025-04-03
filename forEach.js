// no return

const arr = [10, 20, 30, 40, 50];
arr.forEach( (a) => console.log( "item: ",a))

let sum = 0;
arr.forEach(a => {
    sum += a
})
console.log(sum)

// callback paremiters(item, index, full Array)
