const http = require('http');
const url = require('url');
const static = require('node-static');
const file = new static.Server('.', {
  cache: 0
});

function accept(req, res) {
    var datetime = new Date();
    if (req.url == '/vote') { 
      res.write("Your vote is acepted: " + datetime);
      res.end();
    } else {
    file.serve(req, res);
  }
}

// ------ run -------
if (!module.parent) {
  http.createServer(accept).listen(8080);
  console.log("Server running at http://localhost:8080");
} else {
  exports.accept = accept;
}