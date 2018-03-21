// var MongoClient = require('mongodb').MongoClient

// module.exports = {

// getData : function(req, res){
 
// MongoClient.connect('mongodb://127.0.0.1:27017/test', function (err, db) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("successfully connected to the database");
//     //console.log(db)
//     var temp = db.db('test');

//     var cur = temp.collection('travel').find();

//     var a = []
//     cur.each(function(err,doc) {
//     	//console.log(doc)
//     	a.push(doc)
//     });

//    res.ok(a);
// }
   
// });

// }

// }