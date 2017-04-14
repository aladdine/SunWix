(function(){

	'use strict';

	var express = require("express");
	var router = express.Router();

	var api = require("../models/api.js");
	
	// getting all apis
	router.get('/', function(req,res){
		api.getAllapis(function(err,apis){
			if(err){
				res.send({error : err});
			} else {
				res.send({results:apis});
			}
		});
	});

	// getting one api
	router.get('/:id', function(req,res){
		api.getOneapiById(req.params.id,function(err,api){
			if(err){
				res.send({error : err});
			} else {
				res.send({results:api});
			}
		});
	});

	// add one api
	router.post('/', function(req,res){
		var api_info = req.body;
		api.addOneapi(api_info, function(err,api){
			if(err){
				res.send({error : err});
			} else {
				res.send({message:"api added successfully"});
			}
		});
	
	});

	// updating one api
	router.put('/:id', function(req,res){
		
		var api_id = req.params.id;
		var new_api_info = req.body;
		
		api.updateOneapi(api_id, new_api_info, {}, function(err,api){
			if(err){
				res.send({error : err});
			} else {
				res.send({message:"api updated successfully"});
			}
		});
		
	});

	// deleting one car
	router.delete('/:id', function(req,res){
		
		var api_id = req.params.id;

		api.deleteOneapi(api_id, function(err,api){
			if(err){
				res.send({error : err});
			} else {
				res.send({message:"api deleted successfully"});
			}
		});
		
	});

	module.exports = router;

})();