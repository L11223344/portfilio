const mongoose = require('mongoose');





const connectDB = async () => {
    const conn = await mongoose.connect('mongodb+srv://jhon:passpass@cluster0.iv28m.mongodb.net/portfilio?retryWrites=true&w=majority', {
        useNewUrlParser: true
    })

    console.log('MongoDB is connected sucessfully')
}

module.exports = connectDB;