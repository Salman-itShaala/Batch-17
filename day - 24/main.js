const person = {
  userName: "Salman123",
  age: 34,
};

// access --> person.userName (dot notation)
// console.log(person.userName);

// [] --> person["key"] (square bracket notation)

// console.log(person["age"]);

// for in loop

for (let key in person) {
  console.log(person[key]);
}
