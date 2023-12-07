// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const str = "hello!";

const reverseString = (str) => {
  let str_arr = str.split("");
  let result = [];
  for (let i = str_arr.length - 1; i >= 0; i--) {
    result.push(str_arr[i]);
  }
  return result.join("");
};

//use Array.prototype.reverse() method
const reverseString2 = (str) => {
  return str.split("").reverse().join("");
};

//Iterate string and add it to new result string
const reverseString3 = (str) => {
  debugger;
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
};

console.log(reverseString3(str));
