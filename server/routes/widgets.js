(function(){

	'use strict';

	var express = require("express");
	var router = express.Router();

	var widget = require("../models/widget.js");
	
	// getting all widgets
	router.get('/', function(req,res){
		widget.getAllwidgets(function(err,widgets){
			if(err){
				res.send({error : err});
			} else {
				res.send({results:widgets});
			}
		});
	});

	// getting one widget
	router.get('/:id', function(req,res){
		widget.getOnewidgetById(req.params.id,function(err,widget){
			if(err){
				res.send({error : err});
			} else {
				res.send({results:widget});
			}
		});
	});

	// add one widget
	router.post('/', function(req,res){
		var widget_info = req.body;
		widget.addOnewidget(widget_info, function(err,widget){
			if(err){
				res.send({error : err});
			} else {
				res.send({message:"widget added successfully"});
			}
		});
	
	});

	// updating one widget
	router.put('/:id', function(req,res){
		
		var widget_id = req.params.id;
		var new_widget_info = req.body;
		
		widget.updateOnewidget(widget_id, new_widget_info, {}, function(err,widget){
			if(err){
				res.send({error : err});
			} else {
				res.send({message:"widget updated successfully"});
			}
		});
		
	});

	// deleting one car
	router.delete('/:id', function(req,res){
		
		var widget_id = req.params.id;

		widget.deleteOnewidget(widget_id, function(err,widget){
			if(err){
				res.send({error : err});
			} else {
				res.send({message:"widget deleted successfully"});
			}
		});
		
	});

	module.exports = router;

})();