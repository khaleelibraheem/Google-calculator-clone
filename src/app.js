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
      .replace("^", "**");
    if (displayText.includes("E")) {
      let input = displayText.split("E");
      result = parseFloat(input[0]) * 10 ** parseFloat(input[1]);
    } else if (convertedValue.includes("!")) {
      const num = parseInt(convertedValue.split("!")[0]);
      result = factorial(num);
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

    return result;
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
          displayText += (previousResult !== null) ? previousResult.toString() : "";
          display.value = displayText;
        } else if (button.innerText === "Rad") {
          displayText = "";
          display.value = displayText;
        } else if (button.innerText === "Deg") {
          displayText = "";
          display.value = displayText;
        } else if (button.innerText === "Inv") {
          displayText = "";
          display.value = displayText;
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
