// Import the express package here
const express = require('express')

// Create an app using the express framework.
// We'll be using this app for all the purposes going ahead
const app = express()

// Mention the port that you want to use
const PORT = xxx;

// Create the basic route ('/')
// This is the homepage of your website
app.get('/', function(req,res) {
    // Here you have two arguments you can access
    // 'req' and 'res'
    // req object contains details about the request coming to the route
    // res object will contain the response to be sent back

    // To send a simple response
    res.send('Hey! It works.')
});

// Listen to the requests made to the server
app.listen(PORT, function() {
    console.log('Listening..')
});

// Now you know how it works. 
// Try creating different routes.
// Hints: About page, contact page 