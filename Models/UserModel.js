const {Schema, model} = require('mongoose');

User = new Schema(
    {
        firstname: {type: String, required: true},
        lastname: {type: String, required: true},
        email: {type: String, unique: true, required: true},
        password: {type: String, required: true},
    }
);

module.exports = new model('User', User);