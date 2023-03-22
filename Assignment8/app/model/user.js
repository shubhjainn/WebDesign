const mongoose = require("mongoose");

module.exports = mongoose.model("User",{
    fullName: {type: String, requied: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 3},
});

