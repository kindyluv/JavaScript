function greet(firstName, lastName) {
    if (typeof firstName ==='undefined'){firstName = 'John';}
    if (typeof lastName ==='undefined'){lastName = ' Doe';}
    return 'hello' + ' '+firstName + ' ' + lastName;
}
console.log(greet('Lois', 'Ama'));

//function expressions
const square = function(x=3){
    return x*x;
}
console.log(square(5));
//immediately invokable function expression- IIFEs
    (function(name){
        console.log('Hello ' + ' ' + name)
    })('Lois');

//Property Methods
const todo = {
    add: function(){
        console.log('Add todo...');
    },
    edit: function(id){
        console.log(`Edit todo: ${id}`)
    }
}

todo.delete = function () {
    console.log('Delete todo...');
}

todo.add();
todo.edit(34);
todo.delete();