const User = require('../../Model/user')


exports.checkUserSuccess = async (req, res, next) => {
    try {

        const users = await User.find({}).select('success');
        return users[0].success
    } catch (error) {
        console.log(error)
    }
}