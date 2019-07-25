const fs = require('fs');

let fileRead = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./file1.txt', (err, data) => {
            if (err)
                reject(err);
            if (data)
                resolve(data.toString());
        });
    });
}

// fileRead()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(err => console.log(err))


let getData = async () => {
    try {
        let data = await fileRead();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
};

// getData();

const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now()-tick}`);

const codeBlocker = () => {
    let i = 0;
    while (i < 1000000000) {
        i++
    }
    return `Billion loops are done`;
}

log(`Synchronous 1`);
log(codeBlocker());
log(`Synchronous 2`)