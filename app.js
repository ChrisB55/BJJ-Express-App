var express = require ('express');

var app = express();

var port = 4000;

app.get('/', function(req,res){
    res.send('Hello Home Page');
});

app.get('/guard', function(req,res){
    res.send('Hello Guard');
});

app.get('/passing', function(req,res){
    res.send('Hello Passing');
});

app.listen(port,function(err){
    console.log('running server on port' + port)
});