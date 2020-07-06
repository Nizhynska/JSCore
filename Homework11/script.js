//task1
var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});  
    var os = require("os");
    var path = require('path');
   var minut =  Math.floor(os.uptime() % (60*60) / 60)
    response.write(os.userInfo().username + os.type() + minut + path.dirname(' '));
    response.end();
    
}).listen(5000);

//task2
var http = require("http");
var module = require("./personalmodule.js");
http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    var os = require("os");
    let userName = os.userInfo().username;
    var datetime = new Date();
    response.write("Date of request:" + datetime);

    module(userName, datetime, response); 
    response.end();
    
}).listen(8000);
