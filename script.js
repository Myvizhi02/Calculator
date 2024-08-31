// script.js
document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    let currentInput = "";
    let operator = null;
    let firstValue = null;

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = this.getAttribute("data-value");

            switch (value) {
                case "+":
                case "-":
                case "*":
                case "/":
                    handleOperator(value);
                    break;
                case "=":
                    calculateResult();
                    break;
                case "C":
                    clearDisplay();
                    break;
                default:
                    updateDisplay(value);
                    break;
            }
        });
    });

    function updateDisplay(value) {
        currentInput += value;
        display.value = currentInput;
    }

    function handleOperator(value) {
        if (currentInput === "") return;
        if (firstValue === null) {
            firstValue = parseFloat(currentInput);
        } else {
            calculateResult();
        }
        operator = value;
        currentInput = "";
    }

    function calculateResult() {
        if (firstValue === null || currentInput === "") return;
        const secondValue = parseFloat(currentInput);
        let result;

        switch (operator) {
            case "+":
                result = firstValue + secondValue;
                break;
            case "-":
                result = firstValue - secondValue;
                break;
            case "*":
                result = firstValue * secondValue;
                break;
            case "/":
                result = firstValue / secondValue;
                break;
            default:
                return;
        }

        display.value = result;
        firstValue = result;
        currentInput = "";
        operator = null;
    }

    function clearDisplay() {
        currentInput = "";
        firstValue = null;
        operator = null;
        display.value = "";
    }
});
