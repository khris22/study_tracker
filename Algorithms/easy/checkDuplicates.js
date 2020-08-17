
function checkDuplicate(arr) {
    let result = false;

    // Set object lets you store unique values of any type, whether primitive values or object references.
    // create a Set with array elements
    // new Set() creates a new set object
    const set1 = new Set(arr);
    // compare the size of array and Set
    // .size = Returns the number of values in the Set object.
    if(arr.length !== set1.size){
       result = true;
    }

    return result

    // if(result) {
    //    console.log('Array contains duplicate elements');
    // } else {
    //    console.log('Array does not contain duplicate elements');
    // }
 }

 let arraySample = ["abc","xy","bb", "abc"];
 console.log(checkDuplicate(arraySample))