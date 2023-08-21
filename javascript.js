let currentNumber = '';
let firstNumber = '';
let secondNumber = '';
let operator = '';
//TODO: Check display div overflows
//TODO: Check weird bugs
function add(x,y) {
    return (x) + (y);
}
function subtract(x,y) {
    return (x) - (y);
}
function multiply(x,y) {
    return (x) * (y);
}
function divide(x,y) {
    return (x) / (y);
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
        if (button.textContent === 'AC') {
            display.textContent = '0';
            currentNumber = '';
            firstNumber = '';
            secondNumber = '';
        } 
        //IF button is an operator
        else if (isNaN(Number(button.textContent)) && button.textContent !== '=' && button.textContent !== '.' && button.textContent !== '±' && button.textContent !== '%') {
            console.log('firstNumber: ' +firstNumber+' secondNumber: ' +secondNumber+ ' operator: '+ operator);
            if (firstNumber === '') {
                firstNumber = currentNumber;
                console.log('primer numero guardado')
                
            }
            else if (secondNumber === '') {
                secondNumber = currentNumber;
            }
            //IF both numbers exists, we can operate
            if (firstNumber !== '' && secondNumber !== '') {
                result = operate(+firstNumber,+secondNumber, operator);
                console.log('firstNUmber: ' + firstNumber, 'secondNumber '+secondNumber)
                if (firstNumber.includes('.') || secondNumber.includes('.')) {
                    result = Math.round(result * 100) / 100;
                }
                if (toString(result).length > 7) {
                    display.textContent = result.substring(0,7);
                } else {
                display.textContent = result;
                }
                firstNumber = result;
                secondNumber = '';
            }
            operator = button.textContent;
            currentNumber = '';

        } else if (button.textContent === '=') {

            //asigns second number
            if (secondNumber === ''){ 
                secondNumber = currentNumber;
            };
            
            //IF both numbers exists, we can operate:
            if (firstNumber !== '' && secondNumber !== '') {
                result = operate(+firstNumber,+secondNumber, operator);
                //if result is a decimal, round it:
                resultStr = result.toString();
                if (resultStr.includes('.')) {
                    result = Math.round(result * 1000) / 1000;
                }
                //if result is a division by 0, print error:
                if (result === Infinity) {
                    result = 'bruh';
                }
                display.textContent = result;
                firstNumber = result;
                secondNumber = '';
                currentNumber = '';

                } else {
                    if (firstNumber === '') {
                        console.log('currentnumber: '+currentNumber);

                        firstNumber = currentNumber;
                        secondNumber = '';
                        display.textContent = firstNumber;
                        if (currentNumber === '') {
                            display.textContent = '0';
                        }
                        currentNumber = '';
                    }
                }

            } else if (button.textContent === '±') {
                display.textContent = (+display.textContent) * (-1);
                currentNumber = display.textContent;
            }else if (button.textContent === '%'){
                display.textContent = (+display.textContent) / 100;
                currentNumber = display.textContent;


            } else {   //if its a number, append the button
            
            if (currentNumber.includes('.')) {
                if (button.textContent !== '.') {
                    currentNumber +=button.textContent;
                }
            } else {
                currentNumber +=button.textContent;
            }

            if (currentNumber.length > 7) {
                display.textContent = currentNumber.substring(0,7);
            } else {
            display.textContent = currentNumber;
            }
        }

        console.log(currentNumber);
    })
});