const resultDiv = document.getElementById("result01");

let inputString = "";

const updateDisplay = (value) => {
  resultDiv.textContent = value;
};

const handleButtonClick = (value) => {
  if (value === "=") {
    try {
      const result = eval(inputString.replace(/x/g, "*"));
      updateDisplay(result);
      inputString = result.toString();
    } catch (error) {
      updateDisplay("Error");
      inputString = "";
    }
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
  const value = clickedButton.textContent;

  handleButtonClick(value);
});
