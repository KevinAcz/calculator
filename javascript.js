let currentNumber = '';
let firstNumber = '';
let secondNumber = '';
let operator = '';

function add(x,y) {
    return x + y;
}
function subtract(x,y) {
    return x - y;
}
function multiply(x,y) {
    return x * y;
}
function divide(x,y) {
    return x / y;
}
function operate(x, y, operator) {
    if (operator === '+') {
        return (add(x,y));
    }
    if (operator === '-') {
        return (subtract(x,y));
    }
    if (operator === '*') {
        return (multiply(x,y));
    }
    if (operator === 'x') {
        return ( divide(x,y));
    }
}
const display = document.querySelector('#display');
const buttons = document.querySelectorAll(".buttons-container button");
console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {

        console.log(e.target);
        //if button is CLEAR
        if (button.textContent === 'Clear') {
            display.textContent = 'Display';
            currentNumber = '';
            firstNumber = '';
            secondNumber = '';
        } 

        //IF button is an operator,
        else if (isNaN(Number(button.textContent)) && operator !== '=') {

            let result = 0;
            
            operator = button.textContent;


            if (firstNumber === '') {
                firstNumber = currentNumber;
            } else if (secondNumber === ''){ 
                secondNumber = currentNumber;
            }

            //IF both numbers exists, we can operate:
            if (firstNumber !== '' && secondNumber !== '') {
            
            if (operator !== '') {
                result = operate(+firstNumber,+secondNumber, operator);
            }      
            operator = '';

            display.textContent = result;

            firstNumber = result;
            secondNumber = '';
            }
            currentNumber = '';

        } else { //if Button is a number
            currentNumber += button.textContent;
            display.textContent = currentNumber;
        }

        console.log(currentNumber);
    })
});