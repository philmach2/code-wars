// Copy and sort array

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

// input : array of strings
// output : new sorted array
// steps :
// use methods
// create copy of array .slice(), and sort

function copySorted(arr) {
  return arr.slice().sort();
}

console.log(copySorted(["banana", "cherry", "apple", "peach"]));
console.log(copySorted(["sail", "surf", "boogie", "foil"]));
console.log(copySorted(["HTML", "JavaScript", "CSS"]));
