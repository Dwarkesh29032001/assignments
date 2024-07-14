let count = 0 ;
function counter(){
    count++;
    return console.log(" The Counter is at :" +count);
}
setInterval(counter , 1000);
