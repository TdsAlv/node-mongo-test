const MongoClient = require('mongodb').MongoClient;

// Connect to Mongodb this way
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true}, function(err, client) {
    if (err) {
        return console.log('Unable to connect to MongoDB database');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Walk the tog'})
    // .then(function(result) {
    //     console.log(result);
    // }, function(err) {
    //     console.log('Unable to delete', err);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Walk the sun'})
    // .then(function(result) {
    //     console.log(result);
    // }, function(err) {
    //     console.log('Unable to delete', err);
    // });

    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({text: 'Walk the sun'})
    .then(function(result) {
        console.log(result);
    }, function(err) {
        console.log('Unable to delete', err);
    });

    // Close the connection
    client.close();
});