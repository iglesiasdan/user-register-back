var express = require('express');
var router= express.Router();
var http = require('http');
var connection=require('./models/connection');
var usuario=require('./models/usuarios');
var bodyParser=require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

router.get('/',function(req,res){

	usuario.get(function(data){
		res.setHeader('Content-Type', 'application/json');
    	res.send(JSON.stringify(data));
	});
});
router.get('/:id',function(req,res){
	usuario.show(req.params.id,function(data){
		res.setHeader('Content-Type', 'application/json');
    	res.send(JSON.stringify(data));
	});
});
router.post('/',function(req,res){
			console.log(req.body);
	    	usuario.insert(req.body,function(data){
    		res.setHeader('Content-Type','application/json');
    		res.send(JSON.stringify(data));
    	})
});
router.get('/accesos/:id',function(req,res){
	usuario.list(req.params.id,function(data){
		res.setHeader('Content-Type', 'application/json');
    	res.send(JSON.stringify(data));
	});
});
router.put('/:id',function(req,res){
	
		usuario.update(req.params.id,req.body,function(data){
			res.setHeader('Content-Type','application/json');
			res.send(JSON.stringify(data));
		});
});
router.delete('/:id',function(req,res){
	usuario.delete(req.params.id,function(data){
		res.setHeader('Content-Type', 'application/json');
    	res.send(JSON.stringify(data));
	});
});
module.exports= router;
