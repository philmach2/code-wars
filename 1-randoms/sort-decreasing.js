// Sort in decreasing order
// let arr = [5, 2, 1, -10, 8];

// // ... your code to sort it in decreasing order

// alert( arr ); // 8, 5, 2, 1, -10

// input : unsorted array
// outputs : sorted decreasing array
// steps to output :
// create pointer variables
// create empty array
// iterate through array
// if arr[sp] > arr[fp]

//  [5, 2, 1, -10, 8]
//  sp
//      fp
//  is sp > fp ? -> yes -> fp++
//  [5, 2, 1, -10, 8]
//  sp
//          fp
//  is sp > fp ? -> yes -> fp++
//  [5, 2, 1, -10, 8]
//  sp
//              fp
//  is sp > fp ? -> yes -> fp++
//  [5, 2, 1, -10, 8]
//  sp
//                  fp
//  is sp > fp ? -> no -> arr[sp] = arr[fp]
// reach end of array - BAD SOLUTION

//  [5, 2, 1, -10, 8]
//  p1
//                  p2
// is arr[p1] >= arr[p2] ? ->
// WRONG THINKING .... NESTED LOOPS or SORT METHOD

function sortDecreasing(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(sortDecreasing([5, 2, 1, -10, 8]));
console.log(sortDecreasing([100, 5, 620, -42, 17]));
console.log(sortDecreasing([0, 0, 1, 6, 23]));
