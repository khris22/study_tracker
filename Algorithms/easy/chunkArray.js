// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// Solution #1
function chunk(array, size) {
    // create an empty array to hold the chunks
    const chunkedArr = []
    // for each element in the original array
    for(let el of array){
        // retrieve the last element
        const lastEl = chunkedArr[chunkedArr.length - 1]
        // if the last element does not exist or equal to the chunk size
        if(!lastEl || lastEl.length === size) {
            // push a new chunk into the chunkedArr with the current element
            chunkedArr.push([el])
        // else - add the current element into the chunk
        } else {
            lastEl.push(el)
        }
    }
    return chunkedArr
}

// Solution #1 using slice()
function chunk2(array, size) {
    // slice() - pass in start index, end index
    // 2nd argument is not a length

    // create empty chunked array
        const chunkedArr = []
    // create index start at 0
    // let keyword - changes over time
        let idx = 0
    // while index is less than array.length
        while(idx < array.length) {
            // push a slice of length 'size' from array into chunked
            chunkedArr.push(array.slice(idx, idx + size))
            // add size to 'index'
            idx += size
        }
        return chunkedArr
}