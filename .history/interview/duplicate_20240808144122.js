const arr = [1, 3, 2, 3, 4, 5, 6]
const duplicate = arr.filter((ele, index, ar) => ar.indexOf(ele)!==index)
console.log(duplicate);
