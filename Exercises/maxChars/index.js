// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str) => {
  let repeatedChar = "";
  let maxTimes = 0;
  let arr = str.split("");
  let tempMaxTimes = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === arr[i]) {
      tempMaxTimes += 1;
      if (tempMaxTimes > maxTimes) {
        maxTimes = tempMaxTimes;
        repeatedChar = arr[i];
      }
    }
  }
  return repeatedChar;
};

const maxChar1 = (str) => {
  let chars = {};
  let max = 0;
  let maxChar = "";

  for (const char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  for (const key in chars) {
    if (chars[key] > max) {
      max = chars[key];
      maxChar = key;
    }
  }

  return maxChar;
};

let str = "caplle pabcccdp";

let ma = (str) => {};

console.log("ma: ", ma(str));
console.log("maxChar: ", maxChar(str));
