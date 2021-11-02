let val;
val = Math.random();
val = Math.floor(Math.random()*10)

const firstName = 'Lois';
const lastName = 'John';
const age = (Math.random()*100);
Math.ceil(age);

val = firstName + ' ' + lastName + '\n i am ' + age + ' years old';
val = firstName.indexOf('i');
val = firstName.charAt(firstName.length-1);
val = firstName.substring(0, 4);
val = lastName.slice(0, 2)
console.log(val);

//Template String

//without template Strings
 const name = 'Lois';
 const ageOld = 30;
 const job = 'Software Engineer';
 const city = 'Lagos';

 let html;
 html = '<div style="background-color: blueviolet">' +
     '<ul>'+
     '<li>Name:'+ ' ' +name +
     '</li>'+
     '<li>Age:'+ ' ' +ageOld +
     '</li>'+
     '<li>Job:'+ ' ' +job +
     '</li>'+
     '<li>City:'+ ' ' +city +
     '</li>'+
    '</ul>'+
     '</div>'

document.body.innerHTML = html;

 // with template String
html = `
<div class="row" style="text-align: justify-all; background-color: aquamarine" >
<div>
    <ul>
    <li>Name: ${name} $ ' '</li>    
    <li>Name: ${ageOld} $ ' '</li>    
    <li>Name: ${job} $ ' '</li>    
    <li>Name: ${city} $ ' '</li>    
</ul>
</div>
<div>
    <ul>
    <li>Name: ${name} $ ' '</li>    
    <li>Name: ${ageOld} $ ' '</li>    
    <li>Name: ${job} $ ' '</li>    
    <li>Name: ${city} $ ' '</li>    
</ul>
</div>
<div>
    <ul>
    <li>Name: ${name} $ ' '</li>    
    <li>Name: ${ageOld} $ ' '</li>    
    <li>Name: ${job} $ ' '</li>    
    <li>Name: ${city} $ ' '</li>    
</ul>
</div>
</div>
`;

document.body.innerHTML = html;
