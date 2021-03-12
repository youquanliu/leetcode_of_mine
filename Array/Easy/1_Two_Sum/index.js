// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 103
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

var twoSum1 = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        let found = nums.indexOf(complement, i + 1);
        if (found !== -1) {
            return [i, found]
        }
    }
};
var twoSum2 = function (nums, target) {
    if (nums.length === 2) return [0, 1];
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        let found = obj[complement];

        if (found !== undefined && found != i) {
            return [i, found];
        }
    }
    return [0, 0]
}

var twoSum3 = function (nums, target) {
    if (nums.length == 2) return [0, 1];
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        let found = obj[complement];
        console.log(found, complement)
        if (found != undefined) return [i, found];
        else obj[nums[i]] = i;
    }
}
var nums = [2, 5, 3, 5];
var target = 10;

console.log(twoSum3(nums, target))

// 2  1,
// 5  2,
// 11 1,
//target - obj[i]

