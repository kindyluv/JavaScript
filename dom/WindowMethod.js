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
