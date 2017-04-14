(function(){
	
	'use strict'

	var express = require("express");
	var app = express();
	var bodyParser = require("body-parser");
	var mongoose = require("mongoose");

	var apis = require("./routes/apis");
	var widgets = require("./routes/widgets");
	var users = require("./routes/users");
	var datasets = require("./routes/datasets");
	var reviews = require("./routes/datasets");

	app.use(
		bodyParser.urlencoded({
			extended: true
		})
	);

	app.use(bodyParser.json());

	app.use(express.static(__dirname + './../client'));

	app.get('/', function(req, res){
		res.sendFile(__dirname + "./../client/index.html");
	    console.log("requested ")
	});
	

	mongoose.connect('mongodb://localhost/sunwix');
	var db = mongoose.connection;

	app.get('/', function (req,res){
		res.send({"message":"API running..."});
	});

	app.use("/api/apis", apis);
	app.use("/api/widgets", widgets);
	app.use("/api/users", users);
	app.use("/api/datasets", datasets);
	app.use("/api/reviews", reviews);

	// Make API endpoints accessible via port 3000
	app.listen("3000", function(){
		console.log("running on port 3000");
	});

})();