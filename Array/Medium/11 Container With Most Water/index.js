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

const ma = (heights) => {
  // formular: amount of water = (nums[i] - nums[i ]) * lower height
  // two pointers, one from left moving to right; one from right moving to left
  // calculate the amount of water in each step
  // compare the current water with the max water, return max

  let left = 0,
    right = heights.length - 1,
    max = 0;

  while (left < right) {

    let curAmount = (right - left) * Math.min(heights[left], heights[right]);
    max = Math.max(max, curAmount);

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
  
};

const height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// Output: 49

const height2 = [1, 2, 1];
// Output: 2

console.log("maxArea: ", maxArea(height1));
console.log("ma: ", ma(height1));
