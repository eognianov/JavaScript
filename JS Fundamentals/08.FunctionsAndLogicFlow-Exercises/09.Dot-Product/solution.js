function solve() {
    let firstInput = document.getElementById('mat1');
    let secondInput = document.getElementById('mat2');
    let resultElement = document.getElementById('result');

    let firstMatrix = JSON.parse(firstInput.value);
    let secondMatrix = JSON.parse(secondInput.value);

    for (let i = 0; i < firstMatrix.length; i++) {
        let sum = 0;
        for (let j = 0; j < secondMatrix.length; j++) {
            sum += multiplyArray(firstMatrix[i], secondMatrix[j]);

            if (j !== secondMatrix.length - 1) {
                sum += ', ';
            }
        }

        let pElement = document.createElement('p');
        pElement.textContent = sum;
        resultElement.appendChild(pElement);
    }

    function multiplyArray(firstArray, secondArray) {
        let sum = 0;
        if (firstArray.length === secondArray.length) {
            for (let i = 0; i < firstArray.length; i++) {
                sum += firstArray[i] * secondArray[i];                
            }
        }    

        return sum;
    }
}