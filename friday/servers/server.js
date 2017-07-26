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
     res.send({err:2})
    }else {
      Model.create({userPhone:reqObj.userPhone,passWord:reqObj.passWord,score:0,money:0},function (err,doc) {
        if(!err){
          res.send({err:1})
        }
      })
    }
  })

})

//7月25 登录页面的改变
app.get("/confirm",function (req,res) {
  var reqObj = req.query;
  Model.find({userPhone:reqObj.userPhone},function (err,doc) {
    if (doc.length){
      res.send({err:1})

    }
})
})

/*****************/


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
        // console.log(doc)
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
        // console.log(doc)
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
        // console.log(doc)
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
          // console.log(1)
          res.send({err:1})
        }
      })
  }else {
      // console.log(2)
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
});



//连接mysql
var mysql=require("mysql");
var link=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"Tenseven"
});
link.connect();

//查询表
app.get("/index",function (req, res) {
  var act=req.query.act;
  switch (act){
    case "count1":
      link.query("SELECT * FROM product_list WHERE kind='水果'",function (err,rows,fields) {
        res.send(rows);
      });
      break;
    case "count2":
      link.query("SELECT * FROM product_list WHERE kind='海鲜'",function (err,rows,fields) {
        res.send(rows);
      });
      break;
    case "count3":
      link.query("SELECT * FROM product_list WHERE kind='肉类'",function (err,rows,fields) {
        res.send(rows);
      });
      break;
    case "count4":
      link.query("SELECT * FROM product_list WHERE kind='速食'",function (err,rows,fields) {
        res.send(rows);
      });
      break;
  };
});

app.get("/detail",function (req, res) {
  var id=req.query.id;
  link.query("SELECT * FROM product_list WHERE id="+id,function (err,rows,fields) {
    // console.log(rows[0].detailImg.split("$"));
    var data={
      id:rows[0].id,
      oldPrice:rows[0].oldPrice,
      newPrice:rows[0].newPrice,
      detail:rows[0].detail,
      imglist:rows[0].detailImg.split("$"),
      name:rows[0].name,
    };
    res.send(data);
  });

});

app.get("/addshoppingcar",function (req, res) {
  var userPhone=req.query.userPhone;
  var goodsId=req.query.goodsId;
  link.query("SELECT * FROM shoppingcar WHERE userPhone="+userPhone,function (err,rows,fields) {
    if(rows.length==0){
      link.query("INSERT INTO shoppingcar(userPhone,goods) VALUES("+userPhone+", "+goodsId+")",function (err,result) {
        if(!err){
          res.send({err:1});
        }
      })
    }else {
      var goods=rows[0].goods+"$"+goodsId;
      link.query("UPDATE shoppingcar SET goods='"+goods+"' WHERE userPhone="+userPhone,function (err,result) {
        if(!err){
          res.send({err:2,goods:goods});
        }
      });
    }
  });
});

app.get('/shoppingcar',function (req, res) {
  var act=req.query.act;
  var userPhone=req.query.userPhone;
  link.query("SELECT * FROM shoppingcar WHERE userPhone="+userPhone,function (err,rows,fields) {
    if (act=='num'){
      if(rows.length>0){
        var goods=rows[0].goods;
        res.send({err:1,goods:goods});
      }

    }
  });
});

app.get('/shopingcarDel',function (req, res) {
  var goods=req.query.goods;
  var userPhone=req.query.userPhone;
  link.query("UPDATE shoppingcar SET goods='"+goods+"' WHERE userPhone="+userPhone,function (err,result) {
    if (!err){
      res.send({err:1});
    }
  });
});

app.get('/delshoppingcar',function (req, res) {
  var userPhone=req.query.userPhone;
  link.query("DELETE FROM shoppingcar where userPhone="+userPhone,function (err,result) {
    if (!err){
      res.send({err:1});
    }
  });
});

app.get('/search',function (req, res) {
  var search=req.query.search;
  link.query("SELECT * FROM product_list WHERE kind like '%"+search+"%'",function (err,rows,fields) {
    if (!err){
      res.send({err:1,list:rows});
    }
  });
});

app.get('/searchfilter',function (req, res) {
  var search=req.query.search;
  var act=req.query.act;
  switch (act){
    case '4':
    case '1':
      link.query("SELECT * FROM product_list WHERE kind like '%"+search+"%'",function (err,rows,fields) {
        if (!err){
          res.send({err:1,list:rows});
        }
      });
      break;
    case '2':
      link.query("SELECT * FROM product_list WHERE kind like '%"+search+"%' ORDER BY newPrice ASC",function (err,rows,fields) {
        if (!err){
          res.send({err:1,list:rows});
        }
      });
      break;
    case '3':
      link.query("SELECT * FROM product_list WHERE kind like '%"+search+"%' ORDER BY newPrice DESC",function (err,rows,fields) {
        if (!err){
          res.send({err:1,list:rows});
        }
      });
      break;
  }

});

app.listen(8080)
