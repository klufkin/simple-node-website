// server.js
// entry point where everything will be run by node

// import the http module
var http = require('http');

// create our server, and pass function to handle server requests
var server = http.createServer(handleRequests);

// handle sending requests and returning responses
function handleRequests(request, response) {
    response.end('Hello world!'); // returns a string to page
}

// start server and listen on port x, can check out at localhost:8080
server.listen(8080, function() {
    console.log('Listening on port 8080'); // used to verify that it is listening
});
