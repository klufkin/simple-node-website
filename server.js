//////////////////////////  EXPRESS  //////////////////////////

// Dependencies
var express = require('express'); // import the express module
var app = express(); // create an instance of express
var port = 8080; // store the port number we'd like to use

var router = require('./app/routes'); // navigates to where we have our routes stored
app.use('/', router); // app.use - is an Express middleware object which has access to all of our requests and responses
// whenever it hits route '/'(all routes), will respond by sending "router", out routing file

// Need to tell our server where to find our public folder
// set static files (css and image, etc.)
app.use(express.static(__dirname + '/public'));


// start the server
app.listen(port, function() {
    console.log('app started, listening on port ' + port); // indicate our server is running
});
// ^ code above is not enough to display page, we need to create a path to route to. (created in routes.js)
