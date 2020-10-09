var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt   = require('bcrypt');

var userSchema = new Schema({
    name         : String, 
    email        : String,
    password     : String,
});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, 10, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.set('collection', 'users');
var User = mongoose.model('users', userSchema);
module.exports = User;