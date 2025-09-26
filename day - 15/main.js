// 1. Assignment operator
// 2. Typeof operator

// 3. Arithmatic operators

// 3.1 : Addition (+)

let num1 = 10;

let num2 = 2;

let sum = num1 + num2;

console.log("Sum of given numbers is",sum);


// 3.2 : Substraction (-)

let sub = num2 - num1; // 2 - 10

console.log("Substraction of given numbers is",sub); // 8

// 3.3 : Multiplication (*)


let mult = num1 * num2; // 10 * 2

console.log("Multiplicatoin of given numbers is", mult); // 20


// 3.4 : Division (/)

let div = num2 / num1; // 2 / 10

console.log("Division of given numbers is", div);

// 3.5 : Modulo (%)

let remainder = num1 % num2; // 10 % 2

console.log("remainder is", remainder);

// 3.6 : Exponent operator ( ** )

console.log(5 ** 2); // 5 ^ 2

console.log(5 ** 10); // 5 ^ 10



// 4. Comparison operators --> boolean (true or false)

// less than (<)

console.log("10 is less than 20", 10 < 20); // true
console.log("20 is less than 10", 20 < 10); // false


// greater than (>)

// first number is greater than second one

console.log(10 > 20); // false
console.log(20 > 10); // true

// less than or equal to ( <= )

// first number is less than or equal to second number

console.log(10 <= 20); // true
console.log(20 <= 10); // false
console.log(10 <= 10); // true


// greater than or equal to

// first number is greater than or equal to second number

console.log(10 >= 20); // false
console.log(20 >= 10); // true
console.log(10 >= 10); // true




// we can also compare strings --> alphatical
// (lexicographical order --> capital letters comes first and then small letters)  order

// Apple and apple

console.log("apple" > "Apple");

