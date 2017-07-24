/**
 * Created by lanouhn on 17/7/20.
 */
var app = require("express")();
var bodyParser=require("body-parser");
var urlencodeParser=bodyParser.urlencoded();


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
  }
});


app.listen(8080);
