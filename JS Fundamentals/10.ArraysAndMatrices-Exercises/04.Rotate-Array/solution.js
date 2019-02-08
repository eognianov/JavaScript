function solve(array) {
    let rotate = Number(array.pop());
    rotate %= array.length;

    for (let i = 0; i < rotate; i++) {
        let lastElement = array.pop();  
        array.unshift(lastElement);      
    }

    console.log(array.join(' '));
}

solve(['1', '2', '3', '4', '2']);
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);