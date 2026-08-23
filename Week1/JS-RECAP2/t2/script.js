'use strict'

const numbers = [];

for (let i = 0 ; i < 5; i++){
    let x = parseInt(prompt(`give number "${4 - i} left" `))
    numbers.push(x)
}
console.log(numbers)

let y = parseInt(prompt(`Enter a Number to Search:`))
const and = numbers.includes(y)
if(!and){
    console.log(`Number ${y} is not found in the array.`)
}else{
  console.log(`Number ${y} is found in the array.`)
}
console.log(`Updated Numbers: ${numbers.pop()}`)
console.log(`Sorted Numbers: ${numbers.sort()}`)