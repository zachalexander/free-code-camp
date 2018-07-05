function repeatStringNumTimes(str, num) {
  let strUpdate=str;
  if (num > 0) {
    for (let i=0; i<num-1; i++){
      strUpdate+=str;
    }
  } else {
    strUpdate = "";
  }
  return strUpdate;
}

repeatStringNumTimes("*", 3) // return "***".
repeatStringNumTimes("abc", 3) // return "abcabcabc".
repeatStringNumTimes("abc", 4) // return "abcabcabcabc".
repeatStringNumTimes("abc", 1) // return "abc".
repeatStringNumTimes("*", 8) // return "********".
repeatStringNumTimes("abc", -2) // return "".
