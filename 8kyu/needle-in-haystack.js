// Description:
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

// inputs: array
// output: string `found the needle at position ${array index of needle}`

// need to iterate through array
// need to find string 'needle'
// need to grab array index of 'needle'
// need to return the string with the index

function findNeedle(haystack) {
  let foundAtIndex;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      foundAtIndex = i;
      return `found the needle at position ${foundAtIndex}`;
    }
  }
}

// function findNeedle(haystack) {
//   return `found the needle at position ${haystack.indexOf("needle")}`;
// }

console.log(
  findNeedle([
    "3",
    "123124234",
    undefined,
    "needle",
    "world",
    "hay",
    2,
    "3",
    true,
    false,
  ])
);
console.log(
  findNeedle([
    "283497238987234",
    "a dog",
    "a cat",
    "some random junk",
    "a piece of hay",
    "needle",
    "something somebody lost a while ago",
  ])
);
console.log(
  findNeedle([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    8,
    7,
    5,
    4,
    3,
    4,
    5,
    6,
    67,
    5,
    5,
    3,
    3,
    4,
    2,
    34,
    234,
    23,
    4,
    234,
    324,
    324,
    "needle",
    1,
    2,
    3,
    4,
    5,
    5,
    6,
    5,
    4,
    32,
    3,
    45,
    54,
  ])
);
console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);
