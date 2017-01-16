var express = require ('express');

var app = express();

var port = 4000;
app.get ('/', function (req, res){
    res.send('Simple Routing Test');
});

app.listen(port,function(err){
    console.log('running server on port' + port)
});