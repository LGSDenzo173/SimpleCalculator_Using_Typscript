"use strict";
// Function for Adding 2 number
function add(num1, num2) {
    return num1 + num2;
}
// Function for Subtracting 2 number
function sub(num1, num2) {
    return num1 - num2;
}
// Function for Multiply 2 number
function mul(num1, num2) {
    return num1 * num2;
}
//Function for divivding 2 number and also there's condition when someone enter 0 it will return reminder
function divide(num1, num2) {
    if (num2 === 0) {
        console.log(`Invalid number Entered "Enter Correct number" `);
    }
    else {
        console.log(`Good to goo`);
    }
    return num1 / num2;
}
//Fuction for Calculation
function Calculator(Operator, num1, num2) {
    let resuult;
    if (Operator === '+') {
        resuult = num1 + num2;
    }
    else if (Operator === '-') {
        resuult = num1 - num2;
    }
    else if (Operator === '/') {
        resuult = num1 / num2;
    }
    else if (Operator === '*') {
        resuult = num1 * num2;
    }
    else {
        throw new Error(`Invalid Operator`);
    }
    return resuult;
}
console.log(Calculator('+', 10, 25)); //Adding Two Number's
console.log(Calculator('-', 10, 25)); //Subtracting Two Number's
console.log(Calculator('*', 10, 25)); //Multiply Two Number's
console.log(Calculator('/', 10, 25)); //Divide Two Number's
// console.log(Calculator('%', 10,25)) // When invalid Operator is used
