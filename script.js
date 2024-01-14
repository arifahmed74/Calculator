document.getElementById('addButton').addEventListener('click', function () {
    performOperation('addResult', '+');
});

document.getElementById('subtractButton').addEventListener('click', function () {
    performOperation('subtractResult', '-');
});

document.getElementById('multiplyButton').addEventListener('click', function () {
    performOperation('multiplyResult', '*');
});

document.getElementById('divideButton').addEventListener('click', function () {
    performOperation('divideResult', '/');
});

function performOperation(resultId, operator) {
    const userInput = parseFloat(document.getElementById('userInput').value);
    const resultElement = document.getElementById(resultId);

    if (isNaN(userInput)) {
        resultElement.textContent = 'Invalid input';
        return;
    }

    switch (operator) {
        case '+':
            resultElement.textContent = `Result: ${userInput + 1}`;
            break;
        case '-':
            resultElement.textContent = `Result: ${userInput - 1}`;
            break;
        case '*':
            resultElement.textContent = `Result: ${userInput * 2}`;
            break;
        case '/':
            resultElement.textContent = `Result: ${userInput / 2}`;
            break;
        default:
            resultElement.textContent = 'Invalid operation';
    }
}
