var express= require('express');
var cookieParser= require('cookie-parser');
var mysql=require('mysql');
var multer = require('multer');
var bodyParser=require('body-parser');
var app = express();


var usuarios=require('./routes/usuarios');
var accesos=require('./routes/accesos');


app.use(bodyParser.json()); // support json encoded bodies

app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cookieParser());
app.use(function(req,res,next){
res.header("Access-Control-Allow-Origin", "*");
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
console.log('Se hizo una peticion '+req.method+' el '+Date.now() +' en el URL:'+req.originalUrl);
next();
});










app.use('/usuarios',usuarios);
app.use('/accesos',accesos)

app.listen(3000)
