var express = require('express');

var escapeRouter = express.Router();

var router = function(nav){
    var escapes = [
    {
        title: 'Hitchhicker',
        comments: 'TBD',
        attack: 'Armbar',
        links: 'TBD'
    },
    {
        title: 'Triangle Spin Out',
        comments: 'TBD',
        attack: 'Triangle',
        links: 'TBD'
        },
    {
        title: 'Kimura spin under',
        comments: 'TBD',
        attack: 'Kimura',
        links: 'TBD'
        },
    {
        title: 'Choke block',
        comments: 'TBD',
        attack: 'RNC',
        links: 'TBD'
        },
    {
        title: 'Footlook escape',
        comments: 'TBD',
        attack: 'Ankle lock',
        links: 'TBD'
        }
    ];
    escapeRouter.route('/')
    .get(function (req, res) {
        res.render('escapeListView', {
            title: 'escapes',
            nav: nav,
            escapes: escapes
        });
    });

    escapeRouter.route('/:id')
    .get(function (req, res) {
        var id = req.params.id;
        res.render('escapeView', {
            title: 'escapes',
            nav: nav,
            escape: escapes[id]
        });
    });
    
    return escapeRouter;
}
module.exports = router;