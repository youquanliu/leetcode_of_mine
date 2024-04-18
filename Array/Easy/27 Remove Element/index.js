// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements
// which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeElement = function (nums, val) {
  //two pointers
  //left from 0, right from nums.length-1
  //right = val, right --
  //left = val and right != val, swap, left ++ , right --
  //left != val left ++
  //return left +1

  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    if (nums[right] == val) right--;
    else if (nums[left] !== val) left++;
    else if (nums[left] == val && nums[right] !== val) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }
  return left + 1;
};

function removeElement2(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}

const nums1 = [0, 1, 2, 2, 3, 0, 4, 2],
  val1 = 2;
// Output: 5, nums = [0,1,4,0,3,_,_,_]

const nums2 = [],
  val2 = 1;

console.log("removeElement: ", removeElement2(nums1, val1));
console.log(nums1);
