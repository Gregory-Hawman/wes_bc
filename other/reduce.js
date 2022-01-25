function reduce(arr, callback, accumulator) {
    let returnedValue = accumulator ?? arr[0]; //nullish coalescing operator
    for (let i = accumulator === undefined ? 1:0; i < arr.length; i++) {
      returnedValue = callback(returnedValue, arr[i]);
    }
    return returnedValue;
  }

const min = reduce([1, 3, 4, 5], (returnedVal, curVal) => {
 curVal < returnedVal 
 ? curVal 
 : returnedVal
})

const max = reduce([1, 3, 4, 5], (returnedVal, curVal) => {
    curVal > returnedVal
    ? curVal 
    : returnedVal
})

const sum = reduce([1, 3, 4, 5], (returnedVal, curVal) => {
    return returnedVal + curVal
})

const evenNums = reduce([1,2,3,4,5,6], (returnedVal, curVal) => {
    if (curVal % 2 !== 0){
        return returnedVal + curVal
    }
    return returnedVal
}, 1)

// console.log(min)
// console.log(max)
// console.log(sum)
console.log(evenNums)