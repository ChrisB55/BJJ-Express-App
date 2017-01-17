var express = require ('express');

var app = express();

var port = 4000;

app.get('/', function(req,res){
    res.send('Hello Home Page update test');
});
app.use (express.static('public'));
app.use (express.static('src/views'));

app.get('/guard', function(req,res){
    res.send('Hello Guard');
});

app.get('/topgame', function(req,res){
    res.send('Hello Top Game');
});

app.get('/buttomgame', function(req,res){
    res.send('Hello Buttom Game');
});

app.get('/takedowns', function(req,res){
    res.send('Hello takedowns');
});

app.listen(port,function(err){
    console.log('running server on port' + port)
});