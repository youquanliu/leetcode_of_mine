// Valid Anagram
// Given two strings s and t , write a function to determine if t is an anagram of s.
// Note:
// You may assume the string contains only lowercase alphabets.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: True

// Example 2:
// Input: s = "rat", t = "car"
// Output: False

function validAnagram1(a, b) {
  //turn sreing into array
  //sort
  let arrA = [...a].sort();
  let arrB = [...b].sort();
  //compare
  if (arrA.length !== arrB.length) {
    return false;
  }
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }
  return true;
}

const validAnagram2 = (a, b) => {
  const sanitizeString = (str) => {
    return str.toLowerCase().split("").sort().join("");
  };
  return sanitizeString(a) == sanitizeString(b);
};

const validAnagram3 = (a, b) => {
  const createCharMap = (str) => {
    let charMap = {};
    for (const char of str) {
      if (charMap.hasOwnProperty(char)) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    }
    return charMap;
  };
  if (a.length !== b.length) {
    return false;
  }

  let objA = createCharMap(a);
  let objB = createCharMap(b);
  for (const char in objA) {
    if (objA[char] !== objB[char]) {
      return false;
    }
  }
  return true;
};

const s = "anagram",
  t = "nagaram";
// Output: True
console.log("ana1: ", ana1(s, t));
