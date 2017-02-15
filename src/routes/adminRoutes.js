var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var units = [
    {
        title: 'Hitchhicker',
        description: 'Widely used against armbar from the mount.',
        attack: 'Armbar',
        examples: 'https://www.youtube.com/watch?v=ShV9jUhbyLA'
    },
    {
        title: 'Triangle Spin Out',
        description:  'A strong escape against a leg triangle submission from the guard.',
        attack: 'Triangle',
        examples: 'https://www.youtube.com/watch?v=szAvJFvIzx4'

    },
    {
        title: 'Kimura spin under',
        description:  'Used to counter a kimura submission from side control or north-south.',
        attack: 'Kimura',
        examples: 'https://www.youtube.com/watch?v=AvtbqzGBVDA&list=PLRWboZ2QTrrtVqF0sQCzQgp4NvqFwNMKd&index=15'

    },
    {
        title: 'Choke defense',
        description: 'A strategy to avoid being choked from the back.',
        attack: 'RNC',
        examples: 'https://www.youtube.com/watch?v=JR2e0IsqhrQ'

    },
    {
        title: 'Footlook escape',
        description: 'One strategy to disentangle your legs and counter a basic ankle lock.',
        attack: 'Ankle lock',
        examples: 'https://www.youtube.com/watch?v=_VUybC7nCuE'

    }
    ];
var router = function (nav) {

    adminRouter.route('/addUnits')
        .get(function (req, res) {
            var url =
                'mongodb://localhost:27017/bjjApp';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('units');
                collection.insertMany(units,
                    function (err, results) {
                        res.send(results);
                        db.close();
                    }
                );

            });

            //res.send('adding moves');
        });

    return adminRouter;
};

module.exports = router;

