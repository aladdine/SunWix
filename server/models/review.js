(function(){

	'use strict';

	var mongoose = require("mongoose");

	var review_schema = mongoose.Schema({
		submittedBy: {
			required: true,
			type: mongoose.Schema.Types.ObjectId
		},
		reviewed_item: {
			required: true,
			type: mongoose.Schema.Types.ObjectId
		},
		item_type: {
			required: true,
			type: String
		},
		review_content: {
			required: true,
			type: String
		},
		lastEdited: {

		},
		addedOn: {
			
		} 
	});

	var review = module.exports = mongoose.model("review", review_schema);

	// get all reviews
	module.exports.getAllreviews = function(callback){
		var query = {};
		review.find(query,callback);
	}

	module.exports.getOnereviewById = function(id, callback){
		review.findById(id, callback);
	}

	module.exports.addOnereview = function(review_info, callback) {
		var add = review_info;
		review.create(add,callback);
	}

	module.exports.updateOnereview = function(id, new_review_info, options, callback) {
		
		var query = {
			_id: id
		}

		var data = new_review_info;
		review.findOneAndUpdate(query, data, options, callback);
	}

	module.exports.deleteOnereview = function(id, callback){
		
		var query = {
			_id: id
		}
		
		review.remove(query, callback);
	}

})()