const express = require('express');
const app = express();
const townsRoute = require('./routes/townsRoute');
const universitiesRoute = require('./routes/universitiesRoute');
const mpsRoute = require('./routes/mpsRoute');

app.use(express.static(__dirname + '/doc'));
//const http = require('http');
const fs = require('fs');

app.set('view engine', 'pug');

app.use(express.json());

app.use('/', townsRoute);//connecting to route
app.use('/', universitiesRoute);
app.use('/', mpsRoute);

app.use(express.static('/home/tivateo2/app.tivateonline.com/ghdata/'));

// Serve the index.html for any route
app.get('*', (req, res) => {
  res.sendFile(path.join('/home/tivateo2/app.tivateonline.com/ghdata/', 'index.html'));
});

// app.get('/ghdata', function(req, res) { 
//     res.sendFile('index.html',{root: __dirname});
// });//rendering index page

// LISTENING TO SERVER
app.listen(process.env.PORT || 3000);



