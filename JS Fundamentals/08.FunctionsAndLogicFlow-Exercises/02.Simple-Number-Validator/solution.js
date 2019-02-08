function validate() {
    let button = document.querySelector('button');

    button.addEventListener('click', function () {
        let inputNumber = document.querySelector('input').value;
        let sum = sumNumbers(inputNumber);
        let isValid = checkIsValidSum(sum, inputNumber);

        let result = document.getElementById('response');
        if (isValid) {
            result.textContent = 'This number is Valid!';
        } else {
            result.textContent = 'This number is NOT Valid!';
        }
    });

    function sumNumbers(inputNumber) {
        let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
        let sum = 0;

        for (let i = 0; i < inputNumber.length - 1; i++) {
            sum += Number(inputNumber[i] * weights[i]);
        }

        return sum;
    }

    function checkIsValidSum(sum, inputNumber) {
        let lastDigit = inputNumber[inputNumber.length - 1];
        let remainder = `${sum % 11}`;
        let remainderLastDigit = remainder[remainder.length - 1];

        return remainderLastDigit === lastDigit ? true : false;
    }
}