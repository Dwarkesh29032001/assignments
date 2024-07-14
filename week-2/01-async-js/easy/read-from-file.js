//Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

fs.readFile('temp.txt' , 'utf-8' , (err, data)=>{
    if(err){
        console.error("Error in reading the file :" , err);
        return ;
    }
    console.log(  'File Content:'  , data);


    //Expensive Opration
    let starttime = Date.now() ;
    for(let i = 0 ; i < 1e6 ; i++){} // 1 million iteration
    let endtime = Date.now() ;
    console.log('Time taken for expensive operation 1 : ' , (endtime - starttime)/1000 ,"secs") ;


})


fs.readFile('temp.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);

    // More expensive operation
    let start = Date.now();
    for (let i = 0; i < 1e7; i++) {} // 10 million iterations
    console.log('Expensive operation 2 completed in:', Date.now() - start, 'ms');
});

fs.readFile('temp.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);

    // Even more expensive operation
    let start = Date.now();
    for (let i = 0; i < 1e8; i++) {} // 100 million iterations
    console.log('Expensive operation 3 completed in:', Date.now() - start, 'ms');
});