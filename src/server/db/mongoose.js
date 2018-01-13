require('./config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true }, function(err, db) {
    if (err) { console.log(err) };
});

module.exports = {
    mongoose
};