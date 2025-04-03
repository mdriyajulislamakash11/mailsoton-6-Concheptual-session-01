const  myInfo = {
    name: "akash",
    age: 23,
    address: "Dhaka",
    FatherName: "billal",
    fatherHome: "Tangail",
    Contact: {
        phone: 1307784859,
        email: "hafejmohammadakash@gmail.com"
    },
};

const obj2 = {...myInfo};

obj2.married = false;
obj2.age = 32;

// console.log(myInfo)
// console.log(obj2)


// destructuring of objects

const {name, age, Contact} = myInfo;
console.log(age)

const {phone} = Contact; 
console.log(phone)
