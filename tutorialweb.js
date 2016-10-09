//Define Variables
var express = require("express");
var app = express();
var path = require("path");

//Create port
var port = process.env.PORT;
app.listen(port, function(){
    console.log("SERVER RUNNING\nPORT: " + port);
});

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));
app.use(express.static(path.resolve(__dirname, "client")));

//Set first route
app.get('/', function(req, res){
   res.render("test.ejs"); 
});
