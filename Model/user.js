const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        default: "jhon@gmail.com"

    },
    password: {
        type: String,

    },
    country: {
        type: String,
        default: "US"

    },
    success: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

})


module.exports = mongoose.model('Users', userSchema)