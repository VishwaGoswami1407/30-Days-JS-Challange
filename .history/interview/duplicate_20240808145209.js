const arr = [1, 3, 2, 3, 4, 5, 6]
const duplicate = arr.filter((ele, index, ar) => ar.indexOf(ele)!==index)
console.log(duplicate);


const maxfunction = (array) =>{
    return array.reduce(function (acc, ele){
        return (ele > acc)? ele : acc;
    })
}
console.log(maxfunction(arr));


const largesecond = (array) =>{
    firstlarge = Math.max(...array);
    return(firstlarge)
}