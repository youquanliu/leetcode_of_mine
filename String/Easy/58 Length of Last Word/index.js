// Given a string s consists of some words separated by spaces,
// return the length of the last word in the string. If the last word does not exist, return 0.

// A word is a maximal substring consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Example 2:

// Input: s = " "
// Output: 0

var lengthOfLastWord = function (s) {
  let sArr = s.trim().split(" ");
  return sArr[sArr.length - 1].length;
};

const length = (s) => {
  //s -> arr
  //arr[length -1 ]

  let arr = s.trim().split(" ");
  let last_word = arr[arr.length - 1];
  return last_word.length;
};

let s = "Hello World";
//Output: 5

let a = "a ";
let space = " ";

console.log(lengthOfLastWord(a));
console.log("length: ", length(space));
