'use strict'
const score= prompt("Give A Score");

const resultElement = document.getElementById("result");

if (isNaN(score) || score > 100 || score < 0) {
    resultElement.innerHTML = `Invalid score`;
} else {
    let grade;

    if (score <= 39) {
        grade = 0;
    } else if (score <= 51) {
        grade = 1;
    } else if (score <= 63) {
        grade = 2;
    } else if (score <= 75) {
        grade = 3;
    } else if (score <= 87) {
        grade = 4;
    } else {
        grade = 5;
    }

    resultElement.innerHTML = `Your score is ${score} & Your grade is ${grade} `;
}