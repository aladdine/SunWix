(function(){

	'use strict';

	var mongoose = require("mongoose");

	var api_schema = mongoose.Schema({
		submittedBy: {
			required: true,
			type: mongoose.Schema.Types.ObjectId
		},
		name: {
			required: true,
			type: String
		},
		description: {
			required: true,
			type: String
		},
		base_url: {
			required: true,
			type: String
		},
		documentation_url: {
			required: true,
			type: String
		},
		lastEdited: {

		},
		addedOn: {
			
		} 
	});

	var api = module.exports = mongoose.model("api", api_schema);

	// get all apis
	module.exports.getAllapis = function(callback){
		var query = {};
		api.find(query,callback);
	}

	module.exports.getOneapiById = function(id, callback){
		api.findById(id, callback);
	}

	module.exports.addOneapi = function(api_info, callback) {
		var add = api_info;
		api.create(add,callback);
	}

	module.exports.updateOneapi = function(id, new_api_info, options, callback) {
		
		var query = {
			_id: id
		}

		var data = new_api_info;
		api.findOneAndUpdate(query, data, options, callback);
	}

	module.exports.deleteOneapi = function(id, callback){
		
		var query = {
			_id: id
		}
		
		api.remove(query, callback);
	}

})()