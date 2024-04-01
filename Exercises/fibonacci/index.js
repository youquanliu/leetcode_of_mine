// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// O(n)
let fibonacci = (n) => {
<<<<<<< HEAD
  if (n <= 1) {
=======
  if (n < 2) {
>>>>>>> 4c2445ce426a3f4b4e7a89710650dd51c62fbc58
    return n;
  }
  let fibResult = [0, 1];
  for (let i = 2; i <= n; i++) {
    let nextInt = fibResult[i - 2] + fibResult[i - 1];
    fibResult = [...fibResult, nextInt];
  }
  return fibResult[n];
};

// O(1) using two indexs
let fibonacci2 = (n) => {
  if (n <= 1) {

    return n;
  }

  let prev = 0;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    let nextInt = prev + current;
    prev = current;
    current = nextInt;
  }

  return current;
};


//The reason of naming it slowFib is because
//slowFib is using a tree structure of recurion
//which means there are a lot of repeat calculation like slowFib(3) and slowFib(4) on process
let slowFib = (n) => {
  if (n < 2) {
    return n;
  }
  //Here is calling the memoized fastFib function
  return fastFib(n - 1) + fastFib(n - 2);
};

//This memoize is for storing the repeating calculation in to an object to save calculation time
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

const fastFib = memoize(slowFib);

<<<<<<< HEAD
console.log(fibonacci2(9));
=======
//console.log(fastFib(30));
// console.log(slowFib2(10));
>>>>>>> 4c2445ce426a3f4b4e7a89710650dd51c62fbc58
