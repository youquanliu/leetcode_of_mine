// Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.

// A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
// Where |x| denotes the absolute value of x.

// Return the number of good triplets.

// Example 1:
// Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
// Output: 4
// Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].

// Example 2:
// Input: arr = [1,1,2,2,3], a = 0, b = 0, c = 1
// Output: 0
// Explanation: No triplet satisfies all conditions.


// Constraints:

// 3 <= arr.length <= 100
// 0 <= arr[i] <= 1000
// 0 <= a, b, c <= 1000

var countGoodTriplets = function (arr, a, b, c) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                let forA = Math.abs(arr[i] - arr[j]);
                let forB = Math.abs(arr[j] - arr[k]);
                let forC = Math.abs(arr[i] - arr[k]);
                if (forA <= a && forB <= b && forC <= c) {
                    count++;
                }
            }
        }
    }
    return count;
}

var countGoodTriplets2 = function (arr, a, b, c) {
    //our result count
    let res = 0;
    //we must implement a O(n^3) 3 nested for loop solution, but the continue statements skip through numbers that aren't
    // able to be good triples so it isn't deathly slow.
    for (let i = 0; i < arr.length; i++) {
        //do nothing during the first loop, we only begin checking values for the second and 3rd loop
        //this is because we mush check all options for index i where 0 <= i < j < k < arr.length

        for (let j = i + 1; j < arr.length; j++) {
            //we first compare our arr[i] with arr[j], Math.abs, handles the absolute difference calculation for us
            //the if statement here checks the opposite of the needs for the good triplet: |arr[i] - arr[j]| <= a
            //this is because if we find a value for arr[i] - arr[j] that is greater than (>) a, we want to skip 
            //to the next j value in the loop. this is done by saying when we find a bad triple value -> arr[i] - arr[j]) > a
            //we then continue. The continue statement "jumps over" one iteration in the loop.
            if (Math.abs(arr[i] - arr[j]) > a) continue;


            //we then continue to the 3rd nested loop and do the same checks, with the same rational as stated above.
            //but when we find a good triple b value, we then simply check for a good triple c value and increment the result
            //if the c value is also found to be a "good triple".
            for (let k = j + 1; k < arr.length; k++) {
                if (Math.abs(arr[j] - arr[k]) > b) continue;
                if (Math.abs(arr[k] - arr[i]) <= c) res++;
            }
        }
    }
    //return our counter
    return res;
}
let arr = [3, 0, 1, 1, 9, 7], a = 7, b = 2, c = 3;
console.log(countGoodTriplets2(arr, a, b, c))
// Output: 4

