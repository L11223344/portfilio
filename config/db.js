const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()


console.log('env', process.env.MONGODB_URI)

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true
    })

    console.log('MongoDB is connected sucessfully')
}

module.exports = connectDB;