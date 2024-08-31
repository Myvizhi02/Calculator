How It Works
HTML:

The <div class="calculator"> element wraps the entire calculator.
The <div class="display" id="display"></div> element is where the numbers and results are shown.
The buttons are created using <button> elements with classes and data attributes for values. These include digits (0-9), basic operations (+, -, *, /), a decimal point, an equals sign for calculating the result, and a clear button.
CSS:

The body is styled to center the calculator on the page and give it a clean background.
The calculator itself has a white background, rounded corners, and a shadow for a subtle 3D effect.
The display is styled with a dark background and light text for contrast, and it’s aligned to the right for a traditional calculator look.
Buttons are styled with a light background and border, with a hover effect to indicate interactivity. The clear button is styled differently for emphasis.
JavaScript:

An event listener is added to the document to ensure the script runs after the DOM is fully loaded.
It selects the display and all buttons using their class names.
An empty string displayValue is used to keep track of the current input and result.
For each button, an event listener is added to update displayValue based on the button clicked.
The clear button resets displayValue.
The equals button evaluates the expression in displayValue using eval(). If there’s an error in the expression, it displays "Error".
The display is updated with the current displayValue after each button press.
This combination creates a functional and visually appealing calculator that can perform basic arithmetic operations, clear the display, and handle errors gracefully.
