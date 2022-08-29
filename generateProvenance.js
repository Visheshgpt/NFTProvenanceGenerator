const hashjson = require('./hash.json')
var crypto = require('crypto');

let allHashes = []

let concatenatedhash = ""
let startingIndex = 0; // replace your startingindex with 0

for (let i = startingIndex; i < hashjson.length; i++) {
    allHashes.push(hashjson[i].hash)
}

if (startingIndex !== 0) {
    for (let i = 0; i < startingIndex; i++) {
        allHashes.push(hashjson[i].hash)
    }   
}

// console.log(allHashes);
concatenatedhash =  allHashes.join('')
// console.log("Concatenated hash =======>", concatenatedhash);

const Provenancehash = crypto.createHash('sha256').update(concatenatedhash).digest('hex');
console.log("Final Provenance hash ======>", Provenancehash);