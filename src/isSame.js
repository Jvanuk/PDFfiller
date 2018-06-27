function isSame(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array2.indexOf(array1[i]) === -1) {
      return false;
    }
  }
  return true;
}

console.log(isSame([11,12,13,14], [11,13,14,15]));
console.log(isSame([11,12,13,14], [12,11,14,13]));
