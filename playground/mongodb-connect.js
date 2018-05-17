const MongoClient = require('mongodb').MongoClient;

// Connect to Mongodb this way
MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, client) {
    if (err) {
        return console.log('Unable to connect to MongoDB database');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // Add some data to the TodoApp collection. You don't need to create it, just insert data into it and thats it.
    db.collection('Todos').insertOne({
        text: 'Walk the sun',
        completed: true
    },
    function(err, result) {
        if (err) {
            return console.log('Error inserting data!', err);
        }
        // If everything is ok, print the results to the terminal.
        console.log(JSON.stringify(result.ops, undefined, 2));
    })

    // db.collection('Users').insertOne({
    //     name: 'Teddy',
    //     age: 81,
    //     location: 'Santa Cruz'
    // }, function(err, result) {
    //     if (err) {
    //         return console.log('Error inserting data!', err);
    //     } else {
    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //     }
    // });


    // Close the connection
    client.close();
});