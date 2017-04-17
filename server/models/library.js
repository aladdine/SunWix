(function(){

	'use strict';

	var mongoose = require("mongoose");

	var library_schema = mongoose.Schema({
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
		cdn: {
			required: true,
			type: String
		},
		website: {
			type: String	
		},
		repo: {
			type: String	
		}
	});

	var library = module.exports = mongoose.model("library", library_schema);

	// get all datasets
	module.exports.getAlllibraries = function(callback){
		var query = {};
		library.find(query,callback);
	}

	module.exports.getOnelibraryById = function(id, callback){
		library.findById(id, callback);
	}

	module.exports.addOnelibrary = function(library_info, callback) {
		var add = library_info;
		library.create(add,callback);
	}

	module.exports.updateOnelibrary = function(id, new_library_info, options, callback) {
		
		var query = {
			_id: id
		}

		var data = new_library_info;
		library.findOneAndUpdate(query, data, options, callback);
	}

	module.exports.deleteOnelibrary = function(id, callback){
		
		var query = {
			_id: id
		}
		
		library.remove(query, callback);
	}

})()