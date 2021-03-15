// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

// Example 1:
// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

// Example 2:
// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.

// Example 3:
// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.

// Constraints:

// 1 <= words.length <= 104
// 1 <= allowed.length <= 26
// 1 <= words[i].length <= 10
// The characters in allowed are distinct.
// words[i] and allowed contain only lowercase English letters.


//心得是要找到word的尽头，word.length
//my way,object slowest
const countConsistentStrings = (allowed, words) => {
    obj = {};
    let result = [];
    for (const c of allowed) {
        if (obj[c] == undefined) obj[c] = 1;
        else obj[c] += 1;
    }
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        for (let j = 0; j < word.length; j++) {
            if (!obj[word[j]]) break;
            else if (j == word.length - 1) result = [...result, word]
        }
    }
    return result.length;
};

//include
const countConsistentStrings2 = (allowed, words) => {
    let result = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i]

        for (let j = 0; j < word.length; j++) {
            const char = word[j];

            if (!allowed.includes(char)) break;
            else if (j === word.length - 1) result.push(word)
        }
    }

    return result.length;
};

let allowed = "cad", words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"];
// Output: 4

console.log(countConsistentStrings(allowed, words));
//a 0
//b 1
//c 2

//'a'
//'abc'
//'ca'
//'bbbcc' check



