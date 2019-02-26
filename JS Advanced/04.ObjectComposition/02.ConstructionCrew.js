function solve(input) {
    if (input.handsShaking === true) {
        let requiredAmount = 0.1 * Number(input.weight)*Number(input.experience);
        input.bloodAlcoholLevel+=requiredAmount;
        input.handsShaking = false;
    }

    return input;
}

let result = solve({
	weight: 80,
	experience: 1,
	bloodAlcoholLevel: 0,
	handsShaking: true
});

console.log(result);
