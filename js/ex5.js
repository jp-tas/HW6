// Homework 6, Exercise 5: Build a table with one number on each row.
const table = document.createElement("table");
table.className = "number-table";

for (let number = 1; number <= 12; number++) {
  const row = document.createElement("tr");
  const cell = document.createElement("td");
  cell.textContent = number;

  if (number % 4 === 0) {
    cell.className = "divisible-by-four";
  }

  row.appendChild(cell);
  table.appendChild(row);
}

document.getElementById("output").appendChild(table);
