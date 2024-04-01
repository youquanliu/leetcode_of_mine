// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

let capitalize = (str) => {
  //split str into array seperate by space' '
  //iterate over each string in the array, and uppercase the first char
  //join strings to one string and return
  let arrStr = str.split(" ");
  let resultArr = [];
  for (const subStr of arrStr) {
    resultArr = [
      ...resultArr,
      subStr.charAt(0).toUpperCase() + subStr.slice(1),
    ];
  }
  return resultArr.join(" ");
};

const str = "a lazy, fox";

console.log("capitalize:", capitalize(str));
