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
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    // Check if the difference betweend duplicates is less than k
    if (i - obj[nums[i]] <= k) {
      return true;
    }
    obj[nums[i]] = i;
  }
  return false;
};

const con = (nums, k) => {
  
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
console.log("con: ", con(nums2, k2));
