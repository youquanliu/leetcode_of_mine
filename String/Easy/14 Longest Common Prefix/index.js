// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
  strs.sort();
  let firstword = strs[0];
  let lastword = strs[strs.length - 1];

  for (let i = 0; i < firstword.length; i++) {
    if (firstword[i] !== lastword[i]) {
      return strs[0].substr(0, i);
    }
  }

  return strs[0];
};

const long = (strs) => {
  
};
const str1 = ["flower", "flow", "flight"];
// Output: "fl"

const str2 = ["dog", "racecar", "car"];
// Output: ""

console.log("longestCommonPrefix: ", longestCommonPrefix(str1));
console.log("long: ", long(str1));
