let obj = {
    a: 1,
    b: 0
}

let val = "bbbbbbb";

val.split('').forEach(ele => {
    if (obj[ele]) {
        console.log(true);
    } else {
        console.log(false);
    }
});