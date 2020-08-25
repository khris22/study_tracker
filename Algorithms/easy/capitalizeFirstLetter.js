// Brute force solution
function capitalize(str) {
    // slice(arg1=startIndex, arg2(end index))
    // .toUpperCase()
    
    //make an empty array  'words'
    const words = []
    // split the input string by spaces to get an array
    // for each word in the array
    // uppercase the first letter
    for(let word of str.split(' ')) {
        // join first lett with the rest of string
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    // push result
    // join words into string
    return words.join(' ')
}

// Solution 2
function capitalize(str) {
    // immediately capitalize the first letter
    // create an empty string called result 
    const resultArr = str[0].toUpperCase()

    // for each character in the string
    for(let i = 1; i < str.length; i++) {
        // if the character to the left is a space
        if(str[i-1] === ' '){
            // capitalize it and add it to result
            result += str[i].toUpperCase();
        } else {
            // else add it to result
            result += str[i]
        }
    }

    return  resultArr 
}