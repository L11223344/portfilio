const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
    contactName: {
        type: String,
        default: "Ali"
    },
    contactNumber: {
        type: Number,
        default: 1

    },
    emailAddress: {
        type: String,
        default: "Ali@gmail.com"

    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

})


module.exports = mongoose.model('Contact', contactSchema)