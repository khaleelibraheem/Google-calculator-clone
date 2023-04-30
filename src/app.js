document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button");
  const display = document.querySelector("#calc-display");
  const fx = document.querySelector("#fx");
  const inverse = document.querySelector(".inverse");

  let displayText = "";
  let result;
  let previousResult = null;
  function evaluateResult() {
    const convertedValue = displayText
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/%/g, "*0.01")
      .replace(/sin/g, "Math.sin")
      .replace(/cos/g, "Math.cos")
      .replace(/π/g, "Math.PI")
      .replace(/log/g, "Math.log10")
      .replace(/ln/g, "Math.log")
      .replace(/e/g, "Math.E")
      .replace(/tan/g, "Math.tan")
      .replace(/√/g, "Math.sqrt")
      .replace("^", "**")
      .replace(/(\d+)!/g, "factorial($1)");
    if (displayText.includes("E")) {
      let input = displayText.split("E");
      result = parseFloat(input[0]) * 10 ** parseFloat(input[1]);
      previousResult = result;
    } else {
      result = eval(convertedValue);
      previousResult = result;
    }
    displayText = result.toString();
    display.value = displayText;
  }

  function factorial(n) {
    let result = 1;

    for (let i = 2; i <= n; i++) {
      result *= i;
    }

    return previousResult = result;
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      try {
        if (button.innerText === "AC") {
          displayText = "";
          display.value = displayText;
        } else if (button.innerText === "Fx") {
          fx.classList.toggle("show");
        } else if (button.innerText === "=") {
          evaluateResult();
        } else if (button.innerText === "x!") {
          displayText += "!";
          display.value = displayText;
        } else if (button.innerText === "CE") {
          displayText = displayText.slice(0, -1);
          display.value = displayText;
        } else if (button.innerText === "tan") {
          displayText += "tan(";
          display.value = displayText;
        } else if (button.innerText === "cos") {
          displayText += "cos(";
          display.value = displayText;
        } else if (button.innerText === "sin") {
          displayText += "sin(";
          display.value = displayText;
        } else if (button.innerText === "√") {
          displayText += "√(";
          display.value = displayText;
        } else if (button.innerText === "ln") {
          displayText += "ln(";
          display.value = displayText;
        } else if (button.innerText === "log") {
          displayText += "log(";
          display.value = displayText;
        } else if (button.innerText === "x^y") {
          displayText += "^";
          display.value = displayText;
        } else if (button.innerText === "123") {
          fx.classList.toggle("show");
        } else if (button.innerText === "EXP") {
          displayText += "E";
          display.value = displayText;
        } else if (button.innerText === "Ans") {
          displayText +=
            previousResult !== null ? previousResult.toString() : "";
          display.value = displayText;
        } else if (button.innerText === "Rad") {
          displayText = "";
          display.value = displayText;
        } else if (button.innerText === "Deg") {
          displayText = "";
          display.value = displayText;
        } else if (button.innerText === "Inv") {
          if (button.innerText === "sin") {
          }
        } else {
          displayText += button.innerText;
          display.value = displayText;
        }
      } catch (error) {
        console.error(error);
        currentValue = "ERROR";
        display.value = currentValue;
      }
    });
  });
});
