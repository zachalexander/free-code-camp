function truncateString(str, num) {
  let strTruncated = str;
  if (str.length > num) {
    strTruncated = str.substring(0, num)+"...";
  } else {
    strTruncated;
  }
  return strTruncated;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8) // return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 11) // return "Peter Piper...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) // return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) // return "A-tisket a-tasket A green and yellow basket".
truncateString("A-", 1) // return "A...".
truncateString("Absolutely Longer", 2) // return "Ab...".
