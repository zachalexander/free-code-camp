function findElement(arr, func) {
  let trueArray = [];
  arr.forEach(function(element){
    if(func(element)===true){
      trueArray.push(element);
    }
  });
  let firstPass = trueArray[0];
  if (firstPass === "") {
    firstPass = undefined;
  } else {
    firstPass = trueArray[0];
  }
  return firstPass;
}

findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) // return undefined.
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) // return 8.
