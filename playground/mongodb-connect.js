const MongoClient = require('mongodb').MongoClient;

// Connect to Mongodb this way
MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err,db) {
    if (err) {
        return console.log('Unable to connect to MongoDB database');
    }
    console.log('Connected to MongoDB server');
    // Close the connection
    db.close();
});