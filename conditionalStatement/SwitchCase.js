let day;
switch (day) {
    case 0:
        day = 'Monday'; break
    case 1:
        day = 'Tuesday'; break
    case 2:
        day = 'Wednesday'; break
    case 3:
        day = 'Thursday'; break
    case 4:
        day = 'Friday'; break
    case 5:
        day = 'Saturday'; break
    case 6:
        day = 'Sunday'; break
    default:
        day= ("Enter the day you want");
}

switch (new Date().getDay()) {
    case 0:
        day = 'Monday'; break;
    case 1:
        day = 'Tuesday'; break;
    case 2:
        day = 'Wednesday'; break;
    case 3:
        day = 'Thursday'; break;
    case 4:
        day = 'Friday'; break;
    case 5:
        day = 'Saturday'; break;
    case 6:
        day = 'Sunday'; break;
    default:
         day= ("Enter the day you want");
}
console.log(`Today is ${day}`)
