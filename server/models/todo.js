var mongoose = require('mongoose');

// Create a model here
var Todo = mongoose.model('User', {
    text: {
        type: String, // This just sets the type of the doc property
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number,
        default: null
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
});


module.exports = {
    Todo
}