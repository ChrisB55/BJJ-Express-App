var express = require('express');
var bodyParser = require('body-parser'); // Deprecated
var session = require('express-session'); // Deprecated
var cookieParser = require('cookie-parser');
var passport = require('passport');

var mongodb = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/bjjApp';
var db;
mongodb.connect(url, function (err, connection) {
    if (err) {
        console.log('Error:', err);
        process.exit(-1);
    }
    console.log('DB Connected');
    db = connection;
});

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
var escapesRouter = require('./src/routes/escapesRoutes');
var adminRouter = require('./src/routes/adminRoutes')(nav);
var authRouter = require('./src/routes/authRoutes')(nav);


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(session({secret:'bjj'}));
app.use(function(req, res, next) {
    req.db = db;
    next();
});
app.locals.nav = nav;

require('./src/auth/passport')(app);

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/escapes', escapesRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);

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