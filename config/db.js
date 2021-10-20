const mongoose = require('mongoose');





const connectDB = async () => {
    const conn = await mongoose.connect('mongodb+srv://portfolio:root@cluster0.loq8j.mongodb.net/portfolio?retryWrites=true&w=majority', {
        useNewUrlParser: true
    })

    console.log('MongoDB is connected sucessfully')
}

module.exports = connectDB;