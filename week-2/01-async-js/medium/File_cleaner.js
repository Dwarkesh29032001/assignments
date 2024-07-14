const fs = require('fs');

// Function to remove extra spaces from a string
function removeExtraSpaces(text) {
    // Replace multiple spaces with a single space
    return text.replace(/\s+/g, ' ').trim();
}

// Function to process the file
function processFile(filename) {
    // Read the file
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        // Remove extra spaces from the content
        let cleanedContent = removeExtraSpaces(data);

        // Write the cleaned content back to the file
        fs.writeFile(filename, cleanedContent, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return;
            }
            console.log('File cleaned and updated successfully');
        });
    });
}

// Replace 'input.txt' with your file name
const filename = 'temp.txt';
processFile(filename);

