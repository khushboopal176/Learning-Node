// We'll just be refering to the HTML part here to keep the file 
// readable 
const express = require('express')
const app = require('express')()

// We'll need to use the express middleware 
// to serve static content
// public can be relaced with the folder you want to use
app.use(express.static('public'))

// Create the basic route ('/')
// This is the homepage of your website
app.get('/', function(req,res) {

    // To send a formatted response.
    res.send('Hey! It works.<br>This should be in next line and <b>bold</b>')
});

// That's great but what about large HTML files
// You can see the public folder. This folder contains all the 
// resources that need to be served
// When you visit the URL/<filname>, you'll be able to view these files 

// Listen to the requests made to the server
app.listen(PORT, function() {
    console.log('Listening..')
});

// Now you know how it works. 
// Try improving your previous code to serve HTML.