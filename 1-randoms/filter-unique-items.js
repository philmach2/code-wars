// Filter unique array members
// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// inputs : array of strings
// desired output : array of unique strings
// steps :
//  create an empty array
//  loop through param array
//  check if newly created array contains the iteration item
//  if not, push to new array
// return new array

function unique(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

let str = [
  "Banana",
  "Apple",
  "Banana",
  "Apple",
  "Apple",
  "Apple",
  "Banana",
  "Banana",
  "42",
];

console.log(unique(strings));
console.log(unique(str));
