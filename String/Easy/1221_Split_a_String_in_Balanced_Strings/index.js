// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it in the maximum amount of balanced strings.

// Return the maximum amount of split balanced strings.

// Example 1:
// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

// Example 2:
// Input: s = "RLLLLRRRLR"
// Output: 3
// Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.

// Example 3:
// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".

// Example 4:
// Input: s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'

// Constraints:
// 1 <= s.length <= 1000
// s[i] is either 'L' or 'R'.
// s is a balanced string.

//Loop from left to right maintaining a balance variable when it gets an L increase it by one otherwise decrease it by one.
//Whenever the balance variable reaches zero then we increase the answer by one.

var balancedStringSplit = function (s) {
    let count = 0
    let countR = 0
    let countL = 0

    for (const letter of s) {
        if (letter === 'R') {
            countR++
        } else {
            countL++
        }

        if (countR === countL) {
            count++
        }
    }

    return count
};

var balancedStringSplit2 = function (s) {
    let numsL = 0, count = 0;
    for (let i = 0; i < s.length; i++) {
        numsL += s[i] === 'L' ? 1 : -1;
        if (numsL === 0) count++;
    }
    return count;
}
const s = "RLLLLRRRLR";
console.log(balancedStringSplit2(s))