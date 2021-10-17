const numbers = [11,23,43,56,76,5,34];
const numbers2 = ['native', 'cohorts', 'toye', 'david'];
const fruit = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let ama;

numbers.unshift(123);
numbers.push(50);
// numbers2.pop();
// numbers2.shift();
// numbers2.reverse();
// numbers.reverse();

for (let i = 0; i < numbers.length; i++) {
 for (let j = i + 1; j < numbers.length; j++) {
  if (numbers[i] > numbers[j]){
   ama = numbers[i];
   numbers[i] = numbers[j];
   numbers[j] = ama;
  }
 }
 // console.table(numbers)

}
// sort in ascending order
ama = numbers.sort(function(x,y){
 return x - y;
})
console.table(ama)

// sort in descending order
ama = numbers.sort(function(x,y){
 return y - x;
})
console.table(ama)

//find number under 50





