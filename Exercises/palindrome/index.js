// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

str = "neverelereven";


//Two pointers, one loop
function palindrome(str) {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  // let strArr = str.split("");
  // for (let i = 0; i < strArr.length / 2; i++) {
  //   if (strArr[i] !== strArr[strArr.length - 1 - i]) {
  //     return false;
  //   }
  // }
  // return true;
}

//Compare the reversd str and origin str
function palindrome1(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

let pali = (str) => {};
console.log("pali: ", pali(str));
console.log(palindrome(str));
