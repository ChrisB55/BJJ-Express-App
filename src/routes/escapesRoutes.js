var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;


router.get('/', (req, res) => {
    req.db.collection('units')
            .find({})
            .toArray(function(err, results) {
                res.render ('escapeListView', {
                        title: 'units',
                        units: results
                    });
            });
});
router.get('/:id', (req, res) => {
    var _id = new ObjectId(req.params.id);
    req.db.collection('units')
            .findOne(
                {_id},
                (err, result) =>  {
                    res.render('escapeView', {
                        title: 'units',
                        unit: result
                    });

                });
});
module.exports = router;