'use strict'
let valid = false
const numbers = []
for (;!valid;){
    let x =prompt("Enter a number (or 'done' to finish):")
    if (x == "done"){
        valid = true
    }
    else if (x % 2 == 0){
        numbers.push(x)
    }
}
if(numbers.length> 0){
    console.log(`Even Numbers: ${numbers}`)
}else{
    console.log("Even Numbers: None")
}
