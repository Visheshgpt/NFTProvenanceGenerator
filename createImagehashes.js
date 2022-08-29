var crypto = require('crypto');
var fs = require('fs');

// hasharray = new Map()
hashObj = new Array()
const Path = "./images"



fs.readdirAsync = function(dirname) {
    return new Promise(function(resolve, reject) {
        fs.readdir(dirname, function(err, filenames){
            if (err) 
                reject(err); 
            else 
                // console.log("filename", filenames);
                resolve(filenames);
        });
    });
};

fs.readFileAsync = function(filename, enc) {
    return new Promise(function(resolve, reject) {
        fs.readFile(filename, enc, function(err, data){

            index = filename.split('/')[2].split('.')[0]

            if (err) {  
                reject(err); 
            }
            else if (data.length == 0) {
                reject(`No data found for ${index}.png`)
            }
            else {       
                hash = crypto.createHash('sha256').update(data).digest('hex');       
                // hasharray.set(index,hash)
                obj = {
                    id: index,
                    hash: hash
                }
                hashObj.push(obj)
                resolve(data);
            } 
        });
    });
};

 
function getImageFile(filename) {
    return fs.readFileAsync(Path+"/"+filename);
}
 
function isPngfile(filename) {
  return (filename.split('.')[1] == 'png' )
}


fs.readdirAsync(Path).then(function (filenames){
    filenames = filenames.filter(isPngfile);
    return Promise.all(filenames.map(getImageFile));
}).then(function (files) {
    // console.log(hashObj);
    console.log("Total Images" ,hashObj.length);
    hashObj.sort((a, b) => {
        return a.id - b.id;
    });
    fs.writeFileSync('./hash.json', JSON.stringify(hashObj))
})
.catch(function (error) {
    console.log("error", error);
} )
