function solve() {
  function iterate(firstNumber, secondNumber, firstString, secondString, thirdString) {
    for (let i = firstNumber; i <= secondNumber; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        let p = document.createElement('p');
        p.textContent = `${i} ${firstString}-${secondString}-${thirdString}`;
        result.appendChild(p);
      } else if (i % 3 === 0){
        let p = document.createElement('p');
        p.textContent = `${i} ${secondString}`;
        result.appendChild(p);
      } else if (i % 5 === 0){
        let p = document.createElement('p');
        p.textContent = `${i} ${thirdString}`;
        result.appendChild(p);
      } else {
        let p = document.createElement('p');
        p.textContent = `${i}`;
        result.appendChild(p);
      }
    }
  }

  let firstNumber = Number(document.getElementById('firstNumber').value);
  let secondNumber = Number(document.getElementById('secondNumber').value);
  let firstString = document.getElementById('firstString').value;
  let secondString = document.getElementById('secondString').value;
  let thirdString = document.getElementById('thirdString').value;
  let result = document.getElementById('result');

  iterate(firstNumber, secondNumber, firstString, secondString, thirdString);
}