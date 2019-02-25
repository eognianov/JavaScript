function solve(inputArray, searchTerm) {
    let tickets = [];
    let ticketsRaw = Array.from(inputArray);

    ticketsRaw.forEach((v,i)=>{
        let currentTicket = v.split('|');
        let destination = currentTicket[0];
        let price = +currentTicket[1];
        let status = currentTicket[2];
        let ticket = {
            destination,
            price,
            status
        };
        tickets.push(ticket);
    });

    switch (searchTerm) {
        case 'destination': return tickets.sort((a, b) => a.destination.localeCompare(b.destination));
        case 'price': return tickets.sort((a, b) => a.price - b.price);
        case 'status': return tickets.sort((a, b) => a.status.localeCompare(b.status));
    }
    
}

let result = solve(
	[
		'Philadelphia|94.20|available',
		'New York City|95.99|available',
		'New York City|95.99|sold',
		'Boston|126.20|departed'
	],
	'destination'
);

console.log(result);
