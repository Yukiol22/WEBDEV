'use strict'
const number = parseInt(prompt("Enter a number: "))
const table = document.getElementById("target")
let y = 0
for(let i = 1; i<=number; i++){
  const tr = document.createElement("tr")
  table.appendChild(tr)
  for(let x = 1; x <= number; x++){
    y += 1
    const td = document.createElement('td');
    td.append(y)
    tr.appendChild(td);
  }
}
