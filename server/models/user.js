var mongoose = require('mongoose');

// Create a model here
var User = mongoose.model('User', {
    email: {
        type: String, // This just sets the type of the doc property
        required: true,
        minlength: 1,
        trim: true
    }
});

// // This is the actual todo note
// var newUser = new User({
//     email: 'tds@gmail.com',
// });

// // And here we save it to the database
// newUser.save()
// .then(function(document) {
//     console.log('Saved user: ', document);
// }, function(err) {
//     console.log('Unable to save user: ', err);
// });

module.exports = {
    User
}