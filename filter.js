const number = [10, 20, 30, 40, 50, 51, 52, 54, 60, 70, 80];

// const number = [10, 20, 30, ]; // na paille emty array return korbe

const filter = number.filter((a) => a > 50 && a %2 === 0)
console.log(filter)

// //____________ 32-3 Different Truthy and Falsy values in JavaScript _________/
/*
Truthy:
1. true
2. any number (+ve, -ve) will be truthy than 0
3. amy strig is truthy
4. "0" "false"
5. emty object / object
6. emty Array / array 

Falsy:
1. false
2. 0
3. "" (emty string falsy)
4. undefned
5, null


*/
