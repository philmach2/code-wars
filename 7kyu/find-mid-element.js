// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

// input : array of 3 numbers
// desired output : single number === index of middle number in array
// thoughts :
//  - ultimately we want to return the index of the middle number
//  - can this be done without changing the order of the numbers?
//  - for instance... sorting would automatically put the mid number at index 1
//  - given the example returns, it seems that we don't want to always return 1
//  **- if arr[0] < arr[1] && arr[0] > arr[2] etc. (This could become quite verbose)
//  - could findIndex() take a conditional that would satisfy this?
//  - maybe what i do initially is sort the array, then indexOf the original array
// steps :
//  - sort array in ascending order
//  - return indexOf() original array that matches sorted array index 1
//  - ... running into issue as sort modifies the original array
//  - went with if conditional logic

// NO GOOD
// function findMidElement(arr) {
//   let ascend = arr.sort((a, b) => a - b);
//   return arr.indexOf(ascend[1]);
// }

// function findMidElement(triplet) {
//   if (
//     (triplet[0] < triplet[1] && triplet[0] > triplet[2]) ||
//     (triplet[0] > triplet[1] && triplet[0] < triplet[2])
//   )
//     return 0;
//   if (
//     (triplet[1] < triplet[2] && triplet[1] > triplet[0]) ||
//     (triplet[1] > triplet[2] && triplet[1] < triplet[0])
//   )
//     return 1;
//   return 2;
// }

function findMidElement(triplet) {
  const [a, b, c] = triplet;

  if ((a < b && a > c) || (a > b && a < c)) return 0;
  if ((b < c && b > a) || (b > c && b < a)) return 1;
  return 2;
}

console.log(findMidElement([2, 3, 1]));
console.log(findMidElement([5, 10, 14]));
