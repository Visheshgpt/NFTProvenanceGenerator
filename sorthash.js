const hashjson = require('./hash.json')
var fs = require('fs');

hashjson.sort((a, b) => {
    return a.id - b.id;
});

fs.writeFileSync('./sortedhash.json', JSON.stringify(hashjson))