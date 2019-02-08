function leapYear() {
    let button = document.querySelector('div button');
    let yearElement = document.querySelector('div input');

    button.addEventListener('click', function () {
        let year = yearElement.value;
        let divElement = document.getElementById('year');
        let div = divElement.querySelector('div');
        let h = divElement.querySelector('h2');
        div.textContent = year;

        if (year % 400 === 0) {
            h.textContent = "Leap Year";
        } else if (year % 100 === 0) {
            h.textContent = "Leap Year";
        } else if (year % 4 === 0) {
            h.textContent = "Leap Year";
        } else {
            h.textContent = "Not Leap Year";
        }

        document.querySelector('div input').value = '';
    });
}