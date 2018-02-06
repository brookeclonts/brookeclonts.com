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

bookSchema.set('collection', 'Book');

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;
