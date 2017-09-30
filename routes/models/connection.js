var express = require('express');
var mysql=require('mysql');
var connection=mysql.createConnection({
	host:'localhost',
	port:'3307',
	user:'node',
	password:'1234',
	database:'apok'

});
connection.connect();
module.exports=connection;
