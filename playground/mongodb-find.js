const MongoClient = require('mongodb').MongoClient;

// Connect to Mongodb this way
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true} ,function(err, client) {
    if (err) {
        return console.log('Unable to connect to MongoDB database');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({completed: true}).toArray()
    // .then(function(docs) {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, function(err) {
    //     console.log('Unable to fetch', err);
    // });

    db.collection('Todos').find().count()
    .then(function(count) {
        console.log('Todos count: ', count);
    }, function(err) {
        console.log('Unable to fetch', err);
    });

    // Close the connection
    client.close();
});