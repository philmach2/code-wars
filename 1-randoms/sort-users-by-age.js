// Sort users by age
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// input : array of objects
// output : array of objects sorted by age
// steps :
//

function sortByAge(users) {
  return users.sort((a, b) => a.age - b.age);
  // now: [john, mary, pete]
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

sortByAge(arr);

console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete
console.log(arr[0].age); // 25
console.log(arr[1].age); // 28
console.log(arr[2].age); // 30
