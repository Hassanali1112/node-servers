const express = require("express");
const app = express();

app.post("/" , (req, res)=>{
    res.send(req.body.name)
})
app.listen(5000)