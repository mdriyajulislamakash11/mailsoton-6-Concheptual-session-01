const number = [1, 2, 3, 4];
let sum = 0;
for (const item of number) {
  sum += item;
}
console.log(sum);

// const number = [1, 2, 3, 4, 5];
let mult = 1;
for (const item of number) {
  mult *= item;
}
console.log(mult);

// number.reduc((previous, current) => previous + current, initial value);

/* 
 0 + 1 = 1
 1 + 2 = 3
 3 + 3 = 6
 6 + 4 = 10
*/

const reduce = number.reduce((preve, current) => preve + current, 0);
console.log(reduce);
