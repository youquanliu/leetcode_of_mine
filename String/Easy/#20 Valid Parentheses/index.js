// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true

let mapper = {
  "(": ")",
  "[": "]",
  "{": "}",
};
var isValid = function (s) {
  //stack[]
  let stack = [];
  //obj {} () []

  //loop s
  for (const key in s) {
    const currParenthese = s[key];
    //if current element is one of {([, push into stack
    if (mapper[currParenthese]) {
      stack.push(currParenthese);
    } //else is it eaqul obj[curr] ? if so pop() return false
    else {
      const peak = stack.pop();
      if (currParenthese !== mapper[peak]) {
        return false;
      }
    }
    //length>0 return false
  }
  if (stack.length > 0) return false;
  return true;
};

let s = "{[(])}";
// Output: false

const is = (s) => {};
console.log("is: ", is(s));
console.log(isValid(s));
