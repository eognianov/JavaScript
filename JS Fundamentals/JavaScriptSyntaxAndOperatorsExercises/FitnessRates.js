function calculate(day, service, hour) {
    let result;

    switch (day){
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            if(service === 'Fitness'){
                if(hour<=15){
                    result = 5;
                }
                else {
                    result = 7.5;
                }
            }

            else if (service === 'Sauna'){
                if(hour<=15){
                    result = 4;
                }
                else {
                    result = 6.5;
                }
            }

            else{
                if(hour<=15){
                    result = 10;
                }
                else {
                    result = 12.5;
                }
            }

            break;
        case 'Saturday':
        case 'Sunday':

            if(service === 'Fitness'){
                result = 8;
            }

            else if (service === 'Sauna'){
                result = 7;
            }

            else{
                result = 15;
            }

            break;
    }

    console.log(result);
}

calculate('Sunday', 'Fitness', 15.30);