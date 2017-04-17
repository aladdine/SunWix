(function(){

	'use strict';

	var express = require("express");
	var router = express.Router();

	var library = require("../models/library.js");
	
	// getting all libraries
	router.get('/', function(req,res){
		library.getAlllibraries(function(err,libraries){
			if(err){
				res.send({error : err});
			} else {
				res.send({results:libraries});
			}
		});
	});

	// getting one library
	router.get('/:id', function(req,res){
		library.getOnelibraryById(req.params.id,function(err,library){
			if(err){
				res.send({error : err});
			} else {
				res.send({results:library});
			}
		});
	});

	// add one library
	router.post('/', function(req,res){
		var library_info = req.body;
		library.addOnelibrary(library_info, function(err,library){
			if(err){
				res.send({error : err});
			} else {
				res.send({results: library});
			}
		});
	
	});

	// updating one library
	router.put('/:id', function(req,res){
		
		var library_id = req.params.id;
		var new_library_info = req.body;
		
		library.updateOnelibrary(library_id, new_library_info, {}, function(err,library){
			if(err){
				res.send({error : err});
			} else {
				res.send({results: library});
			}
		});
		
	});

	// deleting one library
	router.delete('/:id', function(req,res){
		
		var library_id = req.params.id;

		library.deleteOnelibrary(library_id, function(err,library){
			if(err){
				res.send({error : err});
			} else {
				res.send({results: library});
			}
		});
		
	});

	module.exports = router;

})();