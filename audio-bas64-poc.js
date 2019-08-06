const fs = require('fs');
const base64 = require('base64url');

let data = fs.readFileSync('./data.mp3');

let base64Data = base64.encode(data);

console.log("Base64 Data", base64Data);