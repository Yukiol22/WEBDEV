const array = [20, 22, 29, 67, 16, 9, 2, 1 ,17]

function sortArray(arraySorter){
    const x = arraySorter.sort((a,b) => a-b)
    return x
}
console.log(sortArray(array))