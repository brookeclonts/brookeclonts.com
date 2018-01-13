var {mongoose} = require('../db/mongoose');

var BlogPost = mongoose.model('BlogPost', {
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    description: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    body: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    imageUrl: {
        type: String,
        required: true,
        default: ''
    }
});

module.exports = {BlogPost};