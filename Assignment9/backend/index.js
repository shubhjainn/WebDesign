const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

// var mongoose = require("mongoose");
// //configure ===========
// //set port
// var port = process.env.PORT || 8000;
// //connect to our mongoDB database
// mongoose.connect("mongodb://127.0.0.1:27017/test",{useNewUrlParser: true});

const router = require('./app/routes/userRouter');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/user', router);

app.use(function (req, res) {
    return res.status(404).send({message: "Route not found"});
});

app.listen(8000); 
console.log("Server Started at port 8000");

module.exports = app;