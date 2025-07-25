// repetition

// print all numbers from 1 to 10;

// for (let num = 1; num <= 5; num = num + 1) {
//   console.log("Salman");
// }

// print your name 5 times using for loop

// print all even numbers from 1 to 50

// 2, 4, 6, 8, 10, 12 .... 48, 50

// FizzBuzz
// for numbers from 1 to 50
// print Fizz if that number is divisible by 3
// Print Buzz if that number is divisible by 5
// print FizzBuzz if that number is divisible by both (ie 3 and 5) --> 15

for (let i = 1; i <= 50; i++) {
  // 15
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz " + i);
  } else if (i % 5 == 0) {
    console.log("Buzz " + i);
  } else if (i % 3 == 0) {
    console.log("Fizz " + i);
  }
}
