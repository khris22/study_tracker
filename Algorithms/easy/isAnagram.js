// 242. Valid Anagram
// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

var isAnagram = function(s, t) {
    if(s == "" && t =="") return true
    if(s.length != t.length) return false
    
    let hash = {}
    for (let char of s) {
        if(hash[char]) {
            hash[char]++
        } else hash[char] = 1
    }
    
    for (let char of t){
        if(!hash[char]) return false
        else if (hash[char] < 1) return false
        else hash[char]--
    } 
    return true    
};

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 2
function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    // if(aCharMap.keys().length !== bCharMap.keys().length){}
    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false
    } 

    for( let char in aCharMap) {
        if(aCharMap[char] !== bCharMap[char]){
            return false;
        } 
    }
    return true;
}

    // use a helper function
    function buildCharMap(str) {
        const charMap = {}
        for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
            charMap[char] = charMap[char] + 1 || 1
        }

        return charMap
    }

// Solution 3 
function anagrams(stringA, stringB) {
    // .sort() numbers & strings will sort it alphabetically
    return cleanString(stringA) === cleanString(stringB)                  
}

// helper function
function cleanString(str){
    return str.replace((/[^\w]/g, '').toLowerCase()).split("").sort().join("")
}