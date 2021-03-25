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
    '(': ')',
    '[': ']',
    '{': '}'
}
var isValid = function (s) {
    //stack[]
    let stack = [];
    //obj {} () []

    //loop s
    for (const key in s) {
        const currParenthese = s[key];
        console.log(currParenthese)
        //if current element is one of {([, push into stack
        if (mapper[currParenthese]) {
            stack.push(currParenthese);
            console.log('stack: ', stack)
        }    //else is it eaqul obj[curr] is pop() return false
        else {
            const peak = stack.pop();
            console.log('peak: ', peak)
            if (currParenthese !== mapper[peak]) {
                return false;
            }
        }
        //length>0 return false
    }
    if (stack.length > 0) return false
    return true;
};

let s = "{[(])}";
console.log(isValid2(s))
// Output: false
