
let day;
switch (day) {
    case 1:
        day = 'Monday'; break
    case 2:
        day = 'Tuesday'; break
    case 3:
        day = 'Wednesday'; break
    case 4:
        day = 'Thursday'; break
    case 5:
        day = 'Friday'; break
    case 6:
        day = 'Saturday'; break
    case 7:
        day = 'Sunday'; break
    default:
        day= ("Enter the day you want");
}

switch (new Date().getDay()) {
    case 1:
        day = 'Monday'; break;
    case 2:
        day = 'Tuesday'; break;
    case 3:
        day = 'Wednesday'; break;
    case 4:
        day = 'Thursday'; break;
    case 5:
        day = 'Friday'; break;
    case 6:
        day = 'Saturday'; break;
    case 7:
        day = 'Sunday'; break;
    default:
         day= ("Enter the day you want");
}
const  days = new Date();
days.getUTCDay();
console.log(`Today is ${day} \n ${days}`);
