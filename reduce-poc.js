let accumulator = (sum, num) => {
    console.log(sum, num);
    return sum + num;
}

// let val = [1, 2, 3, 4, 5].reduce(accumulator, 10);

// console.log(val);

let arr = ["a", "b", "c", "a"];

let val = arr.reduce((acc, curr) => {
    return acc += (curr === "a" ? 1 : 0)
}, 0);

console.log(val);

let object = {};

arr.forEach(ele => {
    object[ele] = object[ele] ? object[ele] + 1 : 1;
});

console.log(object);

// let regex = new RegExp(ele,'gi');

// let val = 