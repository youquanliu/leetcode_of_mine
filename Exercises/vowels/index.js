// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//double loop
let vowels = (str) => {
  const checker = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (const char of str.toLowerCase()) {
    for (const i in checker) {
      if (char == checker[i]) {
        count++;
      }
    }
  }
  return count;
};

//includes
let vowels2 = (str) => {
  let count = 0;
  const checker = ["a", "e", "i", "o", "u"];
  for (const char of str) {
    if (checker.includes(char)) {
      count++;
    }
  }
  return count;
};

//regular expression
let vowels3 = (str) => {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};

let str = "Hi There!";

console.log(vowels3(str));
