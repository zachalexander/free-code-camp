function titleCase(str) {
  let strArray = str.split(" ");
  let capArray = [];
  for (let i=0; i<strArray.length;i++){
    let strWord = strArray[i];
    let capWord = strWord.charAt(0).toUpperCase() + strWord.substring(1).toLowerCase();
    capArray.push(capWord);
  }
  str = capArray.join(' ');
  return str;
}

titleCase("I'm a little tea pot") // return a string.
titleCase("I'm a little tea pot") // return I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt") // return Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") // return Here Is My Handle Here Is My Spout.
