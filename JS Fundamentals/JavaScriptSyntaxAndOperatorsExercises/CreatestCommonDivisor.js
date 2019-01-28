function main(firstNum, secondNum) {
    let maxNum = Math.max(firstNum, secondNum);
    let minNum = Math.min(firstNum, secondNum);

    let result = 0;

    for (let i = minNum; i >= 1; i--) {
        if (maxNum % i === 0 && minNum % i === 0) {
            result = i;
            break;
        }
    }

    console.log(result);
}

main(15, 5);
main(2154, 458);