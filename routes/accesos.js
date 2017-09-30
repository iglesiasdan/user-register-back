var express=require('express');
var router= express.Router();
var http = require('http');
var connection=require('./models/connection');
var accesos=require('./models/accesos');
var bodyParser=require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

//DE AQUI
router.get('/',function(req,res){

	if(req.query.from && req.query.from.length >0){
		accesos.getFrom(req.query.from,function(data){
			res.setHeader('Content-Type', 'application/json');
				res.send(JSON.stringify(data));
		});
	}else {
		accesos.get(function(data){
			res.setHeader('Content-Type', 'application/json');
	    	res.send(JSON.stringify(data));
		});
	}


});

//HASTA AQUI
router.post('/',function(req,res){
	//cosole.log(req.body);
	//if (typeof req.body.nombre_agencia !== 'undefined'){
    	accesos.insert(req.body,function(data){
    		res.setHeader('Content-Type','application/json');
    		res.send(JSON.stringify(data));
    	})


});
router.put('/:id',function(req,res){
		accesos.update(req.params.id,req.body,function(data){
			res.setHeader('Content-Type','application/json');
			res.send(JSON.stringify(data));
		});
});
router.get('/:id',function(req,res){
	accesos.show(req.params.id,function(data){
		res.setHeader('Content-Type', 'application/json');
    	res.send(JSON.stringify(data));
	});
});
router.delete('/:id',function(req,res){
	accesos.delete(req.params.id,function(data){
		res.setHeader('Content-Type', 'application/json');
    	res.send(JSON.stringify(data));
	});
});
module.exports= router;
