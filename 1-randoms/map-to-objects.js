// Map to objects

// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith
console.log(usersMapped[2].fullName);
console.log(usersMapped[1].id);
// So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.

let superman = {
  secretIdentity: "Clark Kent",
  cape: true,
  universe: "DC",
};
let batman = {
  secretIdentity: "Bruce Wayne",
  cape: true,
  universe: "DC",
};
let spiderMan = {
  secretIdentity: "Peter Parker",
  cape: false,
  universe: "Marvel",
};

let superheros = [superman, batman, spiderMan];

let superherosMapped = superheros.map((element) => ({
  alterEgo: element.secretIdentity,
}));

console.log(superherosMapped[0].secretIdentity);
console.log(superherosMapped[0].alterEgo);
console.log(superherosMapped[2].alterEgo);
