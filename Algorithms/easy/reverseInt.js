// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


// using toString() to change the number into a string
// .sign()
// parseInt() = string to a number
function reverseInt(n) {
    let numStr = n.toString().split('').reverse().join('')
    // check if n is a negative number
      if(n < 0){
        return parseInt(numStr) * -1
      }
     return parseInt(numStr)
  }
  
  