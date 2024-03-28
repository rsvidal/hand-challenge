const translate = require('./mySolution.js');
const fs = require('fs');

// Read file and return a promise
async function readFile(filePath) {
    try {
        const data = await fs.promises.readFile(filePath, 'utf8');
        return data;
    } catch (error) {
        throw error;
    }
}

// Read test1.hand file and translate the content
async function main() {
    try {
        let data = await readFile("test1.hand");
        console.log('test1.hand:', data);
        console.log("Result:", translate(data));

        data = await readFile("test2.hand");
        console.log('test2.hand:', data);
        console.log("Result:", translate(data));
    } catch (error) {
        console.error('Error to read the file:', error);
    }
}

// Call main function
main();
