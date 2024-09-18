const resultDiv = document.getElementById("result01");

let inputString = "";

const updateDisplay = (value) => {
  resultDiv.textContent = value;
};

const calculateResult = () => {
  try {
    const sanitizedInput = inputString.replace(/x/g, "*");

    let result = eval(sanitizedInput);

    if (result === Infinity || result === -Infinity) {
      updateDisplay("Error");
      inputString = "";
    } else {
      result = parseFloat(result.toFixed(10));
      updateDisplay(result);
      inputString = result.toString();
    }
  } catch (error) {
    updateDisplay("Error");
    inputString = "";
  }
};

const handleButtonClick = (value) => {
  if (value === "=") {
    calculateResult();
  } else if (value === "RESET") {
    inputString = "";
    updateDisplay("0");
  } else if (value === "DEL") {
    inputString = inputString.slice(0, -1);
    updateDisplay(inputString || "0");
  } else {
    inputString += value;
    updateDisplay(inputString);
  }
};

document.getElementById("key01").addEventListener("click", (event) => {
  const clickedButton = event.target;

  if (clickedButton.tagName === "BUTTON") {
    const value = clickedButton.textContent;
    handleButtonClick(value);
  }
});
