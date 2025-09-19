const calculatorBtn = document.getElementById('calculatorButton');

const numberInput1 = document.getElementById('numberInput1');
const numberInput2 = document.getElementById('numberInput2');
const resultDiv = document.getElementById('calculatorDiv');
const calculatorSelect = document.getElementById('calculatorSelect');



calculatorBtn.addEventListener('click', () => {
    
    const num1 = Number(numberInput1.value);
    const num2 = Number(numberInput2.value);


    const resultP = document.createElement('p');

    switch (calculatorSelect.value) {
        case '+': 
            resultP.textContent = `Result: ${num1 + num2}`;
            break;
        case '-':
            resultP.textContent = num1 >= num2 ? `Result: ${num1 - num2}` : `The second number must be less than or equal to the first number!`;
            break;
        case '*':
            resultP.textContent = `Result: ${num1 * num2}`;
            break;
        case '/':
            resultP.textContent = num2 !== 0 ? ( (num1 % num2) !== 0 ? `Result: ${(num1 / num2).toFixed(2)}` : `Result: ${num1 / num2}` ) : `Invalid operation!`;
            break;
        default:
            resultP.textContent = "Invalid operation!";
    }

    numberInput1.value = ""; // input - 1 cleared
    numberInput2.value = ""; // input - 2 cleared
    resultDiv.innerHTML = ''; // The previous result is cleared.
    resultDiv.appendChild(resultP); 
   
});

