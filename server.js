// // server.js
// // entry point where everything will be run by node


//////////////////////////  Simple Version //////////////////////////

// // import the http module
// var http = require('http');
//
// // create our server, and pass function to handle server requests
// var server = http.createServer(handleRequests);
//
// // handle sending requests and returning responses
// function handleRequests(request, response) {
//     response.end('Hello world!'); // returns a string to page
// }
//
// // start server and listen on port x, can check out at localhost:8080
// server.listen(8080, function() {
//     console.log('Listening on port 8080'); // used to verify that it is listening
// });


//////////////////////////  EXPRESS Version //////////////////////////

var express = require('express'); // import the express module
var app = express(); // create an instance of express
var port = 8080; // store the port number we'd like to use

// start the server
app.listen(port, function() {
    console.log('app started, listening on port ' + port); // indicate our server is running
});
// ^ code above is not enough to display page, we need to create a path to route to.

// route our app to the '/' root folder (homepage)
app.get('/', function(request, response) {
    response.send('hello world!'); // when anyone navigates to the homepage send the string reponse 'hello world!'
});


// !!!BONUS!!!
// If you want to automatically update your server upon saving of code
// we can install the package  "nodemon". Run the command "npm install nodemon" to install

// to start watching our server file we run the command "nodemon server.js"
// this will restart the server upon saving any changes to server.js

// Attention:
// if you do not install nodemon globally "npm install -g nodemon", then you will
// have to give the explicit path name to run, in this case the command would be:
// "./node_modules/.bin/nodemon server.js"

// Another option is to update the .bashrc file in your home directory with the path to the node_module commands
// add this line to your .bashrc file: PATH="$PATH:./node_modules/.bin"
// this will allow you to run package module commands locally without globally installing a package
