// Q1. swap the values of given two variables
// let num1 = 10
// let num2 = 20;

// version 1 : using temp var
// version 2 : without using temp var

// num1 --> 20, num2 --> 10

let num1 = 10;

let num2 = 20;

console.log("Before swap num1 and num2 are", num1, num2);

let temp = num1;

num1 = num2;

num2 = temp;

console.log("After swap num1 and num2 are", num1, num2);

// Q2 : given three numbers find the largest number
// suppose you have three number num1, num2 and num3
// so find the largest of them and print it.

// Q3: given a number find if that number is prime or not.

let num = -45;

let isPrime = true;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log("Given number is prime");
} else {
  console.log("Given number is not prime");
}
