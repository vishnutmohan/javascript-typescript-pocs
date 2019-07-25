let arr = [1, 2, 3, 4];

// console.log(arr.sum())

for (let i = 0; i < 1; i++) {
    arr.splice(arr.indexOf(Math.max.apply(null, arr)), 1)
}
console.log(`second largest: ${Math.max.apply(null,arr)}`)

console.log(Math.max.apply(null, arr))

let newArr = arr.filter(num => num % 2 === 0)
console.log(newArr);

let sum = (acc, num) => acc + num;

console.log(arr.reduce((acc, num) => acc + num, 0));