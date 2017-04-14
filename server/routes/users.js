(function(){

	'use strict';

	var express = require("express");
	var router = express.Router();

	var user = require("../models/user.js");
	
	// getting all users
	router.get('/', function(req,res){
		user.getAllUsers(function(err,users){
			if(err){
				res.send({error : err});
			} else {
				res.send({results:users});
			}
		});
	});

	// getting one user
	router.get('/:id', function(req,res){
		user.getOneUserById(req.params.id,function(err,user){
			if(err){
				res.send({error : err});
			} else {
				res.send({results:user});
			}
		});
	});

	// add one user
	router.post('/', function(req,res){
		var user_info = req.body;
		user.addOneUser(user_info, function(err,user){
			if(err){
				res.send({error : err});
			} else {
				res.send({message:"user added successfully"});
			}
		});
	
	});

	// updating one user
	router.put('/:id', function(req,res){
		
		var user_id = req.params.id;
		var new_user_info = req.body;
		
		user.updateOneUser(user_id, new_user_info, {}, function(err,user){
			if(err){
				res.send({error : err});
			} else {
				res.send({message:"user updated successfully"});
			}
		});
		
	});

	// deleting one car
	router.delete('/:id', function(req,res){
		
		var user_id = req.params.id;

		user.deleteOneUser(user_id, function(err,user){
			if(err){
				res.send({error : err});
			} else {
				res.send({message:"user deleted successfully"});
			}
		});
		
	});

	module.exports = router;

})();