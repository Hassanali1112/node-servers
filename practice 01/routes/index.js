var express = require('express');
var router = express.Router();
const userModel = require("./users")
const postModel = require("./post")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/usercreate', async function(req, res) {
  let createdUser = await userModel.create({
    username: "hassan092",
    password: "hassan0312.",
    email:"hassan0312@gmail.com" ,
  });
  res.send(createdUser);
});

router.get('/postcreate', async function(req, res) {
 let post = await postModel.create({
    posttext: "this is another post",
    user: "65f853d5cd2e37287b583650",
  });
 let user = await userModel.findOne({ _id: "65f853d5cd2e37287b583650" });
 user.posts.push(post._id)
  await user.save();
 res.send("done")
});

router.get("/allposts", async function (req, res) {
  let user = await userModel.findOne({ _id: "65f853d5cd2e37287b583650" })
  .populate("posts")
  res.send(user)
});
module.exports = router;
