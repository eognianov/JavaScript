function solve() {
  function isValidInput(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
      result.textContent = 'Try with other numbers.';
    }
  }

  function printResult(firstNumber, secondNumber) {
    for (let i = firstNumber; i <= secondNumber; i++) {
      let divElement = document.createElement('p');
      divElement.innerHTML = `${i} * ${secondNumber} = ${secondNumber * i}`;
      result.appendChild(divElement);
    }
  }

  let firstNumber = Number(document.getElementById('num1').value);
  let secondNumber = Number(document.getElementById('num2').value);
  let result = document.getElementById('result');

  isValidInput(firstNumber, secondNumber);
  printResult(firstNumber, secondNumber);
}