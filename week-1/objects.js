// objects
// syntax
const user = {
  firstName: "Pavan",
  lastName: "Varma",
  age: 2025 - 2001,
  job: "Programmer",
};

console.log(user.age);
console.log(user.job);

// array of objects

const allUsers = [
  {
    firstName: "Pavan",
    gender: "male",
  },
  {
    firstName: "Sai",
    gender: "male",
  },
  {
    firstName: "scarlett",
    gender: "female",
  },
];

for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i]["gender"] == "male") {
    console.log(allUsers[i]["firstName"]);
  }
}
