// Translate border-left-width to borderLeftWidth
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.

// input : string
// outputs : string
// dash-separated-string to camelCaseString
// each word after dash becomes uppercase

// split string into array
// capitalize first character of each element in array .charAt(0)
// join strings in array

function camelize(str) {
  return str
    .split("-")
    .filter((word) => word)
    .map((word, i) =>
      i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

// input :
// "background-color"
// .split("-")
// ["background", "color"]
// .filter()
// ["background", "color"]
// .charAt(), .toUpperCase(), .slice()
// ["background", ("C" + "olor")]
// .join("")
// "backgroundColor"

// input :
// "-webkit-transition"
// .split("-")
// ["", "webkit", "transition"]
// .filter()
// ["webkit", "transition"]
// .charAt(), .toUpperCase(), .slice()
// ["webkit", ("T" + "ransition")]
// .join("")
// "webkitTransition"
