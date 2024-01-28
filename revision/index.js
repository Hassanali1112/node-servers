const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());
app.set("view engine", "ejs");

app.use(express.static("./public"))

app.use((req, res, next)=>{
    console.log("this is middleware ")
    next();
})

app.get("/", (req, res)=>{
    res.send([
        { name : "hassan",
          email : "hassan1",
          password : 123,  }
    ])
})

app.get("/login", (req, res)=>{
    res.render("index");
});
app.get("/user", (req, res)=>{
    res.render("user", {user : "hassan"} );
});
// dynamic root for profile
app.get("/profile/:username", (req, res)=>{
    res.send(`this is profile of ${req.params.username}`)
})

app.listen(5000, console.log("server is ready to serve"))