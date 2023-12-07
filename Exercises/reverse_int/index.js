// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

let n = 51;

//Turn into string, and reverse.
//Use Math.sign to see if the input number is negtive
const reverInt = (n) => {

  let result = parseInt(n.toString().split("").reverse().join(""));

  return result * Math.sign(n);
};

console.log(reverInt(n));
