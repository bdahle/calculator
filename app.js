let currentAction = subtract;

const display = document.querySelector(".display");

const keys = document.querySelector(".keys");
keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    let displayValue = display.textContent;
    if (!action) {
      const keyNumber = key.textContent;
      if (displayValue === "0") {
        display.textContent = keyNumber;
      } else {
        display.textContent = displayValue + keyNumber;
      }
    } else if (action === "add") {
      //save add as current action
      currentAction = add;
      previousValue = displayValue;
      displayValue = "";
    } else if (action === "subtract") {
    } else if (action === "multiply") {
    } else if (action === "divide") {
    } else if (action === "equals") {
      const result = operate(currentAction, previousValue, displayValue);
      console.log(currentAction, displayValue, previousValue);
    }
  }
});

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
