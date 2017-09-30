var express= require('express');
var connection=require('./connection');
var bcrypt=require('bcrypt-nodejs');
var accesosModel={};
//DE AQUI
accesosModel.get=function(callback){
	connection.query('SELECT * from accesos ', function(err, rows, fields) {
	  if (err) throw err;
	  callback(rows);
	});
}
accesosModel.getFrom=function(id,callback){
	connection.query(`SELECT * FROM accesos WHERE ID_accesos>?`,[id],function(err, rows, fields) {
	  if (err) {
	  	rows={resp:'Error'};
	  };
	  callback(rows);
	});
}

//HASTA AQUI
accesosModel.insert=function(input,callback){
	connection.query('INSERT INTO accesos SET ?',input,function(err,rows,fields){
		callback({'Error':false,'id':rows.insertId,'message':'Registro insertado exitosamente'});
	})
}
accesosModel.update=function(id,input,callback){
	connection.query('UPDATE accesos set ID_usuario=?, NombreAccesso=?, Url=?, Contrasena=? WHERE ID_accesos=?',[input.ID_usuario,input.NombreAccesso,input.Url,input.Contrasena,id],function(err,rows,fields){
		callback({'Error':false,'affectedRows':rows.affectedRows,'message':'Registro actualizado exitosamente'});
	})
}
accesosModel.show=function(id,callback){
	connection.query('SELECT * from accesos where ID_accesos='+id, function(err, rows, fields) {
	  if (err) throw err;
	  callback(rows);
	});
}
accesosModel.delete=function(id,callback){
	connection.query('DELETE FROM accesos WHERE ID_accesos='+id, function(err, rows, fields) {
	  if (err) throw err;
	  callback({'Error':false,'affectedRows':rows.affectedRows,'message':'Registro eliminado exitosamente'});
	});
}

module.exports=accesosModel;
