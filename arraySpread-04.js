const arr = [1, 2, 3]

const arr2 = [...arr];
arr.push(11, 22, 44)

const for1 = [];
for (const item of arr) {
    for1.push(item)
}

console.log(for1)
console.log(arr)

arr2.push(22)
console.log(arr2)




// destucturing of array
const name = ["akash", "samiul", "ashik", "nahid"];
const [y, x, z ] = name;
console.log(x, y)