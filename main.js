const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const opInput = document.getElementById("op");
const resultOutput = document.getElementById("result");
const button = document.getElementById("go");

button.addEventListener("click", () => {
  const number1 = parseFloat(num1Input.value);
  const number2 = parseFloat(num2Input.value);
  const operator = opInput.value;

  let result;
  if (operator === "+") result = number1 + number2;
  else if (operator === "-") result = number1 - number2;
  else if (operator === "*") result = number1 * number2;
  else if (operator === "/") result = number2 !== 0 ? number1 / number2 : "Error: Div by 0";
  else result = "Invalid operator";

if (isNaN(result)) {
    result = "Invalid input";
  }

  resultOutput.textContent = `Result: ${result}`;
});