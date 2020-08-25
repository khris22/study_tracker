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

// iterative solution
function steps(n) {
    // from 0 to n iterate through rows
    // create an empty stair
    
    // from 0 to n iterate through columns
    // if the current column is equal to or less than the current row
    //  row
    for(let i = 0; i < n; i++) {
        let stair = '';
        // column
        for(let j = 0; j < n; j++){
            if(j <= i){
                // add '#' to the stair
                stair += '#'
            } else {
                // else add a space to the stair
                stair += ' '
            }
        }
        // console.log(stair)
        console.log(stair)
    }
}

// recursion
// figure out the bare minimum pieces of information to represent your problem
// give reasonable defaults to the bare minimum pieces of info
// check the base case. is there any more work left to do? if not, return
// do some work. call your function again. make sure the arguments have changed in some fashion


function steps(n, row = 0, stair = ''){
    // base case - will stop the recursion  
    // if row is === n 
    if(n === row){
        return;
    }

    // if the stair string has a length === n then we are at the end of the row
    if(n===stair.length) {
        console.log(stair)
        return steps(n, row + 1)
    }
    
    // if the length of the stair string is less than or equal to the row number we're working on we add '#' else we add ' '
    // change the n
    if(stair.length <= row){
        stair += '#';
    } else {
        stair += ' ';
    }
    // call the function
    steps(n, row, stair);

}

