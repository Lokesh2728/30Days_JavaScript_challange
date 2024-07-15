
let year=2000
switch (true) {
    case year%4==0 && year%100!=0:
        console.log('leap year')
        break;
        case year%400==0:
            console.log('leap year')
            break;
            default:
                console.log('not leap year')
                break;
                }
