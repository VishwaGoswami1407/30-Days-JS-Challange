const arr = [1, 3, 2, 3, 4, 5, 6]
const duplicate = arr.fillter((els, index, arr) => arr.indexOf(els)!==index)
console.log(duplicate);
