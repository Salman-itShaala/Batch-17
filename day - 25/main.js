// we have to find second largest number

// 1. sort an array in ascending order --> find second last number

// 2. use two varibles -->
// one of the variabel will have largest number
// another var will hold second largest

function findSecondLargest(arr) {
  //
  let largestNum;
  let secondLargest;
  if (arr[0] > arr[1]) {
    largestNum = arr[0];
    secondLargest = arr[1];
  } else {
    largestNum = arr[1];
    secondLargest = arr[0];
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      secondLargest = largestNum;
      largestNum = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != largestNum) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

console.log(findSecondLargest([11, 9, 6, 11, 7, 2, 9]));

function secondLargest2(arr) {
  const newArr = arr.sort((a, b) => a - b);

  // check if last and second last number number are equal --> [.... 11, 11]

  let secondLargest = newArr[newArr.length - 2];

  return secondLargest;
}

function countOccurrences(arr) {
  let count = {};

  for (let num of arr) {
    if (count[num]) {
      count[num] = count[num] + 1; // 1
    } else {
      count[num] = 1;
    }
  }

  return count;
}

console.log(countOccurrences([1, 1, 1, 4, 5, 3, 1]));
