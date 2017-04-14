(function(){

	'use strict';

	var express = require("express");
	var router = express.Router();

	var review = require("../models/review.js");
	
	// getting all reviews
	router.get('/', function(req,res){
		review.getAllreviews(function(err,reviews){
			if(err){
				res.send({error : err});
			} else {
				res.send({results:reviews});
			}
		});
	});

	// getting one review
	router.get('/:id', function(req,res){
		review.getOnereviewById(req.params.id,function(err,review){
			if(err){
				res.send({error : err});
			} else {
				res.send({results:review});
			}
		});
	});

	// add one review
	router.post('/', function(req,res){
		var review_info = req.body;
		review.addOnereview(review_info, function(err,review){
			if(err){
				res.send({error : err});
			} else {
				res.send({message:"review added successfully"});
			}
		});
	
	});

	// updating one review
	router.put('/:id', function(req,res){
		
		var review_id = req.params.id;
		var new_review_info = req.body;
		
		review.updateOnereview(review_id, new_review_info, {}, function(err,review){
			if(err){
				res.send({error : err});
			} else {
				res.send({message:"review updated successfully"});
			}
		});
		
	});

	// deleting one car
	router.delete('/:id', function(req,res){
		
		var review_id = req.params.id;

		review.deleteOnereview(review_id, function(err,review){
			if(err){
				res.send({error : err});
			} else {
				res.send({message:"review deleted successfully"});
			}
		});
		
	});

	module.exports = router;

})();