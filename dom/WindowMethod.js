//document.getElementById()

console.log(document.getElementsByClassName("register_btn"));

//Get things from te element
console.log(document.getElementsByClassName("register_btn"));

const register_btn = document.getElementsByClassName("register_btn");

//Change styling
register_btn.style.background = '#333';
register_btn.style.color = '#fff'; 
register_btn.style.padding = '5px';
register_btn.style.display = 'none';

//Change content
register_btn.innerHTML = 'register_btn_new';

//document.querySelector()

console.log(document.querySelector('.mobile_frame'))
console.log(document.querySelector('h2'))
console.log(document.querySelector('input'))
console.log(document.querySelector('label'))

//selecting specific items
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'green';
document.querySelector('li:nth-child(3)').style.color = 'yellow';

//changing content in a specific list
document.querySelector('li:nth-child(4)').textContent = 'Hello world';

//changing things in last odd and even places
document.querySelector('li:nth-child(odd)').style.background = '#000000';
document.querySelector('li:nth-child(even)').style.background = 'gray';

let items = document.getElementsByClassName("register_btn")
console.log(items);
console.log(items.length);
console.log(items[0])
items[0].style.color = 'red';
items[3].textContent = 'hello';

const listItems = document.querySelector('ul').getElementsByClassName('frame_container');
console.log(listItems)

