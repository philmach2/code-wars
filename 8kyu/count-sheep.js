// Description:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// inputs === array of booleans
// output === int
// steps:
// initiate counter
// iterate through array
// if true, increase counter
// return counter

function countSheep(arr) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      counter++;
    }
  }

  return counter;
}

console.log(countSheep([])); // 0
console.log(countSheep([undefined])); // 0
console.log(countSheep([null])); // 0
console.log(countSheep([false])); // 0
console.log(countSheep([true])); // 1
console.log(countSheep([undefined, null, false, true])); // 1
console.log(
  countSheep([undefined, null, false, true, true, false, null, undefined])
); // 2
console.log(
  countSheep([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
); // 17
