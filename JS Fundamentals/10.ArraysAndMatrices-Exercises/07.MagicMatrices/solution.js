function solve(matrix) {
    let isMagic = true;
    let sum = sumRow(matrix[0]);

    for (let row = 0; row < matrix.length; row++) {
        let rowSum = sumRow(matrix[row]);
        if (rowSum !== sum) {
            isMagic = false;
            break;
        }
    }

    if (isMagic !== false) {
        for (let col = 0; col < matrix[0].length; col++) {
            let colSum = 0;
            for (let row = 0; row < matrix.length; row++) {
                colSum += matrix[row][col];
            }
            if (colSum !== sum) {
                isMagic = false;
                break;
            }
        }
    }

    console.log(isMagic);

    function sumRow(array) {
        let sum = array.reduce((a, b) => a + b);
        return sum;
    }
}

solve([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
solve([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
solve([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);