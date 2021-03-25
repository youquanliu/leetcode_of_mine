// Given an array of integers nums, you start with an initial positive value startValue.

// In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

// Return the minimum positive value of startValue such that the step by step sum is never less than 1.


// Example 1:
// Input: nums = [-3,2,-3,4,2]
// Output: 5
// Explanation: If you choose startValue = 4, in the third iteration your step by step sum is less than 1.
//                 step by step sum
//                 startValue = 4 | startValue = 5 | nums
//                   (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
//                   (1 +2 ) = 3  | (2 +2 ) = 4    |   2
//                   (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
//                   (0 +4 ) = 4  | (1 +4 ) = 5    |   4
//                   (4 +2 ) = 6  | (5 +2 ) = 7    |   2

// Example 2:
// Input: nums = [1,2]
// Output: 1
// Explanation: Minimum start value should be positive. 

// Example 3:
// Input: nums = [1,-2,-3]
// Output: 5


// Constraints:

// 1 <= nums.length <= 100
// -100 <= nums[i] <= 100


//Calculate cumulative sum as shown in the problem description, maintain a variable which tracks the
//minimum cumulative sum. 

//If minimum cumulative sum is less than zero,we need positive equivalent of cum_sum + 1 to make the total sum positive.

// Else, 1 is the least. Hence, return as calculated.

var minStartValue = function (nums) {
    let cum_sum = 0;
    let min = 1;
    for (let i = 0; i < nums.length; i++) {
        cum_sum += nums[i];
        min = Math.min(min, cum_sum);
    }
    if (min == 1) return 1;
    return (Math.abs(min)) + 1;
};
var minStartValue2 = function (nums) {
    let min = 1, cum_sum = 0;
    for (let i = 0; i < nums.length; i++) {
        cum_sum += nums[i];
        min = Math.min(min, cum_sum);
    }
    if (min === 1) return 1;
    return Math.abs(min) + 1;
}
let nums = [-3, 2, -3, 4, 2];
//nums = [1,2,-3,-5,4]
console.log(minStartValue2(nums));
// Output: 5


//sum=-3 min=-3
//sum=-1 min=-3
//sum=-4 min=-4
//sum=0 min=-4
//sum=2 min=-4