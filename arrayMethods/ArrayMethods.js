let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function multiply(num){
    for (let i = 0; i <= 12; i++) {
        console.log(`${num} * ${i} = ${num*i}`)
    }
}

for (let i = 1; i <= 12; i++) {
    numArray.forEach(multiply);
}