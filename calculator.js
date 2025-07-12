//@ts-ignore
const prompt = require("prompt-sync")();

function showMenu() {
    console.log("\n=====SIMPLE CALCULATOR=====");
    console.log("1. Perform a calculation");
    console.log("2. exit");
}

function performCalculation() {
    let continueCalculating = true;
    
    while (continueCalculating) {
    const firstInput = prompt("Enter the first number: ");
    const firstNumber = parseFloat(firstInput);

    const operator = prompt("Choose operator (+, -, *, /): ");

    const secondInput = prompt("Enter the second number: ");
    const secondNumber = parseFloat(secondInput);

    let result;

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        console.log("Invalid number input. Please enter valid numbers.");
        return;
    }

    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            if (secondNumber === 0) {
                console.log("Error: Cannot divide by zero.");
                return;
            }
            result = firstNumber / secondNumber
            break;
        default:
            console.log("Invalid operator. Please use (+, -, *, or /).");
            return;    
    }
        console.log(`Result: ${firstNumber} ${operator} ${secondNumber} = ${result}`);

        const again = prompt("Do you want to perform another calculation? (yes/no): ").toLowerCase();
        if (again !== "yes") {
            continueCalculating = false;
        }
    }            
 }

let keepRunning = true;

while (keepRunning) {
    showMenu()

    const choice = prompt("Choose an option (1 or 2): ");
    
    if (choice === "1") {
        performCalculation();
    } else if (choice === "2") {
        console.log("Goodbye!");
        keepRunning = false;
    } else {
        console.log("Invalid choice. Please select 1 or 2.");
    }
}
