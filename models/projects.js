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

projectSchema.set('collection', 'Project');

var Project = mongoose.model('Project', projectSchema);

module.exports = Project;
