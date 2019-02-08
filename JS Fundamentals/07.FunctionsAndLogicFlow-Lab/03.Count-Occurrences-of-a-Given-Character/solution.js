function solve() {
  function countOccurrences(str, char){
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }

    return count % 2 === 0 ? 'even' : 'odd';
  }

  function printResult(char, count) {
    result.textContent = `Count of ${char} is ${count}.`;
  }

  let str = document.getElementById('string').value;
  let char = document.getElementById('character').value;
  let result = document.getElementById('result');
  let count = countOccurrences(str, char);

  countOccurrences(str, char);
  printResult(char, count);
}