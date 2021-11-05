let persons = {
    person1: "jerry",
    person2: "sa'eed",
    person3: "demola",
    person4: "dami",
}

console.log("1", persons)
persons = {...persons}
console.log("\n2", persons)

persons = {...persons, person4: "ozzy"}
console.log("\n",persons)

//overriding in js is updating and data immutability
let users = {name: "segun", crush: "mojoyin", hobby: "praying", crush: "ozzy"}
console.log("\n",users)