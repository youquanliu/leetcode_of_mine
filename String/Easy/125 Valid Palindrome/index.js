// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

var isPalindrome = function (s) {
  // Define a function to filter out non-alphabetic characters from a string
  const filterNonAlphabet = (str) => {
    return str.replace(/[^0-9a-zA-Z]/g, "");
  };

  // Filter out non-alphabetic characters
  s = filterNonAlphabet(s);

  // Convert the string to lowercase for case-insensitive comparison
  s = s.toLowerCase();

  // Reverse the string using built-in methods
  let rev_s = s.split("").reverse().join("");

  // Check if the reversed string is equal to the original string
  return rev_s === s;
};

const isPalindrome2 = (str) => {};

const s1 = "A man, a plan, a canal: Panama";
// Output: true

const s2 = "race a car";
// Output: false

console.log("isPalindrome2: ", isPalindrome2(s1));
