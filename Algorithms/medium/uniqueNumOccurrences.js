// LeetCode: 1207. Unique Number of Occurrences
// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.
// Example 1:
// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:
// Input: arr = [1,2]
// Output: false
// Example 3:
// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true
 
// Use of Map() & Set()

const uniqueOccurrences = function(arr) {
    let hashMap =  new Map()

    for(let i= 0; i < arr.length; i++) {
        // if the element is not in the hashMap
      if(!hashMap.has(arr[i])) {
        //   assign it as a key with a value of 1
        hashMap.set(arr[i], 1)
      } else {
        //   if the element is in the hashmap, get the key and increment the value 
        hashMap.set(arr[i], hashMap.get(arr[i]) + 1)
      }
    }

    // store the values of all the keys in an array
  const values = [...hashMap.values()]
    // Set() will store ONLY unique values
  const newSet = new Set(values)
    // if the number of elements in the set is not the same as the number of elements in our values then there was a duplicate so return false, they're the same return true that means the number of occurences are unique
  if(values.length === newSet.size) {
    return true
  } else {
    return false
  }
}
