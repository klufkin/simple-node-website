var express = require('express'); // import the express module
var path = require('path'); // node module - path helper

// create router object
var router = express.Router(); // will apply all our routes to router instead of entire router
// allows us to use several different routers if needed (more modular/reusable approach)

// route our router to the '/' root folder (homepage)
router.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '../index.html'))
});

// route for the about page
router.get('/about', function(request, response) {
    response.sendFile(path.join(__dirname, '../about.html'))
});

// route for contact page
router.get('/contact', function(request, response) {
    response.sendFile(path.join(__dirname, '../contact.html'))
});

// Create a post route for our contact page. This will be used to post(retrieve) form information.
router.post('/contact');

// export our router so server.js can have access to it.
module.exports = router;
