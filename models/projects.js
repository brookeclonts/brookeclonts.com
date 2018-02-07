var {mongoose} = require('../db/mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
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
    url: {
        type: String,
        required: true,
        default: ''
    },
    img: {
        type: String,
        required: true,
        default: ''
    }
});

// projects is the name of the db/ collection in heroku
projectSchema.set('collection', 'projects');

var Project = mongoose.model('projects', projectSchema);

module.exports = Project;
