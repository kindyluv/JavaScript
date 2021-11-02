function a(num, multiplier){
    for (let i = 0; i < 12; i++) {
        multiplier(num,i);
    }
}

function multiply(x,y){
    let result = x*y
    console.log(`${x} * ${y} = ${result}`)
}

for (let i = 0; i < 12; i++) {
    a(i, multiply);
}

function addition(x,y){
    let result = x+y
    console.log(`${x} + ${y} = ${result}`)
}

for (let i = 0; i <= 12; i++) {
    a(i, addition);
}

function square(x){
    let result = x * x
    console.log(`${x} * ${x} = ${result}`)
}