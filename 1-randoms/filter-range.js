// Filter range
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)

// input : array
// outputs : new array
// steps :
// iterate through array
// if >= a, push to new array
// if <= b, push to new array
// return new array

function filterRange(arr, a, b) {
  return arr.filter((num) => num >= a && num <= b);
}

console.log(filterRange([1, 2, 3, 4, 5], 1, 5));
console.log(filterRange([10, 20, 90, 1, 8, 17, 42], 9, 89));
console.log(filterRange([25, 50, 75, 100, 400, 100, 75, 50, 25], 1, 75));
