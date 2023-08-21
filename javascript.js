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
    if (operator === 'x') {
        return (multiply(x,y));
    }
    if (operator === '/') {
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
        else if (isNaN(Number(button.textContent)) && button.textContent !== '=') {
            operator = button.textContent;
            if (firstNumber === '') {
                firstNumber = currentNumber;
                console.log('primer numero guardado')
                
            }
            currentNumber = '';

            // firstNumber = result;
            // secondNumber = '';
            // }
            // currentNumber = '';

        } else if (button.textContent === '=') {
            console.log('im here!');

            //asigns second numbers
            if (secondNumber === ''){ 
            secondNumber = currentNumber;
            console.log('segundo numero guardado')
            };
            
            //IF both numbers exists, we can operate:
            if (firstNumber !== '' && secondNumber !== '') {
                result = operate(+firstNumber,+secondNumber, operator);
                display.textContent = result;

                } else {
                    display.textContent = 'Need two numbers and an operator.';
                    console.log('firstNumber: ' +firstNumber+' secondNumber: ' +secondNumber+ ' operator: '+ operator);
                }

            } else {   

            currentNumber += button.textContent;
            display.textContent = currentNumber;
        }

        console.log(currentNumber);
    })
});