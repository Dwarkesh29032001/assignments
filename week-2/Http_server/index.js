
//How to create a simple Http Sever using Express 
const express = require('express')
const  app = express();
const port = 3000

app.get('/', function(req, res) {
  res.send("<b> Hello Dwarkesh !! <b/>");
})

app.listen(port);
console.log(`Listening to the Port Number ${port} `);
