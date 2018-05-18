const mongoose = require('mongoose');

// This sets Mongoose to use promises
mongoose.Promise = global.Promise;

//Connect to the database
mongoose.connect('mongodb://localhost:27017/TodoApp');
// Create a model here
var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// This is the actual todo note
var newTodo = new Todo({
    text: 'Read a book',
    completed: true,
    completedAt: 12
});

// And here we save it to the database
newTodo.save()
.then(function(document) {
    console.log('Saved todo: ', document);
}, function(err) {
    console.log('Unable to save todo: ', err);
})