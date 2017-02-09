var express = require('express');
//var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 4000;
var nav = [{
    Link: '/escapes',
    Text: 'Escapes'
},
{
    Link: '/attacks',
    Text: 'By attack'
}];
var escapesRouter = require('./src/routes/escapesRoutes')(nav);
//var adminRouter = require('./src/routes/adminRoutes')(nav);
//var authRouter = require('./src/routes/authRoutes')(nav);

app.use(express.static('public'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/escapes', escapesRouter);
//app.use('/admin', adminRouter);
//app.use('/auth', authRouter);

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from render',
        nav: [{
            Link: '/escapes',
            Text: 'Escapes'
        }, {
            Link: '/Attacks',
            Text: 'By Attack'
        }]
    });
});

app.get('/escapes', function (req, res) {
    res.send('Hello escapes');
});

app.get('/attacks', function (req, res) {
    res.send('Coming Soon');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});