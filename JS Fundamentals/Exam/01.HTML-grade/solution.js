function solve(examPoints, homeworkCompleted, totalHomework) {
    if (examPoints === 400) {
        console.log('6.00');
        return;
    } else {
        let points = (examPoints / 400) * 100;
        let pointsPercent = points * 0.9;
        let homeworkPercent = homeworkCompleted / totalHomework;
        let homeworkPoints = 10 * homeworkPercent;
        let totalPoints = pointsPercent + homeworkPoints;
        let grade = 3 + 2 * (totalPoints - 100 / 5) / (100 / 2);

        if (grade < 3) {
            console.log('2.00');
        } else if (grade > 6) {
            console.log('6.00');
        } else {
            console.log(grade.toFixed(2));
        }
    }
}

solve(300, 10, 10);
solve(200, 5, 5);