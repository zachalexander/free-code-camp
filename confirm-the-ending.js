function confirmEnding(str, target) {
  let strLength = str.length;
  let targetLength = target.length;
  let extractionPos = strLength-targetLength;
  let strEnding = str.substring(extractionPos);

  if(strEnding === target) {
    return true;
  } else {
    return false;
  };
}

confirmEnding("Bastian", "n"); // return true.
confirmEnding("Congratulation", "on") // return true.
confirmEnding("Connor", "n") // return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") // return false.
confirmEnding("He has to give me a new name", "name") // return true.
confirmEnding("Open sesame", "same") // return true.
confirmEnding("Open sesame", "pen") // return false.
confirmEnding("Open sesame", "game") // return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") // return false.
confirmEnding("Abstraction", "action") // return true.
