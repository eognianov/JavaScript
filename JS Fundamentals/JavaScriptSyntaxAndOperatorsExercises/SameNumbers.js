function main(number) {
    let isSame = true;
    let sum = 0;
    let str = `${number}`;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[0]) {
            isSame = false;
        }

        sum += Number(str[i]);
    }

    console.log(isSame);
    console.log(sum);
}

main(2222222);
main(12345);