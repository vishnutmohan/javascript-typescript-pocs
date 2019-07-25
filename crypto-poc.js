const crypto = require('crypto');
const algorithm = 'AES-256-CBC';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

let encryption = (text) => {
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    let encryptedData = cipher.update(text);
    encryptedData = Buffer.concat([encryptedData, cipher.final()]);
    console.log(`${encryptedData.length} of encrypted data: ${encryptedData.toString('hex')}`);
}

encryption("vishnu mohan");