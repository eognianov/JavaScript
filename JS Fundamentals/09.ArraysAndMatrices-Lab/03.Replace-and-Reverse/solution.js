function solve() {
  let input = JSON.parse(document.getElementById('arr').value);
  let result = [];

  reverseInput(input);
  document.getElementById('result').textContent = result.join(' ');

  function reverseInput(input) {
    for (let item of input) {
      let word = item.split('').reverse();
      let letter = word.shift().toUpperCase();
      word.unshift(letter);
      word = word.join('');

      result.push(word);
    }
  }
}