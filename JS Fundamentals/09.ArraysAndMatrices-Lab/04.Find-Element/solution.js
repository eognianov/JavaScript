function solve() {
  let searchedElement = Number(document.getElementById('num').value);
  let array = JSON.parse(document.getElementById('arr').value);
  let result = [];

  findElement(searchedElement, array);
  document.getElementById('result').textContent = result.join(',');

  function findElement(searchedElement, array) {
    for (let item of array) {
      if (item.includes(searchedElement)) {
        result.push(`true -> ${item.indexOf(searchedElement)}`);
      } else {
        result.push(`false -> ${item.indexOf(searchedElement)}`)
      }
    }
  }
}