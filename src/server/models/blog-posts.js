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
    },
    attachmentUrl: {
        type: String,
        required: false, 
        default: null,
    }
});

// blogposts is the name of the db in heroku
blogPostSchema.set('collection', 'blogposts');

var BlogPost = mongoose.model('blogposts', blogPostSchema);

module.exports = BlogPost;
