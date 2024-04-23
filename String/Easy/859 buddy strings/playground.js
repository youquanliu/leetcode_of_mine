// Given two strings a and b, return true if you can swap two letters in a so the result is equal to b, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at a[i] and b[j]. 
//For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// Example 1:
// Input: a = "ab", b = "ba"
// Output: true
// Explanation: You can swap a[0] = 'a' and a[1] = 'b' to get "ba", which is equal to b.

// Example 2:
// Input: a = "ab", b = "ab"
// Output: false
// Explanation: The only letters you can swap are a[0] = 'a' and a[1] = 'b', which results in "ba" != b.

// Example 3:
// Input: a = "aa", b = "aa"
// Output: true
// Explanation: You can swap a[0] = 'a' and a[1] = 'a' to get "aa", which is equal to b.

// Example 4:
// Input: a = "aaaaaaabc", b = "aaaaaaacb"
// Output: true

//For this problem, we go through the two string to see how many different chars they have.
//If they have 0 different char, which means they are the same, 
//we need to check whether itself contains a letter more than once.
//If so, it is exchangeable, .i.e., for ab and ab, since ab does not contain any letter that more than once,
// it is not exchangeable.But for hello and hello, we can change the letter 'l' in each word.
//If A and B contain exactly 2 different letters, we just need to check whether A's first is equal to B's second, vice versa.


//1. compare length
//2. loop throug twoo array, how many difference existing?
// 1) count !== 2 return false;
// 2) count == 2 Are first char in A eaqul second char in B, vice versa;


//'abcd' 'acbd'
//length?
//How many difference? diffCount !==2 return false; diffCount == 2  return first of A == second of B   //abcd abab
var buddyStrings = function (a, b) {
    if (a.length !== b.length) return false;

    if (a == b) {
        let s = new Set(a);
        return s.size !== a.length;
    }
    
    let diff = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            diff.push(i);
        }
    }
    let [fst, sec] = diff;

    if (diff.length == 2 && a.length == b.length) {
        return a[fst] == b[sec] && a[sec] == b[fst];
    }
    return false;
};

const a = 'aacba', b = 'aabcn';
console.log(buddyStrings(a, b))



//console.log(`fst: ${fst}, sec: ${sec}, cnt: ${diffCount}`)

