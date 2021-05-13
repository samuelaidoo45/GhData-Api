const express = require('express');
const app = express();
const postRoute = require('./routes/townsRoute');
const indexRoute = require('./routes/index');

app.use(express.static(__dirname + '/doc'));
//const http = require('http');
const fs = require('fs');

app.set('view engine', 'pug');


app.use(express.json());


app.use('/', postRoute);//connecting to route


app.get('/', function(req, res) { 
    res.sendFile('index.html',{root: __dirname})
});//rendering index page


// LISTENING TO SERVER
app.listen(process.env.PORT || 3000);



