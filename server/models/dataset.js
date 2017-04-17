(function(){

	'use strict';

	var mongoose = require("mongoose");

	var dataset_schema = mongoose.Schema({
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
		url: {
			required: true,
			type: String
		}
	});

	var dataset = module.exports = mongoose.model("dataset", dataset_schema);

	// get all datasets
	module.exports.getAlldatasets = function(callback){
		var query = {};
		dataset.find(query,callback);
	}

	module.exports.getOnedatasetById = function(id, callback){
		dataset.findById(id, callback);
	}

	module.exports.addOnedataset = function(dataset_info, callback) {
		var add = dataset_info;
		dataset.create(add,callback);
	}

	module.exports.updateOnedataset = function(id, new_dataset_info, options, callback) {
		
		var query = {
			_id: id
		}

		var data = new_dataset_info;
		dataset.findOneAndUpdate(query, data, options, callback);
	}

	module.exports.deleteOnedataset = function(id, callback){
		
		var query = {
			_id: id
		}
		
		dataset.remove(query, callback);
	}

})()