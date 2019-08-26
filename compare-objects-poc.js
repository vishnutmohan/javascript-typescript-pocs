let arr1 = [{
    "name": "vishnu",
    "RV_MeetingID": 28
}, {
    "name": "vivek",
    "RV_MeetingID": 29
}, {
    "name": "vineeth",
    "RV_MeetingID": 30
}, {
    "name": "rahul",
    "RV_MeetingID": 31
}]

let arr2 = [{
    "name": "vishnu",
    "RV_MeetingID": 28
}, {
    "name": "vivek",
    "RV_MeetingID": 29
}, {
    "name": "vineeth",
    "RV_MeetingID": 30
}, {
    "name": "rahul",
    "RV_MeetingID": 32
}];

// arr2.forEach(ele => {
//     let matching = (obj) => {
//         return _.isEqual(obj, ele)
//     }
//     if (!arr1.some(matching)) {
//         let duplicate = arr1.find(element => element["RV_MeetingID"] === ele["RV_MeetingID"]);
//         if (arr1.indexOf() > -1)
//             arr1.push(ele);
//     }
// });

arr1 = null;
arr2 = null;

let list = [];
list = list.concat(arr1);
arr2.forEach(ele => {
    let element = list.find(obj => obj["RV_MeetingID"] === ele["RV_MeetingID"])
    if (element === undefined)
        list.push(ele);
});
console.log(list);