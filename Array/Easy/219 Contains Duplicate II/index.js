// Given an integer array nums and an integer k, return true
// if there are two distinct indices i and j in the array such that
// nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

var containsNearbyDuplicate = function (nums, k) {
  //
  let [left, right] = [0, 1];

  while (right < nums.length) {
    let sum = Math.abs(right - left);

    let small_sum = 0;

    if (nums[left] == nums[right] && sum <= k) {
      return true;
    } else right++;
  }

  let cur_small = 0,
    small = 1;
  for (let i = 1; i < nums.length; i++) {
    cur_small = Math.min(cur_small, i);
    small = Math.min(small, Math.abs(i - cur_small));
  }
  return small;
};

const nums1 = [1, 2, 3, 1, 2, 3],
  k1 = 2;
// Output: false

const nums2 = [1, 0, 1, 1],
  k2 = 1;
// Output: true

const nums3 = [-1, -1],
  k3 = 1;
//Output: true

console.log("containsNearbyDuplicate: ", containsNearbyDuplicate(nums2, k2));
