var fs = require("fs");
var http = require("http");
var url = require("url");

http.createServer(function(req,res){
  var addr = url.parse(req.url,true);
  var q = addr.pathname;
  var fileName = "." + q;
  fs.readFile(fileName, function(err, data){
    if(err){
      res.writeHead(404,{'content-Type':'text/html'});
      return res.end("404 not found")
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  })
}).listen(84);