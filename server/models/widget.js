(function(){

	'use strict';

	var mongoose = require("mongoose");

	var widget_schema = mongoose.Schema({
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
		code_snippet: {
			required: true,
			type: String
		},
		documentation_url: {
			required: true,
			type: String
		}
	});

	var widget = module.exports = mongoose.model("widget", widget_schema);

	// get all widgets
	module.exports.getAllwidgets = function(callback){
		var query = {};
		widget.find(query,callback);
	}

	module.exports.getOnewidgetById = function(id, callback){
		widget.findById(id, callback);
	}

	module.exports.addOnewidget = function(widget_info, callback) {
		var add = widget_info;
		widget.create(add,callback);
	}

	module.exports.updateOnewidget = function(id, new_widget_info, options, callback) {
		
		var query = {
			_id: id
		}

		var data = new_widget_info;
		widget.findOneAndUpdate(query, data, options, callback);
	}

	module.exports.deleteOnewidget = function(id, callback){
		
		var query = {
			_id: id
		}
		
		widget.remove(query, callback);
	}

})()