const crypto = require('crypto');
const base64url = require('base64url');

crypto.randomBytes(24, (err, buf) => {
    if (err) throw err;
    if (buf) {
        console.log(`${buf.length} bytes of random data: ${base64url(buf)}`);
        console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
    }
});