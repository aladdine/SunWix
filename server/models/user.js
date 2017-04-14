(function(){

	'use strict';

	var mongoose = require("mongoose");

	var user_schema = mongoose.Schema({
		first_name: {
			required: true,
			type: String
		},
		last_name: {
			required: true,
			type: String
		},
		email: {
			required: true,
			type: String
		},
		affiliation: {
			required: true,
			type: String
		}
	});

	var user = module.exports = mongoose.model("user", user_schema);

	// get all users
	module.exports.getAllUsers = function(callback){
		var query = {};
		user.find(query,callback);
	}

	module.exports.getOneUserById = function(id, callback){
		user.findById(id, callback);
	}

	module.exports.addOneUser = function(user_info, callback) {
		var add = user_info;
		user.create(add,callback);
	}

	module.exports.updateOneUser = function(id, new_user_info, options, callback) {
		
		var query = {
			_id: id
		}

		var data = new_user_info;
		user.findOneAndUpdate(query, data, options, callback);
	}

	module.exports.deleteOneUser = function(id, callback){
		
		var query = {
			_id: id
		}
		
		user.remove(query, callback);
	}

})()