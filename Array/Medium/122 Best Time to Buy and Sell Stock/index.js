// 122. Best Time to Buy and Sell Stock II
// Medium
// Topics
// Companies
// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.
// Example 2:

// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Total profit is 4.
// Example 3:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.

var maxProfit = function (prices) {
  let buy = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    buy = Math.min(buy, prices[i]);

    if (prices[i] - buy > 0) {
      profit += prices[i] - buy;
      buy = prices[i];
    }
  }
  return profit;
};
//Kadane's Algorithm
//keep looking for lowest buying price, if cur price greater than buy price, sell it and set sell as curr

let maxProfit2 = (prices) => {};
// Output: 7
const p1 = [7, 1, 5, 3, 6, 4];

// Output: 4
const p2 = [1, 2, 3, 4, 5];

console.log("maxProfit: ", maxProfit(p1));
console.log("maxProfit2: ", maxProfit2(p1));
