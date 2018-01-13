var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.createConnection(process.env.MONGODB_URI);

module.exports = {
    mongoose
};