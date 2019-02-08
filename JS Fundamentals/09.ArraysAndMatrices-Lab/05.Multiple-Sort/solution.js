function solve() {
  let array = JSON.parse(document.getElementById('arr').value);
  let numberArray = array.map(x => Number(x)).sort((a, b) => a - b);
  let stringArray = array.sort((a, b) => a.localeCompare(b));

  let firstDivElement = document.createElement('div');
  firstDivElement.textContent = numberArray.join(', ');
  let secondDivElement = document.createElement('div');
  secondDivElement.textContent = stringArray.join(', ');
  
  let resultElement = document.getElementById('result');
  resultElement.appendChild(firstDivElement);
  resultElement.appendChild(secondDivElement);
}