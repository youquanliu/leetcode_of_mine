
// * @desc Find the duplicate positive number in array.

//For example input [1,2,2,3]
//output [2];

var arr = [1, 3, 7, 8, 4, 5, 6, 8, 2, 9];

//Sort, i==i+1 ? return i; 
//set 
// new unipue arr bu set.  newArr vs arr. 
function fidDuplicateNum1(arr) {
    let sortedArr = [...arr].sort();
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] == sortedArr[i + 1]) {
            return sortedArr[i];
        }
    }
}
function fidDuplicateNum2(arr) {
    //new set
    let numSet = new Set();
    //loop
    for (let i = 0; i < arr.length; i++) {
        //has, return
        if (numSet.has(arr[i])) {
            return arr[i];
        } else {            //not has, add
            numSet.add(arr[i])
        }
    }
    throw new Error('not found')

}
function fidDuplicateNum3(arr) {
    const unique = new Set([...arr]);
    let duplicate = [...arr];

    unique.forEach(number_unique => {
        const i = duplicate.indexOf(number_unique);
        duplicate =
            duplicate
                .slice(0, i)
                .concat(duplicate.slice(i + 1, duplicate.length));

    });
    return duplicate;
}
