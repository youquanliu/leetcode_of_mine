// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

// Example 1:
// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

// Example 2:
// Input: s = "textbook"
// Output: false
// Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
// Notice that the vowel o is counted twice.

// Example 3:
// Input: s = "MerryChristmas"
// Output: false

// Example 4:
// Input: s = "AbCdEfGh"
// Output: true

// Constraints:
// 2 <= s.length <= 1000
// s.length is even.
// s consists of uppercase and lowercase letters.

var halvesAreAlike = function (s) {

    let vowelCount_first = 0;
    let vowelCount_second = 0;
    let halfIdx = s.length / 2;

    function isVowel(char) {
        return ['a', 'e', 'i', 'o', 'u'].indexOf(char.toLowerCase()) !== -1
    }

    for (let i = 0; i < halfIdx; i++) {
        isVowel(s[i]) && vowelCount_first++
        isVowel(s[i + halfIdx]) && vowelCount_second++;
    }
    return vowelCount_first == vowelCount_second;
};

const halvesAreAlike2 = s => {
    
    const target = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    let a = 0, b = 0;
    for (let left = 0, right = s.length - 1; left < right; ++left, --right) {
        target.has(s[left]) && ++a;
        target.has(s[right]) && ++b;
    }
    return a === b;
};
let s = "AbCdEfGh"
// Output: true

console.log(halvesAreAlike(s))
