var express = require('express');

var guardRouter = express.Router();

var guardMoves = [
    {
        move: 'Lockdown',
        title: 'Half Guard' 
        },
    {
        move: 'De La Riva',
        title: 'Open Guard'
        },
    {
        move: 'Spider Guard',
        title: 'Open Guard'
        },
    {
        move: '50-50',
        title: 'Seated Guard'
        },
    {
        move: 'Butterly',
        title: 'Open Guard'
        },
    {
        move: 'Ball and Chain',
        title: 'DRL'
        }
    ];

    guardRouter.route('/')
    .get(function(req, res) {
        res.render('guard', {
        title : 'render check', 
        nav: [{
            Link:'/guard', 
            Text: 'Guard'
        }, {
            Link:'/topgame', 
            Text: 'Top Game (Coming soon)'
        }, {
            Link: '/escapes', 
            Text: 'Escapes (Coming soon)'
        }, { 
            Link:'/takedowns', 
            Text: 'Takedowns (Coming soon)'
        }], 
        guardMoves:guardMoves 
        });
});

    guardRouter.route('/half')
    .get(function(req, res) {
        res.send('hello half guard');
    });


    module.exports = guardRouter;
