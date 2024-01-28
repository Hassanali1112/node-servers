const express = require('express');
const app = express();
const port = 5000;
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("working")
})

var cors = require("cors");
app.use(cors());
const users = []

app.post('/signup', (req, res) =>{
    const found = users.find(items=> items.userName === req.body.person.userName)
    if(!found){
        users.push(req.body.person)
        res.send( req.body.person );
    } else {
        res.json("user name already register")
    }
})

app.post('/signin', (req, res) =>{
    const loginfound = users.find(items=> items.userName === req.body.person.userName && items.password ===req.body.person.password)
    if(!loginfound){
        
        res.send("invalid user name and password");
    } else {
        res.send(loginfound)
    }
})

app.listen(port, () => console.log(`Server is ready : ${port}`));
