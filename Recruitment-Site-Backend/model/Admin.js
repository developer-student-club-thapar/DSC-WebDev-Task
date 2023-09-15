const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
    }

});

const Admin = mongoose.model('Admin', AdminSchema);