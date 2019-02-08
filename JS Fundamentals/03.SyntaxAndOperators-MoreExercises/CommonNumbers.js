function main(arr1, arr2, arr3) {
    let arr = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            for (let k = 0; k < arr3.length; k++) {
                if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
                    arr.push(arr3[k]);
                }
            }
        }
    }

    arr = arr.sort();
    let sum = arr.reduce(function (a, b) { return a + b; });
    let average = sum / arr.length;
    let median = arr[(arr.length - 1) / 2];
    if (arr.length % 2 === 0) {
        median = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2
    }

    console.log(`The common elements are ${arr.join(', ')}.`);
    console.log(`Average: ${average}.`);
    console.log(`Median: ${median}.`);
}

main([5, 6, 50, 10, 1, 2], [5, 4, 8, 50, 2, 10], [5, 2, 50]);
main([1, 2, 3, 4, 5], [3, 2, 1, 5, 8], [2, 5, 3, 1, 16]);