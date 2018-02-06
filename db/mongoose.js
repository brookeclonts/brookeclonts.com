var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.createConnection(process.env.MONGODB_URI);
const options = {
    useMongoClient: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: 10, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
  };
mongoose.connect(process.env.MONGODB_URI, options).then(
    () => {},
    err => { console.log(`${err}: unable to connect to db`) }
  );;

module.exports = {
    mongoose
};