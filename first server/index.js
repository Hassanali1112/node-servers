const express = require('express');
const app = express();
const port = 5000;
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("working")
})

var cors = require("cors");
app.use(cors());
const users = [
    { fullname : "hassan",
      userName : "hassan1",
      password : 123,
      posts : ["post1" , "post2"],
      url : ""  }
]

app.post('/signup', (req, res) =>{
    const found = users.find(items=> items.userName === req.body.person.userName)
    if(!found){
        users.push(req.body.person)
        res.status(200).json( [req.body.person] );
    } else {
        res.json("user name already register")
    }
   
})

app.post('/signin', (req, res) => {
    // const found = users.find((item) => item.userName === req.body.person.userName && item.password === req.body.person.password);
    // if (found) {
    //     res.status(200).json(users);
    // } else {
    //     res.status(404).send("User does not exist");
    // }
    res.status(200).json(users)
    
});

app.get('/profile', (req, res) =>{
   res.status(200).json(users)
})

app.listen(port, () => console.log(`Server is ready : ${port}`));
