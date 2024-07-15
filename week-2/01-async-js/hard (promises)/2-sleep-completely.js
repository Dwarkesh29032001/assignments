/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

//this assignment is same as 1 hard one 

function sleep(milliseconds) {
return new Promise((resovle)=>{
    const startime = Date.now();
    while(Date.now() - startime < milliseconds);
    resovle();
    });
}

// sleep(5000).then(()=>{
//     console.log("5 seconds have passed !") ;
// })
module.exports = sleep;
