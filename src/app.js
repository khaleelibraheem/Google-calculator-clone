document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button");
  const display = document.querySelector("#calc-display");
  const fxhome = document.querySelector("#fx-home");
  const sinButton = document.querySelector("#sin");
  const tanButton = document.querySelector("#tan");
  const cosButton = document.querySelector("#cos");
  const lnButton = document.querySelector("#ln");
  const squareButton = document.querySelector("#square");
  const logButton = document.querySelector("#log");
  const ac = document.querySelector("#ac");
  const radButton = document.querySelector("#rad");
  const degButton = document.querySelector("#deg");

  let displayText = "";
  let result;
  let previousResult = null;
  let isDegree = false;
  function evaluateResult() {
    console.log(isDegree);
    const convertedValue = displayText
      .replace(
        /(\d+)(e|π|sin|cos|tan|arcsin|arccos|arctan|√|log|ln|√)/g,
        "$1*$2"
      )
      .replace(/sin/g, "angS")
      .replace("arcsin", "invAngS")
      .replace("arcangS", "invAngS")
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/%/g, "*0.01")
      .replace(/cos/g, "angC")
      .replace(/arccos/g, "invAngC")
      .replace(/arcangC/g, "invAngC")
      .replace(/π/g, "Math.PI")
      .replace(/log/g, "Math.log10")
      .replace(/ln/g, "Math.log")
      .replace(/e/g, "Math.E")
      .replace(/tan/g, "angT")
      .replace(/arctan/g, "invAngT")
      .replace(/arcangT/g, "invAngT")
      .replace(/√/g, "Math.sqrt")
      .replace("^", "**")
      .replace(/(\d+)!/g, "factorial($1)");

    if (/^(\^|\d+\^|\^2)$/.test(displayText)) {
      result = 0;
      displayText = "0";
      display.value = "0";
      return;
    }
    if (/^!$/.test(displayText)) {
      display.value = "0";
      return;
    }
    if (displayText.includes("E")) {
      let input = displayText.split("E");
      result = parseFloat(input[0]) * 10 ** parseFloat(input[1]);
      previousResult = result;
    } else {
      console.log("convertedValue", convertedValue);
      result = eval(convertedValue);
      previousResult = result;
    }
    displayText = result.toString();
    display.value = displayText;

    // sin function
    function angS(angle) {
      let result;
      if (isDegree) {
        angle = angle * (Math.PI / 180);
        result = Math.sin(angle);
      } else {
        result = Math.sin(angle);
      }
      return result;
    }

    // sin Inverse function
    function invAngS(angle) {
      let result;
      if (isDegree) {
        result = Math.asin(angle) * (180 / Math.PI);
      } else {
        result = Math.asin(angle);
      }
      return result;
    }

    // cos function
    function angC(angle) {
      let result;
      if (isDegree) {
        angle = angle * (Math.PI / 180);
        result = Math.cos(angle);
      } else {
        result = Math.cos(angle);
      }
      return result;
    }

    // Cos Inverse Function
    function invAngC(angle) {
      let result;
      if (isDegree) {
        result = Math.acos(angle) * (180 / Math.PI);
      } else {
        result = Math.acos(angle);
      }
      return previousResult = result;
    }
    
    // Tan function
    function angT(angle) {
      let result;
      if (isDegree) {
        angle = angle * (Math.PI / 180);
        result = Math.tan(angle);
      } else {
        result = Math.tan(angle);
      }
      return result;
    }
    // Tan Inverse Function
    function invAngT(angle) {
      let result;
      if (isDegree) {
        result = Math.atan(angle) * (180 / Math.PI);
      } else {
        result = Math.atan(angle);
      }
      return result;
    }

    // Factorial function
    function factorial(n) {
      let result = 1;

      for (let i = 2; i <= n; i++) {
        result *= i;
      }

      return (previousResult = result);
    }
  }

  

  function displayFx() {
    const fxhome = document.querySelector("#fx-home");
    const numbHome = document.querySelector("#numb-home");
    if (fxhome.style.display === "none") {
      fxhome.style.display = "grid";
      numbHome.style.display = "none";
    } else {
      fxhome.style.display = "none";
      numbHome.style.display = "grid";
    }
  }
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      let currentValue;
      try {
        if (button.innerText === "=") {
          evaluateResult();
          if (ac.innerText === "CE") {
            ac.innerText = "AC";
          }
        } else if (button.innerText === "AC") {
          displayText = "";
          display.value = displayText;
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
        } else if (button.innerText === "123" || button.innerText === "Fx") {
          displayText = "";
          display.value = displayText;
        } else if (button.innerText === "EXP") {
          displayText += "E";
          display.value = displayText;
        } else if (button.innerText === "Ans") {
          displayText +=
            previousResult !== null ? previousResult.toString() : "";
          display.value = displayText;
        } else if (button.innerText === "Deg") {
          displayText = "";
          display.value = displayText;
          degButton.style.color = "black";
          radButton.style.color = "#999";
          isDegree = true;
        } else if (button.innerText === "Rad") {
          if (isDegree) {
            isDegree = false;
          }
          displayText = "";
          display.value = displayText;
          radButton.style.color = "black";
          degButton.style.color = "#999";
        } else if (button.innerText === "Inv") {
          
          // Switch the text of the sin button
          if (sinButton.innerText === "sin") {
            sinButton.innerText = "sin⁻¹";
          } else {
            sinButton.innerText = "sin";
          }

          // Switch the text of the cos button
          if (cosButton.innerText === "cos") {
            cosButton.innerText = "cos⁻¹";
          } else {
            cosButton.innerText = "cos";
          }

          // Switch the text of the tan button
          if (tanButton.innerText === "tan") {
            tanButton.innerText = "tan⁻¹";
          } else {
            tanButton.innerText = "tan";
          }

          // Switch the text of the ln button
          if (lnButton.innerText === "ln") {
            lnButton.innerText = "e^x";
          } else {
            lnButton.innerText = "ln";
          }

          // Switch the text of the √ button
          if (squareButton.innerText === "√") {
            squareButton.innerText = "x²";
          } else {
            squareButton.innerText = "√";
          }

          if (logButton.innerText === "log") {
            logButton.innerText = "10x";
          } else {
            logButton.innerText = "log";
          }
        } else if (button.innerText === "sin⁻¹") {
          displayText += "arcsin(";
          display.value = displayText;
        } else if (button.innerText === "cos⁻¹") {
          displayText += "arccos(";
          display.value = displayText;
        } else if (button.innerText === "tan⁻¹") {
          displayText += "arctan(";
          display.value = displayText;
        } else if (button.innerText === "e^x") {
          displayText += "e^";
          display.value = displayText;
        } else if (button.innerText === "x²") {
          displayText += "^2";
          display.value = displayText;
        } else if (button.innerText === "10x") {
          displayText += "10^";
          display.value = displayText;
        } else {
          ac.innerText = "CE";
          displayText += button.innerText;
          display.value = displayText;
        }
      } catch (error) {
        console.error(error);
        currentValue = "ERROR";
        display.value = currentValue;
        ac.innerText = "AC";
      }
    });
  });
});
