// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1

//max to track the most volumn,(index[j] - index i) * lower index

var maxArea = function (heights) {
  //two pointers, trangle area  = index diff * shorter number's bar

  let i = 0,
    j = heights.length - 1,
    ans = 0;

  while (i < j) {
    let shorter = Math.min(heights[i], heights[j]);
    ans = Math.max(ans, shorter * (j - i));

    if (heights[i] < heights[j]) {
      i++;
    } else j--;
  }
  return ans;
};

//two pointers
//one #left from start, #right from end of array; inite variable output;
//loop while
//volume of water is depends on the area of trangle which is: shorter num * index diff (right - left)
//store the volume to final output if it is bigger than output
//move the shorter index left or right

const ma = (heights) => {};

const height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// Output: 49

const height2 = [1, 2, 1];
// Output: 2

console.log("maxArea: ", maxArea(height2));
console.log("ma: ", ma(height2));
