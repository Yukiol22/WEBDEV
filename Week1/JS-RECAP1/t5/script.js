'use strict'
const x = prompt("Give number");
const resultElement = document.getElementById("result");

if (isNaN(x) || x < 0) {
    resultElement.innerHTML = `Please enter a valid positive number.`;
} else {
    let sum = 0;
    for (let i = 0; i <= x; i++) {
        sum += i;
    }
    resultElement.innerHTML = `The sum is: ${sum}`;
}