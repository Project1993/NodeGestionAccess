var express = require ("express");
var app = express();

app.get("/Hello", function(req, res){

 res.send("This is a warm Hellooooo");

});


app.listen(3000, function(){

  console.log("Application is running");
});
