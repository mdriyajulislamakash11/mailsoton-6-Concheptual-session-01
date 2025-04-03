const users = [
  {
    id: 1,
    name: "Riyajul Islam",
    age: 22,
    location: "Dhaka",
    contact: {
      phone: "017XXXXXXXX",
      email: "riyajul@example.com",
    },
    address: {
      street: "123 Main St",
      city: "Dhaka",
      state: "Dhaka",
      zip: "1205",
    },
    hobbies: ["Coding", "Gaming", "Reading"],
  },
  {
    id: 2,
    name: "Samiul Haque",
    age: 24,
    contact: {
      phone: "018XXXXXXXX",
      email: "samiul@example.com",
    },
    hobbies: ["Traveling", "Photography"],
  },
  {
    id: 3,
    name: "Ersa Rahman",
    age: 21,
    location: "Chittagong",
    contact: {
      phone: "019XXXXXXXX",
      email: "ersa@example.com",
    },
    address: {
      street: "456 Park Ave",
      city: "Chittagong",
      state: "Chattogram",
      zip: "4000",
    },
    hobbies: ["Painting", "Music"],
  },
  {
    id: 4,
    name: "All Amin",
    age: 27,
    location: "Sylhet",
    contact: {
      phone: "016XXXXXXXX",
      email: "allamin@example.com",
    },
    hobbies: ["Football", "Cooking"],
  },
  {
    id: 5,
    name: "Ruma Akter",
    age: 25,
    contact: {
      phone: "015XXXXXXXX",
      email: "ruma@example.com",
    },
    address: {
      street: "789 Lake Rd",
      state: "Barisal",
      zip: "8200",
    },
    hobbies: ["Writing", "Blogging"],
  },
];

users.map((persone) => {
  console.log(
    `user name: ${persone?.name}. user city ${persone?.address?.city || "N/A"}`
  );
});


const x = users.find((p) => p.age == 22);
console.log(x.name)