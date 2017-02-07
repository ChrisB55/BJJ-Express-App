var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var router = function (nav) {

    adminRouter.route('/additems')
        .get(function (req,res) {
            var url =
                'mongodb://localhost27017/BJJ-SiteApp';

            mongodb.connect(url, function (err, db) {
                    var collection = db.collection(items);
                    collection.insertMany(items,
                        function(err, results){
                            res.send(results)
                            db.close();
                        });
                });


        });

    return adminRouter;
};

module.exports = router;