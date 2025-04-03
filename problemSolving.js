const student = [
  {
    name: "Mehedy Bro",
    email: "wehedy@gmail.com",
    avg: 56,
    fiftyPercent: true,
  },
  {
    name: "Rokib",
    email: "rokib@gmail.com",
    avg: 50,
    fiftyPercent: true,
  },
  {
    name: "Sakib",
    email: "sakib@gmail.com",
    avg: 45,
    fiftyPercent: false,
  },
  {
    name: "Sojib Bro",
    email: "sojib@gmail.com",
    avg: 52,
    fiftyPercent: false,
  },
  {
    name: "Sunny Bro",
    email: "sunny@gmail.com",
    avg: 32,
    fiftyPercent: false,
  },
  {
    name: "Saki Bro",
    email: "saki@gmail.com",
    avg: 37,
    fiftyPercent: false,
  },
  {
    name: "Jackie Bro",
    email: "jackie@gmail.com",
    avg: 57,
    fiftyPercent: true,
  },
];

const findScic1 = (student) => {
  const scic = student.filter(
    (person) => person.avg >= 48 && person.fiftyPercent === true
  );
  const names = scic.map((p) => p.name);
  return names
};

// sort
const findScic2 = (student) => {
  return student
    .filter((person) => person.avg >= 48 && person.fiftyPercent === true)
    .map((p) => p.name);
};

const resut = findScic2(student);
console.log(resut);
