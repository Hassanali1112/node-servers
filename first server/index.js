const express = require('express');
const app = express();
const port = 5000;
app.use(function(req, res, next){
    console.log("this is middleware");
    next();
})
app.get('/', (req, res) => res.send('hello world from express with nodemon'))
app.listen(port, () => console.log(`Server is ready : ${port}`));
app.get("/profile", function(req, res){
    res.send("this is profile.")
})



// const express = require('express')
// const app = express()

// app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(3000, () => console.log('Server ready'))