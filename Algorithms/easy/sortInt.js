// Given an array of integers, sort the values in order without using native methods like array.sort()

// Example 1:
// Input : [3,4,1]
// Output : [1,3,4]
 
// Example 2:
// Input : [-6,0,56,-100,3]
// Output : [-100,-6,0,3,56


// Bubble Sort
// use 4 loop to iterate through each element 
// another 4 loop then compare those two elements and see which one is higher 
// return the sorted order
function sortNum(num) {
    // let newArr = []
          //  50  23
      for(let i=0;i<num.length;i++){
              // 50 23
          for(let j=0;j<num.length;j++){
                // 50 > 23 23 > 12
                // console.log('j', num[j])
  
              // this if statement will only run if this is TRUE: num[j]>num[j+1]
              if(num[j]>num[j+1]){
                console.log('inside if',num[j], num[j+1])
                  // N = 50 23
                  let N=num[j]
                  // 23 = 
                  // 50 = [ 23 , 50]
                  console.log('N',num[j])
                  num[j]=num[j+1]
                  // assign it to N
                  num[j+1]=N        
              }
          }
      }
      return num
  }
  
  // [] JavaScript = array
  //     Python = List 
  
  // Index(position)   0   1  2
  
  // 50 is comparing to 23, then 12, then 8, then, 45
  // once the loop is done it goes to the next element/Index
  // 23 is now comparing itself to 12, 8, 25
  // loop is done so 12 compare itself to 8
  console.log(sortNum([50, -23, 12, 8, -45]))