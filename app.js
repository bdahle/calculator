let displayValue = 0;

const numberButtons = document.querySelectorAll(".numberButtons button");
numberButtons.forEach((button) => {
  button.addEventListener("click", displayNumber);
});

function displayNumber(e) {
  console.log(e.target.textContent);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operation, a, b) {
  return operation(a, b);
}
