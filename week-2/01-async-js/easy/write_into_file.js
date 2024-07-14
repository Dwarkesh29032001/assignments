const fs = require('fs');

const content = 'This is some content to be written to the file.';

fs.writeFile('output.txt', content, 'utf8', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('File written successfully');

    // Even more expensive operation
    let start = Date.now();
    for (let i = 0; i < 1e7; i++) {} // 100 million iterations
    console.log('Expensive operation 3 completed in:', Date.now() - start, 'ms');
});