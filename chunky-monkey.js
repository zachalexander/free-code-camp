function chunkArrayInGroups(arr, size) {
  let arrLength = arr.length;
  let alteredArray = [];
  for (let i = 0; i < arr.length; i*2){
    let splicedPiece = arr.splice(i, size);
    alteredArray.push(splicedPiece);
  }
  return alteredArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2) // return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) // return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) // return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) // return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) // return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) // return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) // return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
