// a - z, 
// A - Z
// 0-9
// $, _

// data types

// 1. number --> 1 ,2, -3, 1.2 , -10.67, 89.6, 0 --> 2^53

let age = 34;

// console.log(typeof age); // number

let percentage = 89.6;

// console.log(typeof percentage); // number

// 2. bigint --> when you have to represent numbers larger than 2^53 

let distance1 = 98765432109876591n;

// console.log(typeof distance1); // bigint

// 3. boolean (true, false) --> 

let canVote = true;

// console.log(typeof canVote);

// 4. string 

// double quotes

let userName = "salman";

// single quotes

let city = 'pune';

// backticks (ES6 --> template literal)

let sentance = `My name is salman`; 

// console.log(typeof sentance); // string


// 5. symbol --> unique values

let unique1 = Symbol("My unique value");

// console.log(typeof unique1);

// 6. undefined --> it represents absence of value
// undefined is value as well data type

let car;

// console.log(car);

// console.log(typeof car);

// 7. null --> it represnts intentional absence of value
// null is value as well data type

let mobile = null;

// console.log(mobile); // null

// console.log(typeof mobile); // object ( error / bug in js ) typeof null --> object

// 8. object --> 
// everything in js is object


let person = {
    name : "salman",
    age : 44,
    city : "pune",
    canVote : true
};

// to access the values you can use dot notation

console.log(person.age);

console.log(typeof person); // object