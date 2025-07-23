let userName1 = "Shyam";

let userName2 = "Shyam";

// console.log(userName1 == userName2); //










let person1 = {
    userName : "ram",
    age : 56
};

let person2 = person1;

person2.city = "Pune";

console.log("Person1 is", person1); 

// {
//     userName : "ram",
//     age : 56
// }

// {
//     userName : "ram",
//     age : 56
//     city : "Pune"
// }

console.log("person2 is", person2); // {userName : "ram", age : 56, city : "Pune"}