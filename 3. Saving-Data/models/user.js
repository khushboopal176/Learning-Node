const mongoose = require('mongoose');

let User = new mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },
);

module.exports = mongoose.model("User", User);