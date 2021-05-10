const express = require('express');
const app = express();
const postsRoute = require('./routes/posts');
const indexRoute = require('./routes/index');

app.use(express.static(__dirname + '/doc'));
//const http = require('http');
const fs = require('fs');


app.set('view engine', 'pug');


app.use(express.json());

/**
*@api {get} /ashanti/towns Towns in the Ashanti Region 
*@apiName AshantiTowns
*@apiGroup Towns
*
*/
app.use('/ashanti/towns', postsRoute);

/**
*@api {get} /towns Towns in Ghana
*@apiName TownsInGhana
*@apiGroup Towns
*
*/
app.use('/towns', postsRoute);

app.get('/', function(req, res) { 
    res.sendFile('index.html',{root: __dirname})
});

// LISTENING TO SERVER
app.listen(process.env.PORT || 3000);



