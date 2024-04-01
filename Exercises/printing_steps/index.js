// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//Image we are creating a matrix with numbers of rows and column

// + represents a space ' '
// #++++
// ##+++
// ###++
// ####+
// #####
let steps = (n) => {
  for (let rowNum = 0; rowNum < n; rowNum++) {
    let stair = "";
    for (let columNum = 0; columNum < n; columNum++) {
      if (columNum <= rowNum) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
};

//recursive
let recirsopmSteps = (n, row = 0, stair = "") => {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);

    return recirsopmSteps(n, row + 1);
  }
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  recirsopmSteps(n, row, stair);
};

let myStep = (n) => {};
const n = 7;
console.log("steps: -----------");
steps(n);
console.log("My steps: -----------");
myStep(n);
