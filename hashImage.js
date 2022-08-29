var crypto = require('crypto');
const fs = require('fs');

const fileBuffer = fs.readFileSync("./images/1.png");
console.log(fileBuffer);
x = Buffer.isBuffer(fileBuffer) 

// check if the image is empty or not
y = fileBuffer.length
console.log(x)
console.log(y);;

const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex');
console.log(hash);