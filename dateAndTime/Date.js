let val;

const today = new Date();
let dob = new Date();

val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getMonth();
val = today.getHours();
val = today.getMinutes();
val = today.getMilliseconds();
val = today.getSeconds();
val = today.getTime();
val = today.getTimezoneOffset();

dob.setFullYear(1990);
dob.setMonth(10);
dob.setDate(1)
dob.setHours(12,0, 0);
// val = dob;
console.log(dob)