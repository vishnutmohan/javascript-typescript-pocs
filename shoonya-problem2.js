let input = `10 5 10
1234567891`

input = input.split('\n');

let number = input.pop();

input = input[0].split(' ')
let X = input[1];
let index = input[2]

let getCombinations = (str1, str2) => {
    let comb = [];
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            comb.push(str1.charAt(i) + str2.charAt(j));
        }
    }
    return comb;
}

let getCombinationsFromArrayStr = (array1, str2) => {
    let comb = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            comb.push(array1[i] + str2.charAt(j));
        }
    }
    return comb;
}


let main = (number) => {
    let blocks = [];

    for (let i = 0; i < number.length; i += X) {
        blocks.push(number.slice(i, i + X))
    }

    let numbers = [];
    let iter = 0;

    while (iter < blocks.length) {
        if (iter === 0) {
            numbers = getCombinations(blocks[0], blocks[1])
            iter = iter + 2;
        } else {
            numbers = getCombinationsFromArrayStr(numbers, blocks[iter])
            iter++;
        }
    }
    return numbers.sort();
}


let onlyUnique = (value, index, this) => {
    return this.indexOf(value) === index;
}

let arr = main(number);

let unique = arr.filter(onlyUnique);

console.log(unique[index - 1]);