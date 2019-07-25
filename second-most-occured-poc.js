// let arr = [4, 7, 2, 4, 5, 6, 2, 2, 3];
let arr = [2, 1, 2, 2];
let arrMap = {};
let maxOccur = 0;
let secondMaxOccur = 0;
let secondMaxOccurVal = null;
let maxOccurVal = null;
for (let i = 0; i < arr.length; i++) {
    arrMap[arr[i]] = arrMap[arr[i]] ? arrMap[arr[i]] += 1 : 1;
    console.log("I", i);
    if (i === 0) {
        maxOccur = 1;
        maxOccurVal = arr[i];
        secondMaxOccur = 0;
    } else {
        console.log("arrMap[arr[i]]", arrMap[arr[i]], arr[i]);
        if (secondMaxOccur === 0) {
            secondMaxOccurVal = arr[i];
            secondMaxOccur = arrMap[arr[i]];
        }
        if (arrMap[arr[i]] > maxOccur && arr[i] !== maxOccurVal) {
            secondMaxOccurVal = maxOccurVal;
            secondMaxOccur = maxOccur;
            maxOccurVal = arr[i];
            maxOccur = arrMap[arr[i]];
        } else {
            
        }
        if (arrMap[arr[i]] < maxOccur && arrMap[arr[i]] >= secondMaxOccur) {
            console.log("If");
            secondMaxOccurVal = arr[i];
            secondMaxOccur = arrMap[arr[i]];
        } else if (arrMap[arr[i]] > maxOccur && arr[i] !== maxOccurVal) {
            console.log("Else If");
            secondMaxOccurVal = maxOccurVal;
            secondMaxOccur = maxOccur;
            maxOccurVal = arr[i];
            maxOccur = arrMap[arr[i]];
        } else if (arrMap[arr[i]] > maxOccur && arr[i] === maxOccurVal) {

        }
    }
    console.log(maxOccurVal, maxOccur);
    console.log(secondMaxOccurVal, secondMaxOccur);
}
console.log(arrMap);
// arr.forEach(ele => {
//     arrMap[ele] = arrMap[ele] ? arrMap[ele] += 1 : 1;
//     // if (arrMap[ele] < maxOccur && arrMap[ele] > secondMaxOccur) {
//     //     console.log("here");
//     //     secondMaxOccur = maxOccur;
//     //     maxOccur = arrMap[ele];
//     //     secondMaxOccurVal = maxOccurVal;
//     //     maxOccurVal = arrMap[ele]
//     // }
// });