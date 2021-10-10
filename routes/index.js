var express = require('express');
var router = express.Router();

// route for the main page
router.get('/', function (req, res, next) {
  res.render('home',{title:"Home",heading:"Welcome",para:"When you are emotionally and mentally invested in a goal, you are likely to have increased motivation Your mission statement helps you determine what you are passionate about and develop an understanding of what motivates you",
button_head:"Click to see the About Page"});
})

// route for the home page
router.get('/home', function (req, res, next) {
  res.render('home',{title:"Home",heading:"Welcome",para:"When you are emotionally and mentally invested in a goal, you are likely to have increased motivation Your mission statement helps you determine what you are passionate about and develop an understanding of what motivates you",
  button_head:"Click to see the About Page"});
})

let arr=[];

// the post API for fetching form details
router.post('/test', (req, res) => {
  const body=req.body;
 arr.push(body)
  res.redirect('/home')
})
// route for the about page
router.get('/about', function (req, res, next) {
  res.render('about',{title:"About Me",para:"WHO YOU ARE!",desc:"Iam a WordPress developer and designer whose portfolio emphasizes her focus on customized, responsive website designs.I build beautiful layouts in using html bootstrap and good use of backend knoledge using node js",name:"Lewis M"});
});

// route for the project page
router.get('/project', function (req, res, next) {
  res.render('project',{title:"Project"});
});

// route for the service page
router.get('/service', function (req, res, next) {
  res.render('service',{title:"Services"});
});
const result=["FirstName,LastName,ContactNumber"]
// route for the contact page
router.get('/contact', function (req, res, next) {
  res.render('contact',{title:"Contact",results:result});
});
module.exports = router;