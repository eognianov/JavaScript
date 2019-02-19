function sum(arr) {
    if (arr.some(isNaN))
        throw new Error("Input must be array of numbers!");
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}


module.exports = sum;