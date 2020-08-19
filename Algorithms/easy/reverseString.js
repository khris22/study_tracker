// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// pseudo
// create an array that will hold the values of each element of the string
// loop through the given string starting from the last index
// as your looping push every value to the new array
// return the new array and join them together as they have been pushed individually

// KP codes
function reverse(str){
    let revArr = []
    for(let i = str.length; i--;) {
        revArr.push(str[i])
    }
    return revArr.join("")
}

// using reverse helper
// reverse is use only for arrays
function reverse1(str) {
    // // turn str into array
    // const arr = str.split('')
    // // call reverse method
    // arr.reverse()
    // // join the array back into a string
    // // return the result
    // return arr.join('')
    // // return arr

    // cleaner version
    return str.split('').reverse().join('')
}

function reverse2(str) {
// create an empty string called reversed
    let reversed = '' 
// for each character in the provided str
// ES2015 for..of syntax
    for( let char of str) {
        reversed = char + reversed
    }
// take the character and add it to the start of reversed
// return the variable reversed
    return reversed
}

// using reduce helper
function reverse3(str){
    // reduce() takes in 2 arguments: First argument is a (arrow)function, Second argument is starting/initial value
    return str.split('').reduce((reversed, character) => {
        return character + reversed
    }, '')
}

function reverse4(str){
    // takes in all the values in an array & condensed into a single string value
    // reduce() takes in 2 arguments: First argument is a (arrow)function, Second argument is starting/initial value
    // reduce(x, y) x takes the initialValue and then takes in whatever is returned; y is what we are currently operating on
    return str.split('').reduce((rev, char) => char + rev, '')
}

console.log(reverse('apple'))