var {mongoose} = require('../db/mongoose');

var Book = mongoose.model('Book', {
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    description: {
        type: String,
        default: '',
        trim: true
    },
    status: {
        type: String,
        default: ''
    },
    imageUrl: {
        type: String,
        required: true,
        default: ''
    },
    platforms: {
        type: String,
        default: ''
    }
});

module.exports = {Book};