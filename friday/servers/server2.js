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
link.query("SELECT * FROM product_list",function (err,rows,fields) {
  console.log(rows);
});




//关闭
link.end();


app.listen(8080);
