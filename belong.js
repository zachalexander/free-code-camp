function getIndexToIns(arr, num) {
  // return 0 for all empty arrays
  if (arr.length == 0 || arr === undefined){
    return 0;
  }
  // sort every array in numerical order
  let sortedArr = arr.sort(function(a, b){
    return a - b;
  });
  // find last element in sorted array, if num is larger then return the length of array
  if (sortedArr.slice(-1)[0] < num){
    return sortedArr.length;
  }
  // if element value should be in middle of array, find the spot and return index
   let evaluatedArray = sortedArr.map(function(element, index){
    if (element >= num){
      return index;
    }
  });
  // filter out the array so only values are left and return first element
  let filteredArray = evaluatedArray.filter(function(val){
    return val !== undefined;
  })
  return filteredArray[0];

}


console.log(getIndexToIns([10, 20, 30, 40, 50], 35)) // return 3.
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)) // return a number.
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)) // return 2.
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)) // return a number.
console.log(getIndexToIns([40, 60], 50)) // return 1.
console.log(getIndexToIns([40, 60], 50)) // return a number.
console.log(getIndexToIns([3, 10, 5], 3)) // return 0.
console.log(getIndexToIns([3, 10, 5], 3)) // return a number.
console.log(getIndexToIns([5, 3, 20, 3], 5)) // return 2.
console.log(getIndexToIns([5, 3, 20, 3], 5)) // return a number.
console.log(getIndexToIns([2, 20, 10], 19)) // return 2.
console.log(getIndexToIns([2, 20, 10], 19)) // return a number.
console.log(getIndexToIns([2, 5, 10], 15)) // return 3.
console.log(getIndexToIns([2, 5, 10], 15)) // return a number.
console.log(getIndexToIns([], 1)) // return 0.
console.log(getIndexToIns([], 1)) // return a number.
