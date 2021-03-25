// In a string s of lowercase letters, these letters form consecutive groups of the same character.

// For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".

// A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].

// A group is considered large if it has 3 or more characters.

// Return the intervals of every large group sorted in increasing order by start index.

// Example 1:
// Input: s = "abbxxxxzzy"
// Output: [[3,6]]
// Explanation: "xxxx" is the only large group with start index 3 and end index 6.

// Example 2:
// Input: s = "abc"
// Output: []
// Explanation: We have groups "a", "b", and "c", none of which are large groups.

// Example 3:
// Input: s = "abcdddeeeeaabbbcd"
// Output: [[3,5],[6,9],[12,14]]
// Explanation: The large groups are "ddd", "eeee", and "bbb".

// Example 4:
// Input: s = "aba"
// Output: []

// Constraints:
// 1 <= s.length <= 1000
// s contains lower-case English letters only.


var largeGroupPositions = function (s) {
    let countSameChar = 1;
    let start = 0;
    let ret = [];
    for (let i = 1; i < s.length; i++) {
        if (s[i] == s[i - 1]) {
            countSameChar++
            if (i == s.length - 1 && countSameChar >= 3) {
                ret.push([start, start + countSameChar - 1])
            }
        } else if (s[i] != s[i - 1]) {
            if (countSameChar >= 3) {
                ret.push([start, start + countSameChar - 1])
            }
            countSameChar = 1;
            start = i;
        }
    }
    return ret
};
const largeGroupPositions2 = function (S) {
    const result = []
    for (let i = 0; i < S.length; i++) {
        const char = S[i]
        let j = i
        while (S[j + 1] === char) j++
        if (j - i > 1) result.push([i, j])
        i = j
    }
    return result
}

let s = "abbxxxxzzy";
console.log(largeGroupPositions3(s))
// Output: [[3,6]]

//start 0, res[]
// bx, start 3