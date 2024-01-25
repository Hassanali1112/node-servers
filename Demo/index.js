const express = require('express');
const app = express();
var cors = require('cors')

app.use(function(req, res, next){
    console.log("this is middleware to jam execution except if next function is not there ")
    next();
})
app.use(cors());



app.get('/newport', function(req, res){
    res.send("new port is ready")
}) 

app.get("/", function(req, res){
    res.send("hello from express demo server with nodemon");
})

app.listen(5000);