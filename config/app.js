var express = require("express");
var app = express();
var path = require("path");
var viewsDirectory = path.join(process.env.PWD + "/views/");

module.exports = {
  setup: function() {
    app.get("/", function(req, res){
      res.sendFile(viewsDirectory + "index.html");
    });
  },
  startServer: function() {
    var server = app.listen(3000, function(){
      var host = server.address().address;
      var port = server.address().port;
      console.log("Server up @ http://%s:%s", host, port);
    });
  }
}
