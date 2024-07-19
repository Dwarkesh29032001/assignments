const express = require("express");
const app = express() ;
const port = 3000 ;


//global data variable  

const users = [{
    name : "jhon" ,
    kidneys: [{
        heathly : false 
    }]

}]

app.use(express.json());

app.get("/" , (req , res)=>{
    const johnKidneys = users[0].kidneys ;
    const numberofKindneys = johnKidneys.length ;
    let numberofHealthyKidney = 0 ;
    for(let i = 0 ; i  < johnKidneys.length ; i++){
        if(johnKidneys[i].heathly){
            numberofHealthyKidney += 1 ;
        }
    }

    const numberofunhealthykidney =  numberofKindneys - numberofHealthyKidney ;
    res.json({
        johnKidneys ,
        numberofKindneys ,
        numberofHealthyKidney ,
        numberofunhealthykidney 
    })
})


app.post("/" , (req , res)=>{
    const isHealthy = req.body.isHealthy ;
    users[0].kidneys.push({
        heathly : isHealthy 
    })

    res.json({
        msg : "Done" 
    })

})

app.put("/" , (req , res)=>{
    for(let i=0 ; i < users[0].kidneys.length ; i++){
        users[0].kidneys[i].heathly = true ;
    }
    res.json({
        msg : "data updated"
    })
})

//removing  all the unhealthy kidneys 
app.delete("/" , (req , res)=>{

    if(isthereatleastOneUnhealthyKidney()){
        const newKidneys = [] ;
        for(let i = 0 ; i < users[0].kidneys.length ; i++){
            if(users[0].kidneys[i].heathly){
                newKidneys.push({
                    heathly : true 
                }) ;
                }
                }
    
                users[0].kidneys = newKidneys ;
                res.json({ msg : "deleted !"  })
    }
    else{
        res.status(411).json({ msg : "no unhealthy kidneys" })
    }
    
})


function isthereatleastOneUnhealthyKidney(){
    let  atleastOneUnhealthyKidney = false ;
    for(let i = 0 ; i < users[0].kidneys.length ; i++){
        if(!users[0].kidneys[i].heathly){
            atleastOneUnhealthyKidney = true ;
        }
    }
    return atleastOneUnhealthyKidney ;
}

app.listen(port);
console.log(`server is listening to port number ${port}`);