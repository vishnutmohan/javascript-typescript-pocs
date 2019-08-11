let onlyUnique = (value, index, arr) => {
    return arr.indexOf(value) === index;
}

let arr = [1,2,3,4,5,6,1,2,3];

let unique = arr.filter(onlyUnique)

console.log(unique);