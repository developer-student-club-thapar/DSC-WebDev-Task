const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: String,
        required: true,
    },  
})

const User = mongoose.model('User', UserSchema);