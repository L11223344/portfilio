const User = require('../../Model/user')


exports.checkUser = async (req, res, next) => {
    try {

        const username = req.body.username;
        const password = req.body.password;

        const userExists = await User.find({
            success: true
        })

        console.log('check', userExists)

        if (userExists.length == 0) {
            res.redirect('/login')
        } else {
            next()
        }
    } catch (error) {
        console.log(error)
    }
}