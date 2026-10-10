// Homework 6, Exercise 7: Prompt for two integers and display their sum.
const firstInput = prompt("Enter the first integer:");
const secondInput = prompt("Enter the second integer:");
const firstNumber = Number(firstInput);
const secondNumber = Number(secondInput);

// Reject cancellation, blank input, decimal notation, and nonnumeric text.
const isIntegerInput = (input) => {
  return input !== null && /^[+-]?\d+$/.test(input.trim()) &&
    Number.isSafeInteger(Number(input));
};

const content = document.getElementById("content");
const highlight = document.createElement("span");
highlight.style.color = "red";
highlight.style.fontWeight = "bold";

if (isIntegerInput(firstInput) && isIntegerInput(secondInput)) {
  content.appendChild(document.createTextNode(`${firstInput} + ${secondInput} = `));
  highlight.textContent = firstNumber + secondNumber;
  content.appendChild(highlight);
} else {
  highlight.textContent = "Error!";
  content.appendChild(highlight);
  content.appendChild(document.createTextNode(
    ` You must enter integers. You entered "${firstInput}" and "${secondInput}". Try again.`
  ));
}
