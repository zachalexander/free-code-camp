
function largestOfFour(arr) {
  let largestNumArray = [];
  arr.forEach(function(element){
    // Utilize the spread operator here
    let largestNum = Math.max(...element);
    largestNumArray.push(largestNum);
  });
  return largestNumArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
