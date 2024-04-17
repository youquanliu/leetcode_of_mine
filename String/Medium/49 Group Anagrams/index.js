// Given an array of strings strs, group the anagrams together.
//You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

//map of arrs
var groupAnagrams = function (strs) {
  let map = {};
  for (let str of strs) {
    let s = str.split("").sort().join("");
    if (!map[s]) {
      map[s] = [];
    }
    map[s].push(str);
  }
  return Object.values(map);
};

var groupAnagramsMap = (strs) => {

};

const strs = ["eta", "tae", "tan", "ate", "nat", "bat"];
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log("groupAnagrams: ", groupAnagrams(strs));
console.log("groupAnagramsMap: ", groupAnagramsMap(strs));
