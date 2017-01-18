var express = require('express');

var guardRouter = express.Router();

var guardMoves = [
    {
        move: 'Triangle',
        title: 'Closed Guard' 
        },
    {
        move: 'Sweep 1',
        title: 'Half Guard'
        },
    {
        move: 'Tripod Sweep',
        title: 'Open Guard'
        },
    {
        move: 'Windmill Sweep',
        title: 'Spider Guard'
        },
    {
        move: 'Straight Arm-bar',
        title: 'Butterfly Guard'
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
            Text: 'Top Game'
        }, {
            Link: '/escapes', 
            Text: 'Escapes'
        }, { 
            Link:'/takedowns', 
            Text: 'Takedowns'
        }], 
        guardMoves:guardMoves 
        });
});

    guardRouter.route('/half')
    .get(function(req, res) {
        res.send('hello half guard');
    });


    module.exports = guardRouter;
