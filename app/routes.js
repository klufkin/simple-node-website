var express = require('express'); // import the express module

// create router object
var router = express.Router(); // will apply all our routes to router instead of entire router
// allows us to use several different routers if needed (more modular/reusable approach)

// route our router to the '/' root folder (homepage)
router.get('/', function(request, response) {
    response.send('hello world!'); // when anyone navigates to the homepage send the string reponse 'hello world!'
});

// route for the about page
router.get('/about', function(request, response) {
    response.send('hello world I am the about page!');
});

// route for contact page
router.get('/contact', function(request, response) {
    response.send('contact page');
});

// Create a post route for our contact page. This will be used to post(retrieve) form information.
router.post('/contact');

// export our router so server.js can have access to it.
module.exports = router;
