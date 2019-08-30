const alphaArr = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

/**
 * In this case we are going to check with array of alphabets.
 * @param {*} input: input string to whcih shif going to happen.
 * @param {*} shiftVal: how many shift need to happen
 */
const shiftMethodUsingArray = (input, shiftVal) => {
    let output = '';
    let str = input.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        let char = '';
        let index = alphaArr.indexOf(str.charAt(i));
        let diff = index - shiftVal;
        if (diff < 0) char = alphaArr[alphaArr.length + diff];
        else char = alphaArr[diff];
        if (input.charAt(i) === input.charAt(i).toUpperCase())
            output += char.toUpperCase();
        else output += char;
    }
    return output;
};

/**
 * In this case we are going to check with ascii values of alphabets.
 * @param {*} input: input string to whcih shif going to happen.
 * @param {*} shiftVal: how many shift need to happen
 */
const shiftMethodUsingAscii = (input, shiftVal) => {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        let asciiVal = input.charCodeAt(i);
        let diff = asciiVal - shiftVal;
        if ((diff < 97 && diff > 65) || diff < 65)
            output += String.fromCharCode(diff + 26);
        else output += String.fromCharCode(diff);
    }
    return output;
};

console.log(shiftMethodUsingArray('AbC', 6));
