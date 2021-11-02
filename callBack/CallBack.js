// function a(num, multiplier){
//     for (let i = 0; i < 12; i++) {
//         multiplier(num,i);
//     }
// }
//
// function multiply(x,y){
//     let result = x*y
//     console.log(`${x} * ${y} = ${result}`)
// }
//
// for (let i = 0; i < 12; i++) {
//     a(i, multiply);
// }
//
// function addition(x,y){
//     let result = x+y
//     console.log(`${x} + ${y} = ${result}`)
// }
//
// for (let i = 0; i <= 12; i++) {
//     a(i, addition);
// }
//
// function square(x){
//     let result = x * x
//     console.log(`${x} * ${x} = ${result}`)
// }
//
// for (let i = 0; i <= 12; i++) {
//     a(i, square);
// }

//Array method Classwork

//
let objArray = [{
    gender: "male",
    firstname: 'John',
    lastname: 'Smith',
},
    {
        gender: "male",
        firstname: 'Demola',
        lastname: 'Femi',
    },
    {
        gender: "male",
        firstname: 'Tife',
        lastname: 'Harry',
    },
    {
        gender: "female",
        firstname: "kim",
        lastname: "yetunde",
    }
]
// //-------Question One ---------
// //let question1 = "Using Array method forEach, print out the firstname"
//
// objArray.forEach(function(myObj){
//     console.log(myObj.firstname)
//     }
// )
// //--part two
//
// let array
// array = function arrayss(){
//     let arrays = []
//     objArray.forEach(function(item){
//         arrays.push(item.firstname);
//     })
//     return arrays
// }
// console.log(array())
//
//
// //-------Question Two ---------
// //let question2 = "Using Array method map, print out a new key fullName"
// // "per object and the value would be the combination of"
// // "the firstname and the lastname" "Check Array.prototype.map on MDN Docs"
//
// let array_one = objArray.map(function(myObj){
//     myObj.fullName = myObj.firstname + " " + myObj.lastname
//     return myObj.fullName
// })
//
// console.log(array_one)
//
//
//
// //-----Question Three------
// //"using Array method filter, return an array containing" "object with gender male
// let maleArray
// maleArray = objArray.filter(function(myObj){
//     return myObj.gender === "male"
// })
// console.log("males ==> \n",maleArray)
//
// //-----Question Four------
// //"Do question three above for object with gender fe
//
let femaleArray
femaleArray = objArray.filter(function(myObj){
    return myObj.gender === "female"

})
console.log("females ==>\n",femaleArray)

//----Question Five-----
// "Create a new key age per object, the value of age per object is"
// "equivalent to the total sum of both the firstName and lastName"
sum = objArray.map(function(myObj){
    myObj.age = myObj.firstname.length + myObj.lastname.length
    return myObj
})


console.log("==> \n",sum)