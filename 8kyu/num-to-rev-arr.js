// Description:
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example (Input => Output):
// 35231 => [1,3,2,5,3]
// 0     => [0]

// inputs : single, non-negative number
// desired output : array of reversed digits
// steps :
//  turn number into string
//  split, reverse turning back to numbers

function numToRevArr(num) {
  let str = num.toString();
  let revArr = str.split("").reverse();

  return revArr.map((item) => Number(item));
}

function numToRevArrAlt(num) {
  return String(num).split("").map(Number).reverse();
}

console.log(numToRevArr(35231));
console.log(numToRevArr(0));
console.log(numToRevArr(886799));
console.log(numToRevArrAlt(242424));
console.log(numToRevArrAlt(987));
console.log(numToRevArrAlt(700));
