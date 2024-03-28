const translate = require('./mySolution.js');
const fs = require('fs');

// Read file and return a promise
function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err); // Si hay un error, rechazamos la promesa con el error
                return;
            }
            resolve(data); // Si no hay errores, resolvemos la promesa con los datos leídos
        });
    });
}

// Read test1.hand file and translate the content
readFile("test1.hand")
    .then(data => {
        console.log('hands:', data);
        console.log("Result:", translate(data));
    })
    .catch(error => {
        console.error('Error to read the file:', error);
    });
