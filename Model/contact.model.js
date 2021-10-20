const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
    contactName: {
        type: String,
        default: "Zunar"
    },
    contactNumber: {
        type: Number,
        default: 1

    },
    emailAddress: {
        type: String,
        default: "Zunar@gmail.com"

    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

})


module.exports = mongoose.model('Contact', contactSchema)