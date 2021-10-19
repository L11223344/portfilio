
const Contact = require('../Model/contact.model')

exports.getUsers = async (req, res, next) => {
    try {
        const contact = await Contact.find();
        res.redirect('/bussiness')
    } catch (error) {
        console.log(error)
    }
}


exports.createContact = async (req, res, next) => {
    try {
        const contacts = await Contact.create(req.body);
        return res.json({
            success: true,
            data: contacts,
            message: "sucessfully created"
        })
    } catch (error) {
        console.log(error)
    }
}
