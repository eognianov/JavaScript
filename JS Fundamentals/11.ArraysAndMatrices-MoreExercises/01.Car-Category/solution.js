function solve() {
  let dict = fillDictionary();
  let array = JSON.parse(document.getElementById('arr').value);

  for (let str of array) {
    if (/^BA\s*\d{3}\s*\d{3}$/.test(str)) {
      dict[0][1]++;
    } else if (/^CP\s*\d{2}\s*\d{3}$/.test(str)) {
      dict[1][1]++;
    } else if (/^(C|CT)\s*\d{4}$/.test(str)) {
      dict[2][1]++;
    } else if (/^XX\s*\d{4}$/.test(str)) {
      dict[3][1]++;
    } else if (/^\d{3}\s*[A-Z]{1}\s*\d{3}$/.test(str)) {
      dict[4][1]++;
    } else if (/^((C|CB)|CA){1,2}\s*\d{4}\s*[A-Z]{1,2}$/.test(str)) {
      dict[5][1]++;
    } else if (/^[ABDEFGHIJKLMNOPQRSTUVWXYZ]{1,2}\s*\d{4}\s*[A-Z]{1,2}$/.test(str)) {
      dict[6][1]++;
    } else {
      dict[7][1]++;
    }
  }

  dict.sort((a, b) => b[1] - a[1] ||  a[0].localeCompare(b[0]));
  //dict.sort((a, b) => a[0].localeCompare(b[0]));

  let result = document.getElementById('result');
  for (let item of dict) {
    let pElement = document.createElement('p');
    pElement.textContent = `${item[0]} -> ${item[1]}`;
    result.appendChild(pElement);
  }

  function fillDictionary() {
    let dict = [];
    dict.push(['BulgarianArmy', 0]);
    dict.push(['CivilProtection', 0]);
    dict.push(['Diplomatic', 0]);
    dict.push(['Foreigners', 0]);
    dict.push(['Transient', 0]);
    dict.push(['Sofia', 0]);
    dict.push(['Province', 0]);
    dict.push(['Other', 0]);

    return dict;
  }
}