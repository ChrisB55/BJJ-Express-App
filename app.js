var express = require('express');

var app = express();

var port = 4000;
var nav = [{
    Link: '/escapes',
    Text: 'Escapes'
    }, {
    Link: '/attacks',
    Text: 'By attack'
    }];
var escapesRouter = require('./src/routes/escapesRoutes')(nav);

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');


app.use('/escapes', escapesRouter);

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from render',
        nav: [{
            Link: '/escapes',
            Text: 'escapes'
        }, {
            Link: '/Attacks',
            Text: 'By Attack'
        }]
    });
});

app.get('/escapes', function (req, res) {
    res.send('Hello escapes');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});