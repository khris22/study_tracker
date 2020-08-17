// for > forEach > for..of > for..in 
// in terms of performance,
// This relationship is uniform in almost all engines but may vary for different array lengths.

// Notes: In performance, for...of is faster than forEach, forEach is 24% slower than for...of


const arr = ["a","b","c"];
const arr1 = ["Mr. Dog", "Miss. Elephant", "Mrs. Hen"]
const arr2 = [1,2,3,4]

// for loop : This is the common method of iterating an array where we use i as index to access the elements in the array 

for (let i = 0; i < arr.length; i++)
{
    console.log("Index : "+i, "Value : "+arr[i]);
}
// OUTPUT:
// Index : 0 Value : a 
// Index : 1 Value : b 
// Index : 2 Value : c 


// for...in loop : This loop always iterates over the index. While traversing through the array, the variable i will hold the value of the index of each element. This can be used when the index of the elements needed during iteration.

for (var i in arr)
{
    console.log("Index : "+i, "Value : "+arr[i]);
}
// OUTPUT:
// Index : 0 Value : a 
// Index : 1 Value : b 
// Index : 2 Value : c 


// for...of loop : This loop always iterates through the values of the array. While traversing through the array, the variable i will hold the value of the element. This can be used if only the value of the elements in the array is needed.

for (var j of arr)
{
    console.log(j);
}

// OUTPUT
// a 
// b 
// c 


// forEach loop : This loop performs a callback function on each element while traversing through the arr. The parameters to the callback are currentValue, index of the currentValue, array on which the loop is performed

arr.forEach(function(value, index, arr){
    console.log("Value : "+value, "Index : "+index, "Complete array : "+arr)
  });
// OUTPUT
// Value : a Index : 0 Complete array : a,b,c 
// Value : b Index : 1 Complete array : a,b,c 
// Value : c Index : 2 Complete array : a,b,c 

// REVERSE FOR LOOP
// iterate from the last element/index of the array
for (let r = arr.length; r--; ){ 
    console.log("Index : "+r, "Value : "+arr[r]);
  } 
// OUTPUT:
// Index : 2 Value : c 
// Index : 1 Value : b 
// Index : 0 Value : a 