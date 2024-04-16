// Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

// For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// Example 1:

// Input: s = "ab", goal = "ba"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
// Example 2:

// Input: s = "ab", goal = "ab"
// Output: false
// Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.
// Example 3:

// Input: s = "aa", goal = "aa"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.

//For this problem, we go through the two string to see how many different chars they have.
//If they have 0 different char, which means they are the same,
//we need to check whether itself contains a letter more than once.
//If so, it is exchangeable, .i.e., for ab and ab, since ab does not contain any letter that more than once,
// it is not exchangeable.But for hello and hello, we can change the letter 'l' in each word.
//If A and B contain exactly 2 different letters, we just need to check whether A's first is equal to B's second, vice versa.

var buddyStrings = function (a, b) {
  if (a.length !== b.length) return false; //'ab'.length !== 'abc'.length  false

  let diffCount = 0,
    fst = -1,
    sec = -1;

  for (let i = 0; i < a.length; i++) {
    //'abcd' vs 'acbd' fst=1/sec=2/diffCount=2
    if (a[i] != b[i]) {
      if (fst == -1) {
        fst = i;
      } else {
        sec = i;
      }
      diffCount++;
    }
  }
  if (diffCount == 0) {
    //No different char         'abc' ,'abc'
    const s = new Set(a.split("")); //remove dup numbers  ie.'aaa' -> 'a'
    return s.size < a.length; //'a'.len < 'aaa'length
  }
  if (diffCount != 2) {
    //'abcd'   'dcba'  need more than one swap
    return false;
  } else {
    return a[fst] == b[sec] && a[sec] == b[fst];
  }
};

var buddyStrings2 = function (a, b) {
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
