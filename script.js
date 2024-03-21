function createCalculator() {
    // Accessing the DOM to find an element with the ID 'calculator'
    const calculatorDiv = document.getElementById('calculator');

    // Creating two input elements for user to enter numbers
    const input1 = document.createElement('input');
    input1.type = 'number'; // Setting the type to 'number' to ensure numeric input
    const input2 = document.createElement('input');
    input2.type = 'number'; // Ensuring the second input also accepts only numeric input

    // Creating a button for addition
    const addButton = document.createElement('button');
    addButton.textContent = '+'; // Setting button text to '+'
    // Defining an onclick event for the add button to perform addition
    addButton.onclick = () => calculateAndDisplayResult('add');

    // Creating a button for subtraction
    const subtractButton = document.createElement('button');
    subtractButton.textContent = '-'; // Setting button text to '-'
    // Defining an onclick event for the subtract button to perform subtraction
    subtractButton.onclick = () => calculateAndDisplayResult('subtract');

    // Creating a div element to display the result
    const resultDisplay = document.createElement('div');
    resultDisplay.id = 'result'; // Assigning an ID for easy access

    // Adding the created elements to the calculatorDiv element in the DOM
    calculatorDiv.appendChild(input1);
    calculatorDiv.appendChild(input2);
    calculatorDiv.appendChild(addButton);
    calculatorDiv.appendChild(subtractButton);
    calculatorDiv.appendChild(resultDisplay);

    // Function to calculate and display the result based on the operation
    function calculateAndDisplayResult(operation) {
        // Parsing input values as floats for arithmetic operations
        const num1 = parseFloat(input1.value);
        const num2 = parseFloat(input2.value);
        let result;
        // Checking the operation type and performing the respective arithmetic operation
        if (operation === 'add') {
            result = num1 + num2; // Addition operation
        } else if (operation === 'subtract') {
            result = num1 - num2; // Subtraction operation
        }
        // Displaying the result in the resultDisplay element
        resultDisplay.textContent = 'Result: ' + result;
    }
}

// Calling the createCalculator function to set up the calculator on the web page
createCalculator();
