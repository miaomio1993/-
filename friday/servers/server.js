/**
 * Created by lanouhn on 17/7/20.
 */
var app = require("express")();
var mongoose = require("mongoose");
var bodyParser=require("body-parser");
var urlencodeParser=bodyParser.urlencoded();

var db = mongoose.connect("mongodb://localhost:27017/friday");
db.connection.on("open",function () {
  console.log(" 说明数据库链接成功了")
})
db.connection.on("error",function (err) {
  console.error("数据库链接失败"+err);
})
var userSchema = new mongoose.Schema({
  userPhone:{type:Number},
  passWord:{type:String}
},{collection:"user"});

var Model = db.model("user",userSchema );

//在服务器打开网页

app.get("/reg",function (req,res) {
  var regObj = req.query;
  console.log(regObj);
  // res.send({err:1})
  Model.create({userPhone:regObj.userPhone,passWord:regObj.passWord},function (err,doc) {
    if(!err){
      res.send({err:1})
    }
  })
})

app.listen(8080)
