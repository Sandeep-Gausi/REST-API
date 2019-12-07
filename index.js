const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Set up express app
const app = express();

//Connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// Initilize routes
app.use('/api',routes);

//Error handling middleware
app.use(function(err,req,res,next){
    // console.log(err);
    res.status(422).send({error: err.message});
});

// Listen for requests
app.listen(process.env.port || 4000 , function(){
    console.log("Now listening for request");
});