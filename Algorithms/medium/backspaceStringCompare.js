var backspaceCompare = function(S, T) {
    let sArr = [];
    let tArr = [];
    
    for (let i = 0; i < S.length; i++) {
        if (S[i] === "#") {
        if(sArr.length != 0)sArr.pop();
        } else {
        sArr.push(S[i]);
        }
    }
    
    for (let i = 0; i < T.length; i++) {
        if (T[i] === "#") {
        if(tArr.length != 0)tArr.pop();
        } else {
        tArr.push(T[i]);
        }
    }

    sArr = sArr.join("");
    tArr = tArr.join("");
    // returns a boolean:
        return sArr === tArr;
       
    // acceptable but not faster:
    // if(sArr.length != tArr.length) {
    //   return false;
    // }
    // while(sArr.length != 0){
    //   if(sArr.pop() != tArr.pop()) return false
    // }

    // return true
}

// pseudo code:
// create 2 stacks for each string
// push each string to the stack
//     S will be pushed to stack 1
//      loop around each element of the stack and check is there is a #
//      if there is a sharp symbol that means we need to delete that character
//      user pop to delete the last string

// create 2 stacks for each string
// push each string to the stack
//     S will be pushed to stack 1
//      loop around each element of the stack and check is there is a #
//      if there is a sharp symbol that means we need to delete that character
//      user pop to delete the last string
//     T will be pushed to stack 2
//      loop around each element of the stack and check is there is a #
//      if there is a sharp symbol that means we need to delete that character
//      user pop to delete the last string
// check now if they have the same number of elements inside the stack
// loop around each element and check if they are equal/the same elements and then pop out each element
// return false
