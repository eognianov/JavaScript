function solve() {
  function calculateTemparature(number, type) {
    if (type === 'celsius') {
      temperature = ((number * 9) / 5) + 32;
      isValidType = true;
    } else if (type === 'fahrenheit') {
      temperature = ((number - 32) * 5) / 9;
      isValidType = true;
    }
  }

  function printResult(temperature, isValidType){
    if (isValidType) {
      result.textContent = Math.round(temperature);
    } else {
      result.textContent = 'Error!';
    }
  }

  let number = Number(document.getElementById('num1').value);
  let type = document.getElementById('type').value.toLowerCase();
  let result = document.getElementById('result');
  let isValidType = false;
  let temperature = '';

  calculateTemparature(number, type);
  printResult(temperature, isValidType);
}