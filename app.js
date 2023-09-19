const express = require('express');
const app = express();
const townsRoute = require('./routes/townsRoute');
const universitiesRoute = require('./routes/universitiesRoute');
const mpsRoute = require('./routes/mpsRoute');
const path = require('path');

// app.use(express.static('/home/tivateo2/app.tivateonline.com/ghdata/doc'));

app.use(express.static('/home/tivateo2/app.tivateonline.com/ghdata/' + '/doc/'));
//const http = require('http');
const fs = require('fs');

app.set('view engine', 'pug');

app.use(express.json());

app.use('/ghdata/doc/', townsRoute);//connecting to route
app.use('/ghdata/doc/', universitiesRoute);
app.use('/ghdata/doc/', mpsRoute);


// // Serve the index.html for any route
// app.get('*', (req, res) => {
//   res.sendFile(path.join('/home/tivateo2/app.tivateonline.com/ghdata/doc', 'index.html'));
// });

app.get('/ghdata/doc/', function(req, res) { 
    res.sendFile('index.html',{root: '/home/tivateo2/app.tivateonline.com/ghdata/doc/'});
});//rendering index page

// LISTENING TO SERVER
app.listen(process.env.PORT || 3000);



