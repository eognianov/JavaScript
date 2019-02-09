function solve() {
    let output = document.querySelector('div#output p');
    let buttons = document.getElementsByTagName('button');

    buttons[0].addEventListener('click', filter);
    buttons[1].addEventListener('click', sort);
    buttons[2].addEventListener('click', rotate);
    buttons[3].addEventListener('click', get);

    function filter() {
        let input = document.getElementById('input').value;
        let command = document.getElementById('filterSecondaryCmd').value;
        let position = Number(document.getElementById('filterPosition').value);

        let symbols = [];
        if (command === 'uppercase') {
            let pattern = /([A-Z])/g;
            while (match = pattern.exec(input)) {
                symbols.push(match[1]);
            }
        } else if (command === 'lowercase') {
            let pattern = /([a-z])/g;
            while (match = pattern.exec(input)) {
                symbols.push(match[1]);
            }
        } else if (command === 'nums') {
            let pattern = /(\d)/g;
            while (match = pattern.exec(input)) {
                symbols.push(match[1]);
            }
        }

        let char = symbols[position - 1];
        output.textContent += char;
    }

    function sort() {
        let input = document.getElementById('input').value;
        let command = document.getElementById('sortSecondaryCmd').value;
        let position = Number(document.getElementById('sortPosition').value);

        let symbols = [];
        if (command === 'A') {
            symbols = input.split('').sort();
        } else if (command === 'Z') {
            symbols = input.split('').sort().reverse();
        }

        let char = symbols[position - 1];
        output.textContent += char;
    }

    function rotate() {
        let input = document.getElementById('input').value;
        let command = document.getElementById('rotateSecondaryCmd').value;
        let position = Number(document.getElementById('rotatePosition').value);

        let rotation = Number(command) % input.length;
        let symbols = input.split('');

        for (let i = 0; i < rotation; i++) {
            let lastSymbol = symbols.pop();
            symbols.unshift(lastSymbol);
        }

        let char = symbols[position - 1];
        output.textContent += char;
    }

    function get() {
        let input = document.getElementById('input').value;
        let position = Number(document.getElementById('getPosition').value);

        let symbols = input.split('');
        let char = symbols[position - 1];
        output.textContent += char;
    }
}