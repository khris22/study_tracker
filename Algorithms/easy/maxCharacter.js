// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // character map
    const charMap = {}

    let max = 0;
    let maxChar = '';

    for(let char of str){
        if (charMap[char]){
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }
    
    // ternary: !chars[char] ? 1 : chars[char]++
    // charMap[char] = charMap[char] + 1 || 1

    // for..in: iterate through an object
    for (let char in charMap) {
        if (charMap[char] > max) {
            // assign greater number to max
            max = charMap[char];
            // greatest number will be assigned to maxChar
            maxChar = char;
        }
    }
    return maxChar
}
