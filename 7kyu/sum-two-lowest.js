// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// input : array of positive integers
// output : single int
//          sum of two lowest ints from array

// pass an array of positive integers into the function
// capture and add together the two lowest numbers
// return the sum

// i need a way to check elements in the array against one another
// loops and conditionals? methods?

// if i were to use filter ... that would create a new array with items that met conditional - not necessary.
// if i were to use map ... that would create a new transformed array - not necessary.
// if i were to use reduce ... that would reduce the array to a single value - is it necessary?

// i need to iterated through each item in the array
// how can i track if it is lower than another?
// i could utilize two separate pointers ...

// if using methods ... i could use the sort method, then add the first two indexes
//      LETS IMPLEMENT THAT

function sumTwoLowest(arr) {
  const [first, second] = arr.sort((a, b) => a - b);
  return first + second;

  //   let sum = 0;

  //   arr.sort((a, b) => a - b);

  //   sum += arr[0];
  //   sum += arr[1];

  //   return sum;
}

console.log(sumTwoLowest([19, 5, 42, 2, 77]));
console.log(sumTwoLowest([10, 343445353, 3453445, 3453545353453]));
console.log(sumTwoLowest([23, 61, 19, 44, 77]));
