function solve(matrix, filterInput) {
    let filterParts = filterInput.split(' ').filter(x => x !== '');
    let command = filterParts[0];

    switch (command) {
        case 'hide':
            getHide(matrix, filterParts);
            break;
        case 'sort':
            getSort(matrix, filterParts);
            break;
        case 'filter':
            getFilter(matrix, filterParts);
            break;
    }

    function getSort(matrix, filterParts) {
        let header = filterParts[1];
        let tableHeader = matrix[0];
        let indexOfHeader = matrix[0].indexOf(header);
        console.log(tableHeader.join(' | '));

        let newArray = [];
        for (let i = 1; i < matrix.length; i++) {
            newArray.push(matrix[i]);
        }

        newArray.sort((a, b) => {
            if (a[indexOfHeader] === b[indexOfHeader]) {
                return 0;
            }
            else {
                return (a[indexOfHeader] < b[indexOfHeader]) ? -1 : 1;
            }
        });

        for (let i = 0; i < newArray.length; i++) {
            console.log(newArray[i].join(' | '));            
        }
    }

    function getHide(matrix, filterParts) {
        let header = filterParts[1];
        let tableHeader = matrix[0];
        let indexOfHeader = matrix[0].indexOf(header);
        let newTableHeader = [];
        for (let i = 0; i < tableHeader.length; i++) {
            if (i !== indexOfHeader) {
                newTableHeader.push(tableHeader[i]);
            } 
        }

        console.log(newTableHeader.join(' | '));

        for (let i = 1; i < matrix.length; i++) {
            let newArray = [];
            let array = matrix[i];
            for (let j = 0; j < array.length; j++) {
                if (j !== indexOfHeader) {
                    newArray.push(array[j]);
                }                
            }

            console.log(newArray.join(' | '));
        }
    }

    function getFilter(matrix, filterParts) {
        let header = filterParts[1];
        let value = filterParts[2];
        let tableHeader = matrix[0];
        let indexOfHeader = matrix[0].indexOf(header);
        console.log(tableHeader.join(' | '));

        for (let i = 1; i < matrix.length; i++) {
            let array = matrix[i];
            for (let j = 0; j < array.length; j++) {
                if (j === indexOfHeader) {
                    if (array[j] === value) {
                        console.log(array.join(' | '));
                    }
                }
            }
        }
    }
}

solve([['name', 'age', 'grade'], ['Peter', '25', '5.00'], ['George', '34', '6.00'], ['Marry', '28', '5.49']], 'sort name');
solve([['firstName', 'age', 'grade', 'course'], ['Peter', '25', '5.00', 'JS-Core'], ['George', '34', '6.00', 'Tech'], ['Marry', '28', '5.49', 'Ruby']], 'filter firstName Marry');
solve([['firstName', 'age', 'grade', 'course'], ['Peter', '25', '5.00', 'JS-Core'], ['George', '34', '6.00', 'Tech'], ['Marry', '28', '5.49', 'Ruby']], 'hide age');