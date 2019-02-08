function main(array, workouts) {
    let gender = array[0];
    let calories = 0;

    if (gender === 'm') {
        calories = 66 + 13.8 * array[1] + 5 * array[2] - 6.8 * array[3];
    }
    else {
        calories = 655 + 9.7 * array[1] + 1.85 * array[2] - 4.7 * array[3];
    }

    let activeFactor = 1.2;
    if (workouts >= 1 && workouts <= 2) {
        activeFactor = 1.375
    }
    else if (workouts >= 3 && workouts <= 5) {
        activeFactor = 1.55
    }
    else if (workouts >= 6 && workouts <= 7) {
        activeFactor = 1.725
    }
    else if ( workouts > 7) {
        activeFactor = 1.90
    }

    let caloriesIntake = activeFactor * calories;

    console.log(`${Math.round(caloriesIntake)}`);    
}

main(['f', 46, 157, 32], 5);
main(['m', 86, 185, 25], 3);