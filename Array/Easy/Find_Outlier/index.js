// You are given an array (which will have a length of at least 3, but could be very large)
// containing integers. The array is either entirely comprised of odd integers or entirely
// comprised of even integers except for a single integer N. Write a method that takes the
// array as an argument and returns this "outlier" N.

//input findOutlier([2, 6, 8, 10, 3])
//output 3
//Because 2,6,8,10 are all even number, only 3 is odd number
function findOutlier(integers) {
    let left = 0;
    let right = integers.length - 1;
    while (left < right) {
        while (integers[left] % 2 == 0 && left < right) {
            left++;
        }
        while (integers[right] % 2 == 1 && left < right) {
            right--;
        }
        if (left < right) {
            [integers[left], integers[right]] = [integers[right], integers[left]];
            left++;
            right--;
        }
    }
    if (integers[0] % 2 == 0 && integers[1] % 2 == 0) {
        return integers[integers.length - 1];
    }
    return integers[0];
}

function findOutlier2(nums) {
    
}

let arr = [2, 6, 8, 3, 10];
console.log(findOutlier2(arr))