// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

// Example 1:
// Input: "Hello"
// Output: "hello"

// Example 2:
// Input: "here"
// Output: "here"

// Example 3:
// Input: "LOVELY"
// Output: "lovely"

var toLowerCase = function (str) {
    let lowerCase = '';
    for (let char of str) {
        let index = char.charCodeAt(0);
        if (index >= 65 && index <= 90) {
            char = String.fromCharCode(index + 32);
        }
        lowerCase += char;
    }
    return lowerCase;
};

let s = "Hello";
// Output: "lovely"

console.log(toLowerCase(s))