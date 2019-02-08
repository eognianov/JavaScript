function main(text) {
    let arr = text.split(/[., ]+/);

    for (let item of arr) {
        let number = Number(item);
        if (number) {
            let numberString = `${number}`;
            if (numberString.endsWith('1')) {
                console.log(`${number}st`);                
            }
            else if (numberString.endsWith('2')) {
                console.log(`${number}nd`);                
            }
            else if (numberString.endsWith('3')) {
                console.log(`${number}rd`);                
            }
            else {
                console.log(`${number}th`);                
            }
        }
    }
}

main('The school has 256 students. In each class there are 26 chairs, 13 desks and 1 board.');
main('Yesterday I bought 12 pounds of peppers, 3 kilograms of carrots and 5 kilograms of tomatoes.');