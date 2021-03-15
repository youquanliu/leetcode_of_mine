// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().


// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Example 3:
// Input: haystack = "", needle = ""
// Output: 0

// Constraints:

// 0 <= haystack.length, needle.length <= 5 * 104
// haystack and needle consist of only lower-case English characters.

var strStr = function (haystack, needle) {
    if (needle == '') return 0;
    //lenth of diff -? diffLen
    const hayLen = haystack.length;
    const ndLen = needle.length;
    const diffLen = hayLen - ndLen;

    //loop through diffLen
    for (let i = 0; i < diffLen + 1; i++) {
        if (needle == haystack.slice(i, ndLen + i)) {
            return i;
        }
    }
    return -1;
    //needle == haystack.slice(i,i+diffLen) ? return i : -1
};

var strStr2 = function (haystack, needle) {
    if (needle === '' || needle === haystack) return 0;    // the only mandatory check here is (needle === '')
    if (haystack.length < needle.length) return -1;    // the other ones are for efficiency

    //loop haystack
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        //once haystack[i] == needle[0]
        if (haystack[i] === needle[0]) {
            //loop through needle.length
            for (let j = 0; j < needle.length; j++) {
                //haystack[i+j] == needle[j]
                if (haystack[i + j] !== needle[j]) {
                    break;
                } else if (j == needle.length - 1) {
                    return i;
                }
            }
        }
    }
    return -1;
};
let haystack = "abc", needle = "c";
// Output: 2

console.log(strStr2(haystack, needle))

// haystack 2 : needle 0
// 3, 1
// 4, 2 == needle.length - 1