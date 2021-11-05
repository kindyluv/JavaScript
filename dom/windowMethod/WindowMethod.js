//WINDOW METHODS / OBJECTS / PROPERTIES

//Alert
 window.alert('Control your temper issue madam please');
const input = prompt();
alert(input);

//Confirm
if(confirm('Are you sure')){
    console.log('Yes');
}else {
    console.log('No')
}

let val
//Outer height and width
val = window.outerHeight;
val = window.outerWidth;

//inner height and width
val = window.innerHeight;
val = window.innerWidth;

console.log(val);

//scroll points
val = window.scrollX;

console.log(val)

//Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

console.log(val);