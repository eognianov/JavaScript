function main(array) {
    let obj = {};
    for (let i = 0; i < array.length - 1; i += 2) {
        let food = array[i];
        let calories = Number(array[i + 1]);
        obj[`${food}`] = calories;
    }

    console.log(obj);
}

main(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);
main(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);