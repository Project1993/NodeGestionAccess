var express = require ("express");
var app = express();
var twilio = require ("twilio");
var client = twilio.RestClient('AC1c4548dbab6cc1034acaacdc6b2db95e', '38d4b825a54df53631ae80daf0ac3a41');

var Call = function(toNUM){

  client.makeCall({to: toNUM, from: "+442033897525", url: "/voice" });

};

app.get("/Hello", function(req, res){

 res.send("vh");

});

app.post("/voice", function(req, res){

 var ToNumber = req.body.To;

 res.send("<Response><Say>Say your message</Say><Record  maxLength=20/></Response>");

});



app.listen(3000, function(){

  console.log("Application is running");
});
