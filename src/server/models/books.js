var {mongoose} = require('../db/mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
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

// books is the name of the db/ collection in heroku
bookSchema.set('collection', 'books');

var Book = mongoose.model('books', bookSchema);

module.exports = Book;
