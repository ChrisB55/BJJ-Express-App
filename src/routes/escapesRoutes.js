var express = require('express');

var escapeRouter = express.Router();

var router = function(nav){
    var units = [
    {
        title: 'Hitchhicker',
        description: 'Widely used against armbar from the mount.',
        attack: 'Armbar',
        examples: 'http://www.w3schools.com/'
        
        },
    {
        title: 'Triangle Spin Out',
        description:  'A strong escape against a leg triangle submission from the guard.',
        attack: 'Triangle',
        
        },
    {
        title: 'Kimura spin under',
        description:  'Used to counter a kimura submission from side control or north-south.',
        attack: 'Kimura',
        
        },
    {
        title: 'Choke block',
        description: 'A strategy to avoid being choked from the back.',
        attack: 'RNC',
        
        },
    {
        title: 'Footlook escape',
        description: 'One way to disentangle your legs and counter a basic ankle lock.',
        attack: 'Ankle lock',
        
        }
    ];
    escapeRouter.route('/')
    .get(function (req, res) {
        res.render('escapeListView', {
            title: 'List of Escapes',
            nav: nav,
            units: units
        });
    });

    escapeRouter.route('/:id')
    .get(function (req, res) {
        var id = req.params.id;
        res.render('escapeView', {
            title: 'Escape',
            nav: nav,
            unit: units[id]
        });
    });
    
    return escapeRouter;
}
module.exports = router;