let input = `3
cde
abc
mnb
qwe
rty
fgh`

/**
 * Method by splitting string into array. Memory consumption is too much.
 * @param {*} string1 
 * @param {*} string2 
 */
// let findAnagramLength = (string1, string2) => {
//     let difference = {};
//     string1 = string1.split('');
//     string1.forEach(ele => difference[ele] = difference[ele] === undefined ? 1 : difference[ele] += 1);
//     string2 = string2.split('');
//     string2.forEach(ele => difference[ele] = difference[ele] === undefined ? -1 : difference[ele] -= 1);
//     return Object.values(difference).reduce((acc, cur) => {
//         return acc += Math.abs(cur);
//     }, 0);
// };

/**
 * Method with string operation. Better time and memory efficiency.
 * @param {*} string1 
 * @param {*} string2 
 */
let findAnagramLength = (string1, string2) => {
    let difference = {};
    for (let i = 0; i < string1.length; i++) {
        if (difference[string1.charAt(i)] === undefined)
            difference[string1.charAt(i)] = 1
        else
            difference[string1.charAt(i)] += 1
    }
    for (let i = 0; i < string2.length; i++) {
        if (difference[string2.charAt(i)] === undefined)
            difference[string2.charAt(i)] = -1
        else
            difference[string2.charAt(i)] -= 1
    }
    var anagramLength = 0;
    Object.keys(difference).forEach((key) => {
        anagramLength += Math.abs(difference[key]);
    });
    return anagramLength;
}

inpArr = input.split('\n');
let i = 1;
while (i <= inpArr[0]) {
    let string1 = inpArr[2 * i - 1];
    let string2 = inpArr[2 * i];
    i++;
    console.log(findAnagramLength(string1, string2));
}