function main(array) {
    let type = array[0];
    let town = array[1];
    let time = array[2];
    let flight = array[3];
    let gate = array[4];

    console.log(`${type}: Destination - ${town}, Flight - ${flight}, Time - ${time}, Gate - ${gate}`);
}

main(['Departures', 'London', '22:45', 'BR117', '42']);
main(['Arrivals', 'Paris', '02:22', 'VD17', '3']);
