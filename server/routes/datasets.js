(function(){

	'use strict';

	var express = require("express");
	var router = express.Router();

	var dataset = require("../models/dataset.js");
	
	// getting all datasets
	router.get('/', function(req,res){
		dataset.getAlldatasets(function(err,datasets){
			if(err){
				res.send({error : err});
			} else {
				res.send({results:datasets});
			}
		});
	});

	// getting one dataset
	router.get('/:id', function(req,res){
		dataset.getOnedatasetById(req.params.id,function(err,dataset){
			if(err){
				res.send({error : err});
			} else {
				res.send({results:dataset});
			}
		});
	});

	// add one dataset
	router.post('/', function(req,res){
		var dataset_info = req.body;
		dataset.addOnedataset(dataset_info, function(err,dataset){
			if(err){
				res.send({error : err});
			} else {
				res.send({message:"dataset added successfully"});
			}
		});
	
	});

	// updating one dataset
	router.put('/:id', function(req,res){
		
		var dataset_id = req.params.id;
		var new_dataset_info = req.body;
		
		dataset.updateOnedataset(dataset_id, new_dataset_info, {}, function(err,dataset){
			if(err){
				res.send({error : err});
			} else {
				res.send({message:"dataset updated successfully"});
			}
		});
		
	});

	// deleting one car
	router.delete('/:id', function(req,res){
		
		var dataset_id = req.params.id;

		dataset.deleteOnedataset(dataset_id, function(err,dataset){
			if(err){
				res.send({error : err});
			} else {
				res.send({message:"dataset deleted successfully"});
			}
		});
		
	});

	module.exports = router;

})();