const tick = Date.now();
const log = (v: any) => console.log(`${v} \nElapsed: ${Date.now() - tick} ms`);
const delay = (ms: number) => { return new Promise(resolve => setTimeout(resolve, ms)) };

const getFruit = async (name) => {
    const fruits = {
        pineapple: "pineapple",
        peach: "peach",
        strawberry: "strawberry"
    };
    await delay(1000);
    return fruits[name];
}

// getFruit('peach').then(console.log)

// const makeSmoothie = () => {
//     let a;
//     return getFruit('pineapple')
//         .then(v => {
//             a = v;
//             return getFruit('strawberry');
//         })
//         .then(v => [a, v])
// }

// const makeSmoothie = async () => {
//     const a = await getFruit('pineapple');
//     const b = await getFruit('strawberry');
//     return [a, b];
// }

// const makeSmoothie = async () => {
//     const a = getFruit('pineapple');
//     const b = getFruit('strawberry');
//     const smoothie = await Promise.all([a, b]);
//     return smoothie;
// }

// makeSmoothie().then(log)

const fruits = ['peach', 'pineapple', 'strawberry'];
// const smoothie = fruits.map(async v => {
//     const fruit = await getFruit(v);
//     log(fruit);
//     return fruit;
// });

// const fruitLoop = async () => {
//     for (const v of fruits) {
//         const fruit = await getFruit(v);
//         log(fruit);
//     }
// }

// const smoothie = fruits.map(v => getFruit(v));

// const fruitLoop = async () => {
//     for await (const v of smoothie) {
//         log(v);
//     }
// }

// fruitLoop();
// smoothie;