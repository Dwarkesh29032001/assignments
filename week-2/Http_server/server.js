const express = require("express") ;
const app = express() ;
const port = 3000 ;

app.get("/addnumbers" , (req , res)=>{
    const num1 = parseFloat(req.query.a);
    const num2 = parseFloat(req.query.b);
    const result = calculateSum(num1 , num2) ;
    res.send(`Sum Result is : ${result.toString()}`) ;
})

app.get("/sumofnumbers" , (req , res)=>{
    const Num = parseFloat(req.query.N);
    const result = sumofNumber(Num) ;
    res.send(`Sum of number is : ${result.toString()}`);
})




function sumofNumber(N){
    let result = 0 ;
    for(let i= 0 ; i < N ; i++){
        result += i ;
    }
    return result ;
}

function calculateSum(a , b){
    return a + b ;
}

app.listen(port);
console.log(`server is Lisenting to port number ${port}`);


