"use strict";

// Task: Write a function that takes two numbers and returns their sum.

function calculateSum(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

//  Create a function that checks if a given number is even or odd.
// Even
// Odd

function checkEvenOrOdd(num) {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

let returnNum = largest(3, 9, 7);

// console.log(returnNum);

// sum from 1 to given number

function addNums(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }

  return sum;
}
