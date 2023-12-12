// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

let pyramid = (n) => {
  let midpoint = Math.floor((n * 2 - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = "";
    for (let column = 0; column < n * 2 - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
};

// n = row number
// '   #   '   # number = 1 ' 'number = n-1
// '  ###  '
// ' ##### '
// '#######'
pyramid(7);
