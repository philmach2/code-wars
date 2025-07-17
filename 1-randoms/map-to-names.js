// Map to names

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((item) => item.name);

console.log(names); // John, Pete, Mary

// inputs : array of user objects
// output : array of name strings
// steps :
//  iterate through array of user objects
//  .map()
//  transform array by making each item in new array users.name

let superman = { secretIdentity: "Clark Kent", cape: true };
let batman = { secretIdentity: "Bruce Wayne", cape: true };
let spiderMan = { secretIdentity: "Peter Parker", cape: false };

let superheros = [superman, batman, spiderMan];

let secretIdentities = superheros.map((item) => item.secretIdentity);

let capes = superheros.map((item) => item.cape);

console.log(secretIdentities);
console.log(capes);
console.log(spiderMan.cape);
console.log(batman.secretIdentity);
console.log(superman);
