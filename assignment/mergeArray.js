//Question One-----merge two arrays and removes all duplicates elements-----
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

//Question Two ----Sort the array gotten in 1 above in ascending and descending order--
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

function sortArrayInAscendingOrder(c){
        return mergeArray.sort();
    return c;
}

console.log("Array in ascending order ", sortArrayInAscendingOrder(mergeArray));

//Question Three-----
function mergerAndGroup(a, b) {
    let mergeArray = merge(a,b)
    let sortArray = mergeArray.sort()
    let string = []
    let numbers = []
    let _boolean = []
    let groupedArray = []

    for (let i = 0; i < sortArray.length; i++) {
        if (typeof sortArray[i] ==='string'){
            string.push(sortArray[i])
        }else if (typeof sortArray[i] === 'number'){
            numbers.push(sortArray[i])
        }else if (typeof sortArray[i] === 'boolean'){
            _boolean.push(sortArray[i])
        }
    }
    groupedArray.push(string, numbers, _boolean)
    return groupedArray.sort()
}
let d = ["a", 1 , true]
let e = ["b" , 2 , false]
console.log(mergerAndGroup(d,e))
