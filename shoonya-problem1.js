let limit = 50;

let iter = 1;
let count = 0;

while (iter < limit) {
    if (Number.isInteger(Math.cbrt(iter * iter))) {
        count++;
    }
    iter++;
}

console.log(count);