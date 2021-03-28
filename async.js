const fs = require('fs');

let generateData = () => {
    let data = '1';
    for(i=0; i < 1000000; i++) {
        data += Math.random() * 10;
    }
    return data;
}

let callback = () => {
    console.log('Process \'bigFile\' terminé, durée ' + (Date.now() - date) + 'ms' )
}

fs.writeFile('bigFile.txt', generateData(), callback);
const date = Date.now();
console.log('Disponible');