// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

let cleanString = (str) => {
  return str.replace(/[^\w]/g, "").toLowerCase();
};

//Helper function to map string in obj
let strMap = (str) => {
  let charMap = {};
  const cleanedString = cleanString(str);

  for (const char of cleanedString) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
};

function anagrams1(stringA, stringB) {
  let cleanString1 = cleanString(stringA);
  let cleanString2 = cleanString(stringB);

  if (cleanString1.length !== cleanString2.length) return false;

  const sorted1 = cleanString1.split("").sort().join("");
  const sorted2 = cleanString2.split("").sort().join("");

  return sorted1 === sorted2;
}

let anagrams2 = (stringA, stringB) => {
  let stringMapA = strMap(stringA);
  let stringMapB = strMap(stringB);

  //edge case: two objects has different length, then save time for going on
  if (Object.keys(stringMapA).length !== Object.keys(stringMapB).length) {
    return false;
  }

  for (const key in stringMapA) {
    if (stringMapA[key] !== stringMapB[key]) {
      return false;
    }
  }
  return true;
};

const word1 = "rail safety";
const word2 = "fairy tales";

console.log("anagrams2: ", anagrams2(word1, word2));
