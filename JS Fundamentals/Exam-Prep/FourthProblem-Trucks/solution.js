function solve() {
    let tires = [];
    let trucks = {};
    let buttons = document.getElementsByTagName('button');

    buttons[0].addEventListener('click', addNewTruck);
    buttons[1].addEventListener('click', addNewTires);
    buttons[2].addEventListener('click', goToWork);
    buttons[3].addEventListener('click', endOfTheShift);

    let fieldsetTires = document.querySelectorAll('fieldset')[3];
    let fieldsetTrucks = document.querySelectorAll('fieldset')[4];

    function addNewTruck() {
        let plateNumber = document.getElementById('newTruckPlateNumber').value;
        let tiresCondition = document.getElementById('newTruckTiresCondition').value.split(' ').filter(x => x !== '');

        if (!trucks.hasOwnProperty(plateNumber)) {
            trucks[plateNumber] = {
                'tires': tiresCondition,
                'distance': 0
            }

            let div = document.createElement('div');
            div.classList.add('truck');
            div.textContent = plateNumber;
            fieldsetTrucks.getElementsByTagName('div')[0].appendChild(div);
        }
    }

    function addNewTires() {
        let newTires = document.getElementById('newTiresCondition').value.split(' ').filter(x => x !== '');
        tires.push(newTires);

        let div = document.createElement('div');
        div.classList.add('tireSet');
        div.textContent = newTires.join(' ');
        fieldsetTires.getElementsByTagName('div')[0].appendChild(div);
    }

    function goToWork() {
        let plateNumber = document.getElementById('workPlateNumber').value;
        let distance = Number(document.getElementById('distance').value);
        let reduce = Math.ceil(distance / 1000);

        if (trucks.hasOwnProperty(plateNumber)) {
            let truckTires = trucks[plateNumber].tires;
            let minTire = findMinTire(truckTires);

            if (minTire - reduce >= 0) {
                trucks[plateNumber].distance += distance;
                trucks[plateNumber].tires = reduceTires(truckTires, reduce);
            } else {
                if (tires.length > 0) {
                    for (let i = 0; i < tires.length; i++) {
                        let minTire = findMinTire(tires[i]);
                        if (minTire - reduce >= 0) {
                            trucks[plateNumber].distance += distance;
                            trucks[plateNumber].tires = reduceTires(tires[i], reduce);
                            removeBackupTires(tires[i]);
                            tires.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        }

    }

    function endOfTheShift() {
        let output = document.getElementsByTagName('textarea')[0];
        output.value = '';

        Object.keys(trucks).forEach(x => {
            output.value += `Truck ${x} has traveled ${trucks[x].distance}.\n`;
        });

        output.value += `You have ${tires.length} sets of tires left.\n`;
    }

    function removeBackupTires(backupTires) {
        let divs = fieldsetTires.querySelector('div');
        let children = divs.children;

        for (let i = 0; i < children.length; i++) {
            if (children[i].textContent === backupTires.join(' ')) {
                divs.removeChild(children[i]);
                break;
            }
        }
    }

    function reduceTires(truckTires, reduce) {
        let tires = [];
        for (let tire of truckTires) {
            tires.push(Number(tire) - reduce);
        }

        return tires;
    }

    function findMinTire(truckTires) {
        let minTire = truckTires.reduce(function (a, b) {
            return Math.min(a, b);
        });

        return minTire;
    }
}