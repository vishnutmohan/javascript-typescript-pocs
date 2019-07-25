"use strict";
exports.__esModule = true;
var tick = Date.now();
var log = function (v) { return console.log(v + " \n Elapsed: " + (Date.now() - tick) + " ms"); };
var codeBlocker = function () {
    // let i = 0;
    // while (i < 1000000000) {
    //     i++
    // }
    // return `Billion loops are done`;
    // return new  Promise((resolve, reject) => {
    //     let i = 0;
    //     while (i < 1000000000) {
    //         i++;
    //     }
    //     resolve(`Billion loops are done`);
    // });
    return Promise.resolve().then(function (v) {
        var i = 0;
        while (i < 1000000000) {
            i++;
        }
        return "Billion loops are done";
    });
};
log("Synchronous 1");
codeBlocker().then(log);
log("Synchronous 2");
