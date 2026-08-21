const a = parseFloat(prompt("Enter length of side A:"));
const b = parseFloat(prompt("Enter length of side B:"));
const  c = parseFloat(prompt("Enter length of side C:"));

const invalid = (a + b > c) && (c + b > a) && (a + c > b)

const resultElement = document.getElementById("result");

if (!invalid || a <= 0 || b <= 0 || c <= 0) {
    resultElement.innerHTML = `<p>The entered side lengths do not form a valid triangle.</p>`;
} else if (a === b && b === c) {
    resultElement.innerHTML = `<p>The triangle is Equilateral (all sides are equal).</p>`;
} else if (a === b || a === c || b === c) {
    resultElement.innerHTML = `<p>The triangle is Isosceles (two sides are equal).</p>`;
} else {
    resultElement.innerHTML = `<p>The triangle is Scalene (all sides are different).</p>`;
}