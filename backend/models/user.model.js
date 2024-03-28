const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

})

const UserModel = mongoose.model('user', UserSchema);

module.exports = {
    UserModel
}