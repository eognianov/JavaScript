function solve() {
  function findUniqueChars(str) {
    let uniqueChars = '';

    for (const char of str) {
      if (!uniqueChars.includes(char)) {
        uniqueChars += char;
      }
    }

    result.textContent = uniqueChars;
  }

  let str = document.getElementById('string').value;
  let result = document.getElementById('result');

  findUniqueChars(str);
}