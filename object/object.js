//first method
let native = {
    name: "",
    age: "",
    gender: "",
    id: "",
    height: "",
    hobby: "",
}
console.log(native)

//second method
// let othernative = new Object()
// console.log(native)
//
// function createObject(name, age, gender, id, height, hobby) {
//         this.name = name
//         this.age = age
//         this.gender = gender
//         this.id = id
//         this.height = height
//         this.hobby = hobby
}

// let newNative = new createObject("precious", 34, "female"," 5.7ft", "sleeping", "Sewing")
//
// console.log(newNative)

//RETRIEVAL

//We have two method of retrieving data from an object
//1) Dot Notation
// 2) bracket Notation

// let age = newNative.age
// let ageb = newNative["age"]
//
// console.log(age, ageb)

//UPDATE DATA IN OBJECTS

// newNative.age = 27;
//
// let newAge = newNative["age"]
//
// console.log(newAge)
//
// //DELETE DATA IN OBJECTS
//
// delete newNative.age;
//
// console.log(newNative)
//
// for (let n in newNative){
//     console.log(newNative)
// }
//
// console.log(Object.keys(newNative));

//INTRODUCTION TO THIS KEYWORD

// let cohort8Native = {
//     fullName: "Precious",
//     gender: "Female",
//     height: "average",
//     hobby : "Fashion",
//     getFullName: function(){
//         return this.fullName
//     }
// }
//
// console.log(cohort8Native.getFullName())

//INTRODUCTION TO BIND KEYWORD

// let returnFullName = cohort8Native.getFullName.bind(cohort8Native)
// console.log(returnFullName())