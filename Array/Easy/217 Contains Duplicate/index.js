// Given an integer array nums, return true if any value appears at least twice
// in the array, and return false if every element is distinct.

// Example 1:
const nums1 = [1, 2, 3, 3];
// Output: true

// Example 2:
const nums2 = [1, 2, 3, 4];
// Output: false

// Example 3:
const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
// Output: true

//sort O(nlogn)
const containsDuplicate = (nums) => {
  let sortedNums = nums.sort((a, b) => a - b);
  for (let i = 1; i < sortedNums.length; i++) {
    if (sortedNums[i] == sortedNums[i - 1]) {
      return true;
    }
  }
  return false;
};

//Obj O(n) seperate Obj generation
const containsDuplicate2 = (nums) => {
  let obj = {};
  for (const num of nums) {
    obj[num] = obj[num] + 1 || 1;
  }
  for (const key in obj) {
    if (obj[key] > 1) {
      return true;
    }
  }
  return false;
};

//Set O(n)
const containsDuplicate3 = (nums) => {
  const s = new Set(nums);
  return s.size !== nums.length;
};

//obj O(n)
const containsDuplicate4 = (nums) => {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    let aNum = nums[i];
    if (obj[aNum] == true) {
      return true;
    } else {
      obj[aNum] = true;
    }
  }
  return false;
};

const co = (nums) => {

};
console.log("containsDuplicate2: ", containsDuplicate4(nums1));
console.log("co: ", co(nums1));
