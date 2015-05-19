var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/', function(request, response){
	response.sendfile('index.html');
});

server.listen(3000, function(){
	console.log("Server is listening on port 3000");
});

module.exports = server;