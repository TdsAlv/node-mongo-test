const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect to Mongodb this way
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true}, function(err, client) {
    if (err) {
        return console.log('Unable to connect to MongoDB database');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate(
        {_id : new ObjectID('5afc3e0efc470418cc69d8c2')},
        {$set: {
            text: 'Even something else to do'
        }},
        {returnOriginal: false}
        )
        .then(function(result) {
            return console.log(result);
        });

    // Close the connection
    client.close();
});