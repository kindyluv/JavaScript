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


