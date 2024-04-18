// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

//Brute force
var maxProfit = function (prices) {
  let mostProfitable = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      let diff = prices[j] - prices[i];
      if (diff > 0 && diff > mostProfitable) {
        mostProfitable = diff;
      }
    }
  }
  return mostProfitable;
};

//Kadane's Algorithm
//dynamicly looking for lowest buying price and calculating biggest profit
var maxProfit2 = function (prices) {
  let buy = prices[0],
    profit = 0;
  for (let i = 1; i < prices.length; i++) {
    buy = Math.min(buy, prices[i]);
    profit = Math.max(profit, prices[i] - buy);
  }
  return profit;
};

const ma = (prices) => {

};

// Output: 5
const p1 = [7, 1, 5, 3, 6, 4];
// Output: 0
const p2 = [7, 6, 4, 3, 1];

console.log("maxProfit2: ", maxProfit2(p2));
console.log("ma: ", ma(p2));
