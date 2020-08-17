// Given an array of integers, find the sum of its elements
// Input: 
let arrayOfIntegers = [3, 4, 5, 10]

function findSum(array) {
    let sum = 0
    
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    
    return sum
}
// use built in  reduce method

let findSumUseReduce = (array) =>{
    array.reduce(function(a,b) {
        return a + b
    }, 0)
}
// edge case: array is empty and no InitialValue is provided
// 0 is the initial value
// use 1 for multiplication