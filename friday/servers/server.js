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
  passWord:{type:String},
  score:{type:String ,default:0},
  money:{type:String,default:0},

},{collection:"user"});

var Model = db.model("user",userSchema );


//在服务器打开网页

app.get("/reg",function (req,res) {
  var reqObj = req.query;
  Model.find({userPhone:reqObj.userPhone},function (err,doc) {
    if (doc.length){
     res.send({err:1})

    }else {
      Model.create({userPhone:reqObj.userPhone,passWord:reqObj.passWord,score:0,money:0},function (err,doc) {
        if(!err){
          res.send({err:2})
        }
      })
    }
  })

})


app.get("/log",function (req,res) {
  var reqObj = req.query;
  Model.find({userPhone:reqObj.userPhone},function (err,doc) {
    if(doc.length) {
      Model.find({passWord:reqObj.passWord},function (err,doc) {
        if (doc.length){
          res.send({err:2})
        }else {
          res.send({err:3})
        }
      })
    }else {
      res.send({err:1})
    }

  })

})

app.get("/myaccount",function (req,res) {
  var reqObj = req.query;
  // console.log(reqObj)
  Model.find({userPhone:reqObj.userPhone},function (err,doc) {
    // console.log(doc)
    res.send({score:doc[0].score,money:doc[0].money})
  })

})

app.get("/mymoney",function (req,res) {
  var reqObj = req.query;
  Model.update({userPhone:reqObj.userPhone},{$set:{money:reqObj.money}},{multi:true},function (err) {
    if (!err){
      Model.find({userPhone:reqObj.userPhone},function (err,doc) {
        console.log(doc)
        res.send({money:doc[0].money})
      })
    }
  })

})

app.get("/scoreorder",function (req,res) {
  var reqObj = req.query;
  // console.log(reqObj)
  Model.update({userPhone:reqObj.userPhone},{$set:{score:reqObj.score}},{multi:true},function (err) {
    if (!err){
      Model.find({userPhone:reqObj.userPhone},function (err,doc) {
        console.log(doc)
        res.send({score:doc[0].score})
      })
    }
  })

})


var userSchema1 = new mongoose.Schema({
  userPhone:{type:String},
  address1:{type:String,default:""},
  address2:{type:String,default:""},
  address3:{type:String,default:""},
  address4:{type:String,default:""},
  address5:{type:String,default:""}
},{collection:"address"});

var Model1 = db.model("address",userSchema1 );



app.get("/addarea",function (req,res) {
  var reqObj = req.query;
  // function addPlace(place) {
  //   Model1.update({userPhone:reqObj.userphone},{$set:{place:reqObj.people+':'+reqObj.area+':'+reqObj.detailarea+':'+reqObj.phone+':'+reqObj.userphone}},{multi:true},function (err) {
  //     if (!err){
  //       res.send({err:1})
  //     }
  //   })
  // }

  Model1.find({userPhone:reqObj.userphone},function (err,doc) {
    // console.log(doc)
    if(doc.length==0){
      Model1.create({userPhone:reqObj.userphone,address1:reqObj.people+':'+reqObj.area+':'+reqObj.detailarea+':'+reqObj.phone+':'+reqObj.userphone},function (err,doc) {
        if(!err){
          res.send({err:1})
        }
      })
    }else{
      if(doc[0].address2.length==0){
        Model1.update({userPhone:reqObj.userphone},{$set:{address2:reqObj.people+':'+reqObj.area+':'+reqObj.detailarea+':'+reqObj.phone+':'+reqObj.userphone}},{multi:true},function (err) {
          if (!err){
            res.send({err:1})
          }
        })
      }else {
        if(doc[0].address3.length==0){
          Model1.update({userPhone:reqObj.userphone},{$set:{address3:reqObj.people+':'+reqObj.area+':'+reqObj.detailarea+':'+reqObj.phone+':'+reqObj.userphone}},{multi:true},function (err) {
            if (!err){
              res.send({err:1})
            }
          })
        }else {
          if(doc[0].address4.length==0){
            Model1.update({userPhone:reqObj.userphone},{$set:{address4:reqObj.people+':'+reqObj.area+':'+reqObj.detailarea+':'+reqObj.phone+':'+reqObj.userphone}},{multi:true},function (err) {
              if (!err){
                res.send({err:1})
              }
            })
          }else {
            if(doc[0].address5.length==0){
              Model1.update({userPhone:reqObj.userphone},{$set:{address5:reqObj.people+':'+reqObj.area+':'+reqObj.detailarea+':'+reqObj.phone+':'+reqObj.userphone}},{multi:true},function (err) {
                if (!err){
                  res.send({err:1})
                }
              })
            }else {
              Model1.update({userPhone:reqObj.userphone},{$set:{address5:reqObj.people+':'+reqObj.area+':'+reqObj.detailarea+':'+reqObj.phone+':'+reqObj.userphone}},{multi:true},function (err) {
                if (!err){
                  res.send({err:1})
                }
              })
            }
          }
        }
      }
    }
  })

})

//地址管理
app.get("/area",function (req,res) {
  var reqObj = req.query;
  Model1.find({userPhone:reqObj.userPhone},function (err,doc) {
    if (!err){
        console.log(doc)
        res.send({data:doc})
    }
  })
})
 //修改密码
app.get("/changepassword",function (req,res) {
    var reqObj = req.query;
  Model.find({userPhone:reqObj.userPhone},function (err,doc) {
    if(doc.length){
      Model.update({userPhone:reqObj.userPhone},{$set:{passWord:reqObj.passWord}},{multi:true},function (err) {
        if(!err){
          res.send({err:1})
        }
      })
      }else {
      res.send({err:2})
    }
  })
})


//个人资料的后台
var userSchema2 = new mongoose.Schema({
  image:{type:String},
  name:{type:String,default:""},
  gender:{type:String,default:""},
  birthday:{type:String,default:""},
  phone:{type:String,default:""},
  userPhone:{type:String,default:""},

},{collection:"peopledata"});

var Model2 = db.model("peopledata",userSchema2);
app.get("/peopledata",function (req,res) {
  var reqObj = req.query;
  Model2.find({userPhone:reqObj.userPhone}, function (err, doc) {
    console.log(doc.length)
    if (doc.length) {
      Model2.update({userPhone:reqObj.userPhone},{$set:{image:reqObj.image,name:reqObj.name,gender:reqObj.gender,birthday:reqObj.birthday,phone:reqObj.phone,userPhone:reqObj.userPhone}},{multi:true},function (err) {
        if(!err){
          console.log(1)
          res.send({err:1})
        }
      })
  }else {
      console.log(2)
      Model2.create({image:reqObj.image,name:reqObj.name,gender:reqObj.gender,birthday:reqObj.birthday,phone:reqObj.phone,userPhone:reqObj.userPhone},function (err,doc) {
        if(!err){
          res.send({err:1})
        }
      })
    }
  })

})

app.get("/people",function (req,res) {
  var reqObj = req.query;
  Model2.find({userPhone:reqObj.userPhone}, function (err, doc) {
    if (doc.length) {
      // console.log(doc)
      res.send({image:doc[0].image,name:doc[0].name,gender:doc[0].gender,birthday:doc[0].birthday,phone:doc[0].phone})
    }
  })
})

app.listen(8080)
