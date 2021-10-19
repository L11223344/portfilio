var express = require('express');
var router = express.Router();
const { createUser } = require('../controllers/user.controller');
const { createContact } = require('../controllers/contact.controller');
const { checkUser } = require('../config/auth/auth');
const contactModel = require('../Model/contact.model');
// route for the main page
router.get('/', function (req, res, next) {
  res.render('home', {
    title: "Home", heading: "Welcome", para: "When you are emotionally and mentally invested in a goal, you are likely to have increased motivation Your mission statement helps you determine what you are passionate about and develop an understanding of what motivates you",
    button_head: "Click to see the About Page"
  });
})

// route for the home page
router.get('/home', function (req, res, next) {
  res.render('home', {
    title: "Home", heading: "Welcome", para: "When you are emotionally and mentally invested in a goal, you are likely to have increased motivation Your mission statement helps you determine what you are passionate about and develop an understanding of what motivates you",
    button_head: "Click to see the About Page"
  });
})

let arr = [];

// the post API for fetching form details
router.post('/test', (req, res) => {
  const body = req.body;
  arr.push(body)
  res.redirect('/home');
})

// route for the LOGIN

router.post('/login', createUser)

// router.post('/updatecontact/:id', function (req, res) {
//   console.log('rrrrrrrrrrrrrrrrr', req.params.id)
// })
// route for the about page
router.post('/contact', createContact)
router.get('/about', checkUser, function (req, res, next) {
  res.render('about', { title: "About Me", para: "WHO YOU ARE!", desc: "Iam a WordPress developer and designer whose portfolio emphasizes her focus on customized, responsive website designs.I build beautiful layouts in using html bootstrap and good use of backend knoledge using node js", name: "Lewis M" });
});

// router.get('/updateview/:id', function (req, res, next) {
//   res.render('updateviews')
// })


router.get('/deletecontacts/:id', async function (req, res) {
  const deletedContacts = await contactModel.findOneAndDelete(req.params.id);

  res.redirect('/bussiness')
})


router.get('/updateview/:id', async function (req, res) {
  const findContact = await contactModel.findById(req.params.id);

  res.render('updateviews', {
    findContact
  })
})

router.post('/updateview/:id', async function (req, res) {

  const updateContact = await contactModel.findByIdAndUpdate(req.params.id, {
    contactName: req.body.contactName,
    contactNumber: req.body.contactNumber,
    emailAddress: req.body.emailAddress
  });

  res.redirect('/bussiness')
})

router.get('/bussiness', checkUser, async function (req, res) {
  const contacts = await contactModel.find({}).sort('contactName');
  res.render('bussiness', {
    contacts: contacts
  })
})

// route for the project page
router.get('/project', function (req, res, next) {
  res.render('project', { title: "Project" });
});

// route for the service page
router.get('/service', function (req, res, next) {
  res.render('service', { title: "Services" });
});
const result = ["FirstName,LastName,ContactNumber"]
// route for the contact page
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: "Contact", results: result });
});

router.get('/login', function (req, res, next) {
  res.render('login')
})


module.exports = router;