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
//   } not ideal to have two return statements
}

function reverseInt1(n) {
    let numStr = n.toString().split('').reverse().join('')
    // check if n is a negative number
    // Math.sign(n) if is greater than 0 will return postive
    // if n is less than zero then it will return negative
    return parseInt(numStr) * Math.sign(n);
}