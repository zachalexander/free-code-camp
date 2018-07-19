function mutation(arr) {

  let firstElement = arr[0].toLowerCase();
  let secondElement = arr[1].toLowerCase();

  let splitFirst = firstElement.split("");
  let splitSecond = secondElement.split("");

  let check = splitSecond.map(function(element){
    if(splitFirst.indexOf(element) === -1){
      return false;
    } else {
      return true;
    }
  });

  let returnStatement = check.indexOf(false);

  if (returnStatement === -1){
    return true;
  } else {
    return false;
  }
}

console.log(mutation(["hello", "hey"])) // return false.
// mutation(["hello", "Hello"]) // return true.
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])) // return true.
// mutation(["Mary", "Army"]) // return true.
// mutation(["Mary", "Aarmy"]) // return true.
// mutation(["Alien", "line"]) // return true.
// mutation(["floor", "for"]) // return true.
console.log(mutation(["hello", "neo"])) // return false.
console.log(mutation(["voodoo", "no"])) // return false.
