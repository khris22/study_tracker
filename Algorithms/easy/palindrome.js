// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// pseudo
// reverse the str
// compare if the reversed str is the same as the given str
// return true if it's the same 
// return false if it's not

// KP codes
function palindrome(str) {
    let reversedStr = ''
    for(let char of str) {
        reversedStr = char + reversedStr
    }
    console.log(str,reversedStr)
    // Version 1
        // for(let i = 0; str.length; i ++) {
        //   if(str[i] === reversedStr[i]){
        //     return true
        //   } else {
        //     return false
        //   }
        // }
    // Version 2
        // for(let i = 0; str.length; i ++) {
        //     return str[i] === reversedStr[i]
        //   }
    // Version 3
    return str === reversedStr

}

function palindrome1(str) {
    const reversed = str.split('').reverse().join('')
    return str === reversed

}

// every() helper
// used to do a boolean check on every element in an array
// not ideal solution because of the number of steps
// first argument is every character in the array === char
// second arg is index of the current element we're checking === i
// - i is to make sure we increment through every step
function palindrome2(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    })
}


console.log(palindrome("abba"))
console.log(palindrome("abcdefg"))