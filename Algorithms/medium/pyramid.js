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

// iterative
function pyramid(n) {
    // calculate the midpoint
    const midpoint = Math.floor((2 * n - 1) / 2)

    // from 0 to n (iterate through row)
    // create an empty string 'level'
    for(let row=0; row < n; row++) {
        let level = '';
        // from 0 to ??? (columns)
        // find the relationship of n to the number of columns
        for(let column=0; column < 2 * n - 1; column++){
        // IF the column should have a # 
            // add a # to level
        // ELSE
            // add a space to level

        // first: calculate the midpoint
        // does not need to be calculated everytime so moved outside of the for loop
        // const midpoint = Math.floor((2 * n - 1) / 2)
            if(midpoint - row <= column && midpoint + row >= column){
                level += '#'
            } else {
                level += ' '
            }
        }
        // console.log 'level'
        console.log(level)
    }
}

// recursion
function pyramid(n, row = 0, level = '') {
    // base case
    // n is still the number of rows
    if( n === row) {
        return;
    }

    // detect end of the level
    if( level.length === 2 * n - 1) {
        console.log(level);
    // move on to the next row
        return pyramid(n, row + 1)
    }

     // calculate the midpoint (midpoint index)
    const midpoint = Math.floor((2 * n - 1) / 2)

    // temporary variable
    let add;
    if(midpoint - row <= level.length && midpoint + row >= level.length){
        // character that we should add
        add = '#'
    } else {
        add = ' '
    }
    // call the function again
    pyramid(n, row, level + add)

}
