function merge(a,b){
    let c = [];
    for (let i = 0; i < a.length; i++) {
        if (!(c.includes(a[i]))) c.push(a[i])
        for (let j = 0; j < b.length; j++) {
            if (!(c.includes(b[j]))) c.push(b[j])
        }
    }
    return c;
}

let a = [2, 3, 1];
let b = [2,9,5,3]
console.log(merge(a,b));
let mergeArray = merge(a,b)


function sortArrayInDescendingOrder(c){
    for (let i = 0; i < c.length; i++) {
        for (let j =i+1; j < c.length; j++) {
            if(c[i] < c[j]){
                let temp = c[i];
                c[i] = c[j];
                c[j] = temp;
            }
        }
    }
    return c;
}

console.log("Array in descending order ", sortArrayInDescendingOrder(mergeArray))

// function sortArrayInAscendingOrder(c){
//     for (let i = 0; i < c.length; i++) {
//         for (let j =i+1; j < c.length; j++) {
//             if(c[j] < c[i]){
//                 let temp = c[i];
//                 c[i] = c[j];
//                 c[j] = temp;
//             }
//         }
//     }
//     return c;
// }
//
// console.log("Array in ascending order ", sortArrayInAscendingOrder(mergeArray));
