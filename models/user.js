const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/eleganz`);

const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    contact: Number,
    isadmin: Boolean,
    cart: {
        type: Array,
        default: []
    },
    orders: {
        type: Array,
        default: []
    },
    picture: String
});

module.exports = mongoose.model('user', userSchema);