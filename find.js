const number = [10, 20, 30, 40, 50, 51, 52, 54, 60, 70, 80];

// const number = [10, 20, 30, ]; // na paille undefined return korbe

const find = number.find((a) => a > 50 && a %2 === 0)
console.log(find)