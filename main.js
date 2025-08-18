const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const opInput = document.getElementById("op");
const resultOutput = document.getElementById("result");
const button = document.getElementById("go");
//Takes all the inputs and button from the HTML

function calculate() {
  const number1 = parseFloat(num1Input.value);
  const number2 = parseFloat(num2Input.value);
  const operator = opInput.value;
  //chagnes inputs to floats and gets the operator

if (operator === "/") {
    if (number2 === 0) {
      resultOutput.textContent = "You cannot divide by zero"; //Checks if the second number is zero when dividing
      return;
    } else {
      result = number1 / number2;
    }
  } else if (operator === "+") {
    result = number1 + number2;
  } else if (operator === "-") {
    result = number1 - number2;
  } else if (operator === "*") {
    result = number1 * number2;
  } else {
    resultOutput.textContent = "Invalid operator";
    return;
  }
  //Checks the operator and performs the calculation, returns an error message if the operator is invalid

  if (isNaN(result)) {
    resultOutput.textContent = "Invalid input";
    return;
  }
  //Checks if the result is a number, returns an error message if not

  resultOutput.textContent = `Result: ${result}`;
}
//Displays the result in the output paragraph


button.addEventListener("click", calculate); //Adds an event listener to the button to call the calculate function when clicked

[num1Input, num2Input].forEach(input => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      calculate();
    }
  });
});
//Adds an event listener to the number inputs to call the calculate function when Enter is pressed

[num1Input, num2Input, opInput].forEach(input => {
  input.addEventListener("input", () => {
    resultOutput.textContent = "";
  });
});
//Clears the result output when any input changes