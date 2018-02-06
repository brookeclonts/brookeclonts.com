var {mongoose} = require('../db/mongoose');
var Schema = mongoose.Schema;

var blogPostSchema = new Schema({
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

blogPostSchema.set('collection', 'BlogPost');

var BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;
