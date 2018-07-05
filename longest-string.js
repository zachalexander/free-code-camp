function findLongestWordLength(str) {

  let stringArray = str.split(" ");

  let stringArrayLength = [];
  stringArray.forEach(function(element) {
    stringArrayLength.push(element.length);
  });

  // use reduce to compare values in stringArrayLength
  let longestString = stringArrayLength.reduce(function(a, b) {
      return Math.max(a, b);
  });
  return longestString;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
