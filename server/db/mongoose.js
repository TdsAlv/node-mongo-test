const mongoose = require('mongoose');

// This sets Mongoose to use promises
mongoose.Promise = global.Promise;

//Connect to the database
mongoose.connect('mongodb://localhost:27017/TodoApp');


module.exports = {
    mongoose
};