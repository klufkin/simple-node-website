# Node Website notes
simple site built with node and express

* 1- Built a simple node server
* 2 - Updated our node server w/ express
* 3 - In this step we add routes to our node/express application
* 4 - Built out our views, and used express so node can serve our html files
* 5 - Used the templating engine 'ejs' to render data into the 'about' view
** This was done by setting the express templating engine to 'ejs', and then rendering the data in the routes.js file

* Public folder contains all of our static files e.g. - html, css, images etc.
* App folder contains logic


### Using Nodemon
If you want to automatically update your server upon saving of code
we can install the package  "nodemon". Run the command "npm install nodemon" to install

to start watching our server file we run the command "nodemon server.js"
this will restart the server upon saving any changes to server.js

##### Attention:
if you do not install nodemon globally "npm install -g nodemon", then you will
have to give the explicit path name to run, in this case the command would be:
"./node_modules/.bin/nodemon server.js"

Another option is to update the .bashrc file in your home directory with the path to the node_module commands
add this line to your .bashrc file: PATH="$PATH:./node_modules/.bin"
this will allow you to run package module commands locally without globally installing a package
