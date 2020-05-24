// I hope you are familiar with this part
const express = require('express')
const app = require('express')()

// This is required for database connectivity
const mongoose = require('mongoose')

// For parsing input data, without this it's not possible
const bodyParser = require('body-parser')

// For using the User schema
const User = require('./models/user')

// This connects to the database
mongoose.connect('mongodb://localhost:27017/todos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));;

// Implementing body-parser for JSON input
app.use(bodyParser.json())

//To store data
app.post('/user', (req,res) => {
    console.log(req.body); // Shows the input data

    // Creating a new user using the user Schema
    const newUser = new User({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
    });

    // Saving the user to the database
    newUser.save()
    .then(user => res.send(user))
    .catch(err => res.status(400).send(err))
})

// To retreive data
app.get('/users', (req,res) => {

    // Finding all users
    User.find()
    .then(users => res.send(users))
    .catch(err => res.status(400).send(err))
})


// Listen to the requests made to the server
app.listen(3000, function () {
    console.log('Listening..')
});