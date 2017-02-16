var express = require('express');
var escapeRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var router = function(nav) {
    escapeRouter.route('/')
    .get(function (req, res) {
        var url =
                'mongodb://localhost:27017/bjjApp';

        mongodb.connect(url, function (err, db) {
            var collection = db.collection('units');

            collection.find({}).toArray(
                function (err, results) {
                    res.render ('escapeListView', {
                        title: 'units',
                        nav:nav,
                        units: results
                    });
                }
            );

        });
    });
    escapeRouter.route('/:id')
        .get(function (req, res) {
            var id = new objectId(req.params.id);
            var url =
                'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('units');

                collection.findOne({_id: id},
                    function (err, results) {
                        res.render('escapeView', {
                            title: 'units',
                            nav: nav,
                            unit: results
                        });

                    }
                );

            });

        });
    return escapeRouter;
};
module.exports = router;