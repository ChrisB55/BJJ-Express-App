var express = require('express');

var app = express();


var port = 4000;

var nav = [{
    Link:'/guard', 
    Text: 'Guard'
        }, {
    Link:'/topgame', 
    Text: 'Top Game'
        }, {
    Link: '/escapes', 
    Text: 'Escapes'
        }, { 
    Link:'/takedowns', 
    Text: 'Takedowns'
}];

var guardRouter = require('./src/routes/guardRoutes');

app.use(express.static('public'));

app.set('views', 'src/views');
app.set('view engine', 'ejs');

app.use ('/guard', guardRouter);

app.get('/', function(req,res){
    res.render('index', {
        title : 'render check', 
        nav: [{
            Link:'/guard', 
            Text: 'Guard'
        }, {
            Link:'/topgame', 
            Text: 'Top Game'
        }, {
            Link: '/escapes', 
            Text: 'Escapes'
        }, { 
            Link:'/takedowns', 
            Text: 'Takedowns'
        }]
    });
});


app.get('/guard', function(req,res){
    res.send('Hello Guard');
});

app.get('/topgame', function(req,res){
    res.send('Hello Top Game');
});

app.get('/escapes', function(req,res){
    res.send('Hello Escapes');
});

app.get('/takedowns', function(req,res){
    res.send('Hello takedowns');
});

app.listen(port,function(err){
    console.log('running server on port' + port)
});