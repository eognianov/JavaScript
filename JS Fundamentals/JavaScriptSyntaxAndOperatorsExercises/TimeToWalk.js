function main(steps, length, speed) {
    let distance = steps * length;
    let rests = Math.floor(distance / 500) * 60;
    let timeInSeconds = distance / (speed * 1000 / 3600) + rests;

    let hours = Math.floor(timeInSeconds / 3600);
    timeInSeconds %= 3600;
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = Math.round(timeInSeconds % 60);

    if (hours < 10) {
        hours = `0${hours}`
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    if (seconds < 10) {
        seconds = `0${seconds}`
    }

    console.log(`${hours}:${minutes}:${seconds}`);    
}

main(4000, 0.60, 5);
main(2564, 0.70, 5.5);