const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

// This will allow Express to handle JSON.
app.use(bodyParser.json());

app.post('/todos', function(req, res) {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save()
    .then(function(document) {
        res.send(document);
    }, function(err) {
        res.status(400).send(err);
    });
});



app.listen(3000, function() {
    console.log('Started on port 3000');
});