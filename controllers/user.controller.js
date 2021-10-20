
const User = require('../Model/user')

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        return res.json({
            count: store.length,
            data: users
        })
    } catch (error) {
        console.log(error)
    }
}


exports.createUser = async (req, res, next) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const userExists = await User.find({
            username: username,
            password: password
        })


        // updating the success to true after login

        if (userExists.length == 0) {

            res.redirect('/login')
        } else {
            const updatingSuccess = await User.findOneAndUpdate({
                success: true
            })

            res.redirect('/bussiness')
        }

    }
    catch (error) {
        console.log(error)
    }
}
