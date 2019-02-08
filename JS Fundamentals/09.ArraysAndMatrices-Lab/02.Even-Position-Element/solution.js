function solve() {
  let array = JSON.parse(document.getElementById('arr').value).map(x => parseInt(x, 10));
  let result = [];

  for (let index in array) {
    if (index % 2 === 0) {
      result.push(array[index]);
    }
  }

  document.getElementById('result').textContent = result.join(' x ');
}